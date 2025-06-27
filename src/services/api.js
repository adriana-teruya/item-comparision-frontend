import { fetchMockProducts } from './mockData';

// Configuração para API - tentar diferentes portas comuns para backend
const getApiConfig = () => {
  // Tentar diferentes configurações de backend
  const configs = [
    { baseURL: 'http://192.168.15.6:8080', name: 'Porta 8080' },
    { baseURL: 'http://192.168.15.6:5000', name: 'Porta 5000' },
    { baseURL: 'http://192.168.15.6:8000', name: 'Porta 8000' },
    { baseURL: 'http://192.168.15.6:3001', name: 'Porta 3001' },
    { baseURL: 'http://localhost:3001', name: 'Localhost 3001' },
    { baseURL: 'http://localhost:8080', name: 'Localhost 8080' },
    { baseURL: 'http://localhost:5000', name: 'Localhost 5000' },
    { baseURL: 'http://localhost:8000', name: 'Localhost 8000' },
  ];
  
  return configs;
};

const fetchWithTimeout = async (url, options = {}, timeout = 3000) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

export const fetchProducts = async () => {
  const configs = getApiConfig();
  
  for (const config of configs) {
    try {
      console.log(`🔍 Testando backend em: ${config.name} (${config.baseURL})`);
      
      // Testar se o servidor está rodando
      try {
        const healthResponse = await fetchWithTimeout(`${config.baseURL}/`);
        const healthData = await healthResponse.text();
        console.log(`✅ ${config.name} está respondendo`);
        
        // Se retornou HTML, é provavelmente o frontend
        if (healthData.includes('<html>')) {
          console.log(`⚠️ ${config.name} retornou HTML (provavelmente frontend)`);
          continue;
        }
        
        console.log(`📋 Resposta de ${config.name}:`, healthData);
        
      } catch (healthError) {
        console.log(`❌ ${config.name} não responde na raiz:`, healthError.message);
        continue;
      }
      
      // Testar endpoints de produtos
      const endpoints = [
        '/api/products',
        '/products', 
        '/api/product',
        '/product',
        '/api/items',
        '/items'
      ];
      
      for (const endpoint of endpoints) {
        try {
          console.log(`🔍 Testando ${config.name}${endpoint}`);
          const response = await fetchWithTimeout(`${config.baseURL}${endpoint}`);
          
          if (!response.ok) {
            console.log(`❌ ${config.name}${endpoint} falhou:`, response.status);
            continue;
          }
          
          const data = await response.json();
          console.log(`✅ ${config.name}${endpoint} funcionou!`);
          console.log('📊 Estrutura da resposta:', {
            hasSuccess: !!data.success,
            hasData: !!data.data,
            dataType: Array.isArray(data.data) ? 'array' : typeof data.data,
            dataLength: Array.isArray(data.data) ? data.data.length : 'N/A',
            firstItem: Array.isArray(data.data) && data.data.length > 0 ? {
              id: data.data[0].id,
              name: data.data[0].name,
              hasImageUrl: !!data.data[0].image_url,
              hasPrice: !!data.data[0].price,
              hasRating: !!data.data[0].rating,
              priceStructure: data.data[0].price ? Object.keys(data.data[0].price) : 'N/A',
              ratingStructure: data.data[0].rating ? Object.keys(data.data[0].rating) : 'N/A'
            } : 'N/A'
          });
          
          if (data && data.success && Array.isArray(data.data)) {
            console.log('🎯 Retornando dados do backend:', data.data.length, 'produtos');
            return data.data;
          } else if (Array.isArray(data)) {
            console.log('🎯 Retornando array direto:', data.length, 'produtos');
            return data;
          } else if (data && data.products && Array.isArray(data.products)) {
            console.log('🎯 Retornando data.products:', data.products.length, 'produtos');
            return data.products;
          }
          
          console.log('⚠️ Formato de resposta inesperado:', data);
          return data;
          
        } catch (endpointError) {
          console.log(`❌ ${config.name}${endpoint} falhou:`, endpointError.message);
          continue;
        }
      }
      
    } catch (error) {
      console.log(`💥 Erro ao testar ${config.name}:`, error.message);
      continue;
    }
  }
  
  // Se nenhum backend funcionou, usar dados mock
  console.log('⚠️ Nenhum backend encontrado, usando dados mock');
  return fetchMockProducts();
}; 
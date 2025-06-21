// Dados mock para teste da aplicação, inspirados no exemplo
export const mockProducts = [
  {
    id: "1",
    name: "Fones de Ouvido Sem Fio Sony WH-1000XM4",
    image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&crop=center",
    price: {
      current: 349.99,
      original: 399.99,
      currency: "BRL",
      discount: "13"
    },
    rating: {
      stars: 4.5,
      reviews: 1283
    },
    vendor: "Sony Store Oficial",
    specifications: {
      "Tipo": "Over-ear",
      "Conectividade": "Bluetooth 5.0",
      "Duração da bateria": "30 horas"
    }
  },
  {
    id: "2",
    name: "Apple AirPods Pro com Cancelamento Ativo de Ruído",
    image_url: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=300&fit=crop&crop=center",
    price: {
      current: 249.99,
      original: 279.99,
      currency: "BRL",
      discount: "11"
    },
    rating: {
      stars: 4.8,
      reviews: 2456
    },
    vendor: "Apple Premium Reseller",
    specifications: {
      "Tipo": "In-ear",
      "Conectividade": "Bluetooth 5.0",
      "Duração da bateria": "24 horas (com estojo)"
    }
  },
  {
    id: "3",
    name: "Fones de Ouvido Bose 700 com Cancelamento de Ruído",
    image_url: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop&crop=center",
    price: {
      current: 379.99,
      original: 399.99,
      currency: "BRL",
      discount: "5"
    },
    rating: {
      stars: 4.7,
      reviews: 987
    },
    vendor: "Bose Brasil",
    specifications: {
      "Tipo": "Over-ear",
      "Conectividade": "Bluetooth 5.0",
      "Duração da bateria": "20 horas"
    }
  },
  {
    id: "4",
    name: "Fones de Ouvido Sem Fio Jabra Elite 75t",
    image_url: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop&crop=center",
    price: {
      current: 149.99,
      original: 179.99,
      currency: "BRL",
      discount: "17"
    },
    rating: {
      stars: 4.2,
      reviews: 1024
    },
    vendor: "Tecno Shop",
    specifications: {
      "Tipo": "In-ear",
      "Conectividade": "Bluetooth 5.0",
      "Duração da bateria": "28 horas (com estojo)"
    }
  },
  {
    id: "5",
    name: "Samsung Galaxy Buds Pro",
    image_url: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop&crop=center",
    price: {
      current: 169.99,
      original: 199.99,
      currency: "BRL",
      discount: "15"
    },
    rating: {
      stars: 4.4,
      reviews: 1530
    },
    vendor: "Samsung",
    specifications: {
      "Tipo": "In-ear",
      "Conectividade": "Bluetooth 5.0",
      "Duração da bateria": "18 horas (com estojo)"
    }
  }
];

export const fetchMockProducts = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockProducts);
  }, 500);
}); 
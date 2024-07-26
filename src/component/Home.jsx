import React, { useState, useEffect } from 'react';
import ProductPopup from './ProductPopup';

export default function Home({ addToCart, selectedCategory }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = () => {
      let url = 'https://api.escuelajs.co/api/v1/products';
      if (selectedCategory) {
        url = `https://api.escuelajs.co/api/v1/categories/${selectedCategory}/products`;
      }

      fetch(url)
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="hero">
      <div className="container my-5">
        <h2 className="mb-4">Home</h2>
        <input 
          type="text" 
          className="form-control mb-4" 
          placeholder="Search a product" 
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="row">
          {filteredProducts.map(product => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 text-center p-4 product-card" onClick={() => handleProductClick(product)}>
                <img src={product.images[0]} className="card-img-top" alt={product.title} height="250px"/>
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.title}</h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <button 
                    className="btn btn-outline-dark"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && <ProductPopup product={selectedProduct} onClose={handleClosePopup} />}
    </div>
  );
}

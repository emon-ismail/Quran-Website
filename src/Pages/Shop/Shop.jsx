import React, { useState, useEffect } from 'react';
import ComingSoon from '../../Components/Animation/ComingSoon';

const Shop = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch('shopdata.json')
  //     .then(response => response.json())
  //     .then(data => setProducts(data.products))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (
    // <div className="grid grid-cols-4 gap-4 p-8 mt-24">
    //   {products.map(product => (
    //     <div key={product.product_name} className="border p-4 text-center">
    //       <div className="flex justify-center">
    //         <img src={product.product_picture} alt={product.product_name} className="w-80 mb-2" />
    //       </div>
    //       <h2 className="text-lg font-semibold">{product.product_name}</h2>
    //       <p className="text-gray-600">${product.product_price.toFixed(2)}</p>
    //       <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
    //         Buy Now
    //       </button>
    //     </div>
    //   ))}
    // </div>
    <div>
      <ComingSoon></ComingSoon>
    </div>
  );
};

export default Shop;

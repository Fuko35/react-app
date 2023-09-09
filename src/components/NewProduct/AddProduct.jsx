import React from "react";

function AddProduct({ setIsOpen }) {
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Ürün ekle</button>
    </div>
  );
}

export default AddProduct;

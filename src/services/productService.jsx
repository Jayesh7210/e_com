// src/services/productService.js
const mockProducts = [
  {
    id: 1,
    name: "Troxx Black Tee",
    price: 499,
    image: "public/images/categories/kids.jpg",
    description: "Stylish black tee with a modern fit."
  },
  {
    id: 2,
    name: "Troxx White Tee",
    price: 449,
    image: "public/images/categories/kids.jpg",
    description: "Minimal white tee perfect for summer."
  },
  {
    id: 3,
    name: "Custom Graphic Tee",
    price: 599,
    image: "public/images/categories/kids.jpg",
    description: "Unique designs from independent creators."
  }
];

export const getAllProducts = async () => {
  return mockProducts;
};

export const getProductById = async (id) => {
  return mockProducts.find((product) => product.id === Number(id));
};

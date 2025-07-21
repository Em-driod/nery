import { useState } from "react";
import { createProduct } from "../api/Product";
import useAuthStore from "../store/authStore"; // Assuming you're using Zustand for auth

const ProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const { token } = useAuthStore((state) => state); // Get token from auth store

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      alert("You must be logged in to add a product!");
      return;
    }

    const productData = { name, price, description, image };

    try {
      await createProduct(productData, token);
      alert("Product created successfully!");
      setName("");
      setPrice("");
      setDescription("");
      setImage("");
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Failed to create product.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
      <button type="submit">Create Product</button>
    </form>
  );
};

export default ProductForm;

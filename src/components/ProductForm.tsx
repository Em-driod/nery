import { useState } from "react";
import { createProduct } from "../api/Product";

interface ProductFormProps {
  token?: string; // Make token an optional prop
}

const ProductForm = ({ token }: ProductFormProps) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      alert("Authentication token is missing. Please log in.");
      return;
    }

    const productData = { name, price: parseFloat(price), description, image }; // Ensure price is a number

    try {
      await createProduct(productData, token);
      alert("Product created successfully!");
      // Clear form fields
      setName("");
      setPrice("");
      setDescription("");
      setImage("");
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Failed to create product. Check console for details.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-800 rounded-lg text-white">
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        min="0"
        step="0.01"
        className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
      />
      <textarea
        placeholder="Product Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        rows={4}
        className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
        className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
      >
        Create Product
      </button>
    </form>
  );
};

export default ProductForm;
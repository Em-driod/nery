// api/cart.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

// Define the shape of a cart item as it would be on the backend
interface ServerCartItem {
  productId: number; // Use productId for consistency with a backend
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Mock database (simulated server state)
let mockServerCart: ServerCartItem[] = [];

// Simulate network delay
const simulateNetworkDelay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// --- Simulated Cart API Endpoints ---

// Fetch user's cart
export const fetchUserCart = async (userId: string): Promise<ServerCartItem[]> => {
  console.log(`[API] Fetching cart for user: ${userId}`);
  await simulateNetworkDelay(800);
  // In a real app, you'd fetch from `/api/users/${userId}/cart`
  return [...mockServerCart]; // Return a copy to avoid direct mutation
};

// Add item to cart
export const addItemToCart = async (userId: string, item: Omit<ServerCartItem, 'quantity'> & { quantity?: number }): Promise<ServerCartItem[]> => {
  console.log(`[API] Adding item to cart for user: ${userId}`, item);
  await simulateNetworkDelay();

  const existingItemIndex = mockServerCart.findIndex(
    (cartItem) => cartItem.productId === item.productId
  );

  if (existingItemIndex > -1) {
    mockServerCart[existingItemIndex].quantity += item.quantity || 1;
  } else {
    mockServerCart.push({ ...item, quantity: item.quantity || 1, productId: item.productId });
  }
  return [...mockServerCart];
};

// Update item quantity in cart
export const updateCartItemQuantity = async (
  userId: string,
  productId: number,
  quantity: number
): Promise<ServerCartItem[]> => {
  console.log(`[API] Updating quantity for product ${productId} to ${quantity} for user: ${userId}`);
  await simulateNetworkDelay();

  if (quantity <= 0) {
    mockServerCart = mockServerCart.filter((item) => item.productId !== productId);
  } else {
    const item = mockServerCart.find((cartItem) => cartItem.productId === productId);
    if (item) {
      item.quantity = quantity;
    }
  }
  return [...mockServerCart];
};

// Remove item from cart
export const removeCartItem = async (userId: string, productId: number): Promise<ServerCartItem[]> => {
  console.log(`[API] Removing product ${productId} from cart for user: ${userId}`);
  await simulateNetworkDelay();
  mockServerCart = mockServerCart.filter((item) => item.productId !== productId);
  return [...mockServerCart];
};

// Clear the cart
export const clearUserCart = async (userId: string): Promise<ServerCartItem[]> => {
  console.log(`[API] Clearing cart for user: ${userId}`);
  await simulateNetworkDelay();
  mockServerCart = [];
  return [];
};

// Initialize mock cart for testing
mockServerCart = [
  { productId: 1, name: "Laptop", price: 1000, image: "/bat.jpg", quantity: 1 },
  { productId: 2, name: "Smartphone", price: 500, image: "/elegant-smartphone-composition.jpg", quantity: 2 },
];
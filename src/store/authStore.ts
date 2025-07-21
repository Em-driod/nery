import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

interface AuthState {
  user: { id: string; name: string; email: string } | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Zustand store for authentication
const useAuthStore = create<AuthState>((set) => {
  const token = localStorage.getItem("token");

  if (token) {
    axios
      .get(`${API_URL}/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => set({ user: res.data, token }))
      .catch(() => {
        localStorage.removeItem("token");
        set({ user: null, token: null });
      });
  }

  return {
    user: null,
    token,
    
    // Register User
    register: async (name, email, password) => {
      try {
        const res = await axios.post(`${API_URL}/register`, { name, email, password });
        console.log(res.data.message); // Debugging
      } catch (err) {
        
      }
    },

    // Login User
    login: async (email, password) => {
      try {
        const res = await axios.post(`${API_URL}/login`, { email, password });
        set({ user: res.data.user, token: res.data.token });
        localStorage.setItem("token", res.data.token);
      } catch (err) {
      
      }
    },

    // Logout User
    logout: () => {
      localStorage.removeItem("token");
      set({ user: null, token: null });
    },
  };
});

export default useAuthStore;


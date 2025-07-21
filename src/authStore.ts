import { create } from "zustand";
import axios from "axios";

interface AuthState {
  user: { id: string; name: string; email: string } | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,

  login: async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password }, { withCredentials: true });
      set({ user: res.data.user });
    } catch (error) {
      console.error(error);
    }
  },

  register: async (name, email, password) => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", { name, email, password });
      alert("Registration successful, please log in.");
    } catch (error) {
      console.error(error);
    }
  },

  logout: async () => {
    await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
    set({ user: null });
  },
}));

export default useAuthStore;

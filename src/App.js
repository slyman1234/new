import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../src/components/home/Index";
import Dashboard from "./components/dashboard/Dashboard";
import Registering from "./components/home/Registering";
import { ToastProvider } from "react-toast-notifications";
import Categories from "./components/dashboard/category/Categories";
import Books from "./components/dashboard/books/Books";

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Registering />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/book" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;

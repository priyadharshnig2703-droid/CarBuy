import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import StudentForm from "./components/StudentForm"
import Login from "./components/Login"

function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/student" element={<StudentForm />} />
<Route path="/Login" element={<Login />} />
<Route
path="/products/:id"
element={<ProductPage />}
/>
</Routes>
 </BrowserRouter>
  );
}

export default App;
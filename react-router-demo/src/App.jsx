import {BrowserRouter,Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import About from "./component/About";
import Login from "./component/Login";
import Nav from "./component/Nav";

function App() {
return (
 <BrowserRouter>
<Nav />
<Routes>
<Route path="/"element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/login" element={<Login />} />
</Routes>
</BrowserRouter>
);
}

export default App;
import "../src/styles/styles";
import Auth from "./pages/Auth";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Home from "./pages/Home";
import User from "./pages/User";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

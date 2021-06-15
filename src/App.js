import { BrowserRouter } from "react-router-dom";
import { Menu } from "./organisms/user/Menu";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Router />
    </BrowserRouter>
  );
}

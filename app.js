//Bootstraps the app, loads router
import { initRouter } from "./router/router.js";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";

// Render layout components
document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

// Initialize router
initRouter();

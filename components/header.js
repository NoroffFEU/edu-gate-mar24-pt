import Navbar from "./navbar.js";

export default function Header() {
  return /*HTML*/ `
  <section class="header-section">
     <div>
          <img 
               src="./public/img/logo-header.png" 
               alt="" 
               loading="lazy"
               class="HeaderLogo">
     </div>
     ${Navbar()}
   </section>
  `;
}



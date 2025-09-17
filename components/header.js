import Navbar from "./navbar.js";

export default function Header() {
  return /*HTML*/ `
   <div>
        <img src="./public/img/logo-header.png" alt="" loading="lazy">
   </div>
   <div>
        ${Navbar()}
   </div>
  `;
}
export default function Navbar() {
  return /*HTML*/ `
    <nav class="header-navbar" id="header-navbar">
      <a href="/" data-link class="nav-clicked">Dashboard</a>
      <a href="/about" data-link>About</a>
      <a href="/" data-link>Contact</a>
      ${profileBtnInHeader()}
    </nav>
  `;
}


function profileBtnInHeader(){
     return /*HTML*/`
     <div>
      <img 
               src="./public/icons/user-circle.png" 
               alt="" 
               loading="lazy"
               class="UserLogo">
    </div>
      
     `;
}
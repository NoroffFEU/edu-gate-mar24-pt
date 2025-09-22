export default function Navbar() {
  return /*HTML*/ `
    <nav class="header-navbar" id="header-navbar">
      ${burgerBtn()}
      <div class="nav-links" id="nav-links">
        ${navigationOptions()}
        ${profileBtnInHeader()}
      </div>
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

function navigationOptions(){
  return /*HTML*/ `
      <a href="/" data-link class="nav-clicked">Dashboard</a>
      <a href="/about" data-link>About</a>
      <a href="/" data-link>Contact</a>

  `;
}

function burgerBtn(){
  return /*HTML*/`
    <button class="burgerMenu" id="burger-btn">
        open menu
    </button>
  `;
}
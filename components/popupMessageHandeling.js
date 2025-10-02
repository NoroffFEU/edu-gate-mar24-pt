import ConfirmationMessage from "./confirmationMessage.js";
import ErrorMessage from "./errorMessage.js";

export default function PopUpMessage(type, title, message) {
  return type ? ConfirmationMessage(title, message) : ErrorMessage(title, message);
}

function closePopUp() {
  const message = document.getElementById("message");
  if (message) message.innerHTML = ""; 
}
window.closePopUp = closePopUp;

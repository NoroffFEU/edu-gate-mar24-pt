import ConfirmationMessage from "./confirmationMessage.js";
import ErrorMessage from "./errorMessage.js";

export default function PopUpMessage(type, title, message) {
  return type ? ConfirmationMessage(title, message) : ErrorMessage(title, message);
}
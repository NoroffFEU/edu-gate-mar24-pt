import ConfirmationMessage from "./confirmationMessage";
import ErrorMessage from "./errorMessage";

export default function PopUpMessage(type, title, message) {
  return type ? ConfirmationMessage(title, message) : ErrorMessage(title, message);
}
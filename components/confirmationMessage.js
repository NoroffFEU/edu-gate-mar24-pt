export default function ConfirmationMessage(title, message) {
  return /*HTML*/ `
    <section>
        <div>
            <img src="public/icons/verified.png" alt="" loading="lazy">
        </div>
        <div>
            <h2>${title}</h2>
            <p>${message}</p>
        </div>
    </section>
  `;
}
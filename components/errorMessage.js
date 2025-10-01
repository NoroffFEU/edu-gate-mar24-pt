export default function ErrorMessage(title, message) {
  return /*HTML*/ `
    <section>
        <div>
            <img src="public/icons/fail.png" alt="" loading="lazy">
        </div>
        <div>
            <h2>${title}</h2>
            <p>${message}</p>
        </div>
    </section>
  `;
}
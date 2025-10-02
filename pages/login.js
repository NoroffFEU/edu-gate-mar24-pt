import PopUpMessage from "../components/popupMessageHandeling.js";
import { navigateTo } from "../router/router.js";
window.passwordResetMessage = passwordResetMessage;
window.wrongLoginMessage = wrongLoginMessage;
export default function LogIn(){
    return /*HTML*/`
    <section class="login">
        <span id="message"></span>

        <form>
            <h1>Log in</h1>
            <div class="login-section">
                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="example@gmail.com" required autofocus>
            </div>

             <div class="login-section">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter password" required autofocus>
            </div>

            <div>
                <p>Forgot your password? Click <b onclick="passwordResetMessage()">here</b></p>
            </div>

            <div class="submit-button">
                <button onclick="wrongLoginMessage()">Submit</button>
            </div>
        </form>

    </section>  
    `;
}

function passwordResetMessage(){
    document.getElementById('message').innerHTML = PopUpMessage(true, "Success!", "Please check your email for instructions on how to verify your account.");
}
function wrongLoginMessage(event){
    if (event) event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    if(!email.includes("@") || password === ""){
        document.getElementById('message').innerHTML = PopUpMessage(false, "Failed Log In!", "Wrong password or email address!");
        return;
    }
    navigateTo("/");
}
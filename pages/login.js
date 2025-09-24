export default function LogIn(){
    return /*HTML*/`
    <section class="login">
    
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
                <p>Forgot your password? Click <b>here</b></p>
            </div>

            <div class="submit-button">
                <button>Submit</button>
            </div>
        </form>

    </section>  
    `;
}
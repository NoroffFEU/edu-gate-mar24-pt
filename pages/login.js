export default function LogIn(){
    return /*HTML*/`
    <div>
        <h1>Log in</h1>

        <form>
            <div>
                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="example@gmail.com" required>
            </div>

             <div>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter password" required>
            </div>

            <div>
                <p>Forgot your password? Click <b>here</b></p>
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>


        <a href="/home" data-link>Log In</a>
    </div>  
    `;
}
export default function Students(){
    return /*HTML*/`
    <div class="student-dashboard">
        <h1>Dashboard</h1>
        <div class="student-dashboard-information">
            <div class="student-profile-logo">
                <img src="public/icons/profile-icon.png" alt="" loading="lazy"/>
            </div>
            <h2>Joe Bloggs</h2>
            <h3>Student at Edugate school</h3>
        </div>

        <section class="student-dashboard-buttons">
            <a href="/" data-link>
                <div>
                    <img src="public/icons/user-circle.png" alt="" loading="lazy"/>
                </div>
                <p>See profile</p>
            </a>
            <a href="/" data-link>
                <div>
                    <img src="public/icons/results.png" alt="" loading="lazy"/>
                </div>
                <p>My results</p>
            </a>
            <a href="/" data-link>
                <div>
                    <img src="public/icons/logout.png" alt="" loading="lazy"/>
                </div>
                <p>Log out</p>
            </a>
        </section>
    </div>  
    `;
}

//add correct href paths
//change data to using the json data?
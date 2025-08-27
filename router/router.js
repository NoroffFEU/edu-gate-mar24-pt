// views
import Students from '../pages/students.js'

const Home = () => /*HTML*/`
<h1>testing home</h1>
<a href="/students" data-link>testing link</a>
`;


const NotFound = () => /*HTML*/`
<div>
    <h1>testing 404 error page</h1>
    <a href="/" data-link>Home</a>
</div>
`;
/*
    error when refreshing student page. 
    needs a html file to callback?
*/

const routes = [
  { path: "/", view: Home },
   { path: "/students", view: Students },
];


function router() {
    let path = location.pathname;

    if (path.endsWith("index.html") || path === "/templates/") {
        path = "/";
    }

    const potentialMatches = routes.map(route => ({
        route,
        isMatch: path === route.path
    }));

    let match = potentialMatches.find(routeName => routeName.isMatch);
    if (!match) {
        match = { route: { path: "/404", view: NotFound }, isMatch: true };
    }
    document.querySelector("#app").innerHTML = match.route.view();

}

function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

document.addEventListener("click", e => {
    const link = e.target.closest('a[data-link]');
    if (link) {
        e.preventDefault();
        navigateTo(link.href);
    }
});

document.addEventListener("DOMContentLoaded", router);
window.addEventListener("popstate", router);


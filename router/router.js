import routes from "./routes.js";

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




function router() {
    let path = location.pathname;
    try {
        const url = new URL(window.location.href);
        path = url.pathname;
    } catch (e) {
    }
    if (path.endsWith("index.html") || path === "/templates/") path = "/";

    const route = routes.find(r => r.path === path);
    const view = route ? route.view : NotFound;
    document.querySelector("#app").innerHTML = view();
}

function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

// document.addEventListener("click", e => {
//     const link = e.target.closest('a[data-link]');
//     if (link) {
//         e.preventDefault();
//         navigateTo(link.href);
//     }
// });

// document.addEventListener("DOMContentLoaded", router);
// window.addEventListener("popstate", router);
export function initRouter() {
    document.addEventListener("click", e => {
        const link = e.target.closest('a[data-link]');
        if (link) {
            e.preventDefault();
            navigateTo(link.href);
        }
    });

    window.addEventListener("popstate", router);
    document.addEventListener("DOMContentLoaded", router);
}

export { navigateTo, router };


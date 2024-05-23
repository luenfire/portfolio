function load_home() {
    document.getElementById("content").innerHTML='<object type="text/html" data="home.html" ></object>';
}

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const first = document.getElementById('first');

    function adjustContentMargin() {
        const navbarHeight = navbar.offsetHeight;
        first.style.marginTop = `${navbarHeight}px`;
    }

    // Adjust on load
    adjustContentMargin();

    // Adjust on window resize
    window.addEventListener('resize', adjustContentMargin);
});
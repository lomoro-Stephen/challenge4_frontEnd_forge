(function () {
    const inputEl = document.querySelectorAll("input");
    inputEl.forEach(field => {
        field.addEventListener('input', () => {
            if (field.value !== '') {
                field.classList.add('filled');
            } else {
                field.classList.remove('filled');
            }
        });
    });

    function mobileNavBar() {
        const menuBar = document.querySelector(".menuBars");
        const menu = document.querySelector(".mobile-navBar");
        const body = document.querySelector("body");
        menuBar.addEventListener('click', (event) => {
            event.preventDefault();
            console.log("menuBar clicked");
            menu.classList.toggle("showMenu");
            
            if (menu.classList.contains("showMenu")) {
                body.classList.add("no-scroll");
            } else {
                body.classList.remove("no-scroll");
            }
        });
    }
    mobileNavBar();


})();
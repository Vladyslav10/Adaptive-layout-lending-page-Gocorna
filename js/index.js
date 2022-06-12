/////////////////Burger///////////////////////////////////////////////////////////////////
(function(){
    const burger = document.querySelector('.header__icon');
    const body = document.querySelector('body');
    burger.addEventListener('click', menu)

    function menu (event) {
        if (event.target.closest('.header__icon')) {
            burger.classList.toggle('active');
        }
        if (burger.classList.contains('active')) {
            body.classList.add('lock');
        } else {
            body.classList.remove('lock'); 
        }
    }

    const links = document.querySelectorAll('a[data-goto]');
    if (links.length > 0) {
        for (let index = 0; index < links.length; index++) {
            const link = links[index];
            link.addEventListener('click', onLinkClick);
        };
    }

    function onLinkClick(e) {
        const link = e.target;
        if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
            const gotoBlock = document.querySelector(link.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
            
            if (burger.classList.contains('active')) {
                burger.classList.remove('active');
                body.classList.remove('lock');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
})();
///////////////////////////////////////////////////////////////////////////////////
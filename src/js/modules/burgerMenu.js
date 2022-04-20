const burgerMenu = (buttonSel, menuSel) => {

    const button = document.querySelector(buttonSel),
          menu = document.querySelector(menuSel);

    menu.style.display = 'none';

    button.addEventListener('click', (event) => {
        const e = event.target;
        if ((e.parentNode.matches(buttonSel) || e.matches(buttonSel)) &&
            window.screen.availWidth < 993) {
            if (menu.style.display === 'none') {
                menu.style.display = 'block';
            } else {
                menu.style.display = 'none';
            }
        }
    });
    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menu.style.display = 'none';
        }
    });

};

export default burgerMenu;
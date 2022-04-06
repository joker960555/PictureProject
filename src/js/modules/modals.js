const modals = () => {
    const bindModals = (selModal, selBtn, selClose, giftStatus = false) => {
        const modal = document.querySelector(selModal),
        windows = document.querySelectorAll('[data-modal]');
        let btnPressed = false;

        const calcScroll = () => {
            const div = document.createElement('div');
            div.style.width = '50px';
            div.style.heigth = '50px';
            div.style.overflowY = 'scroll';
            document.body.appendChild(div);

            const scroll = document.body.offsetWidth - document.body.clientWidth;
            return scroll;
        }; 
        const scroll = calcScroll();

        const triggerButtons = (selBtn) => {
            const button = document.querySelectorAll(selBtn);
            button.forEach(item => {
                item.addEventListener('click', (event) => {
                    event.preventDefault();
                    const e = event.target;
                    btnPressed = true;
                    if ((e && e.matches(selBtn)) || 
                    (e && e === item.firstElementChild)) {
                        windows.forEach(item => {
                            item.style.display = 'none';
                            item.classList.add('animated', 'fadeIn');
                        });
                        openModal();
                    }
                });
            });
        };

        const openModal = () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
            if (giftStatus) { 
                document.querySelector(selBtn).remove(); 
            }
        };

        const closeModal = () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        };

        const modalWindow = (selClose, selModal) => {
            modal.addEventListener('click', (event) => {
                const e = event.target;
                if (e && e.matches(selModal) || e && e.matches(selClose)) {
                    closeModal();
                }
            });
        };

        const showModalByTime = (selector, time) => {
            setTimeout(function () {
                let isAnyModalShown = false;
                document.querySelectorAll('[data-modal]').forEach(item => {
                    if (getComputedStyle(item).display !== 'none') {
                        isAnyModalShown = true;
                        console.log(item);
                        console.log(isAnyModalShown);
                    }
                });
                if (!isAnyModalShown) {
                    document.querySelector(selector).style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    const scroll = calcScroll();
                    document.body.style.marginRight = `${scroll}px`;
                }
            } ,time);
        };  

        const showModalByScroll = () => {
            if (btnPressed) { 
                window.removeEventListener('scroll', showModalByScroll);
            }
            if (giftStatus &&
                (window.pageYOffset + document.documentElement.clientHeight >=
                document.documentElement.scrollHeight)) {
                    openModal();
                    modalWindow(selClose, selModal);
                    window.removeEventListener('scroll', showModalByScroll);
                }
        };

        window.addEventListener('scroll', showModalByScroll);

        modalWindow(selClose, selModal);
        triggerButtons(selBtn, selClose);
        showModalByTime('.popup-consultation', 60000);
    };

    bindModals('.popup-consultation', '.button-consultation', '.popup-close');
    bindModals('.popup-design', '.button-design', '.popup-close');
    bindModals('.popup-gift', '.fixed-gift', '.popup-close', true);
};

export default modals;
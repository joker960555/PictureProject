const sliders = (slides, dir, prev, next) => {
    const items = document.querySelectorAll(slides);
    let slideCounter = 1,
        pause = false;

    const showSlides = (num) => {
        items.forEach((item) => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        if (num > items.length) {
            slideCounter = 1;
        }
        if (num < 1) {
            slideCounter = items.length;
        }

        items[slideCounter - 1].style.display = 'block';
    };

    const plusSlides = (n) => {
        showSlides(slideCounter += n);
    };

    const changeSlides = () => {
        try {
            const prevBtn = document.querySelector(prev),
                  nextBtn = document.querySelector(next);
            prevBtn.addEventListener('click', () => {
                plusSlides(-1);
                items[slideCounter - 1].classList.remove('slideInRight');
                items[slideCounter - 1].classList.add('slideInLeft');
        });
            nextBtn.addEventListener('click', () => {
                plusSlides(1);
                items[slideCounter - 1].classList.remove('slideInLeft');
                items[slideCounter - 1].classList.add('slideInRight');
        }); 
        } catch (e) {}
    };
    const activateAutoAnimation = () => {
        pause = setInterval(() => {
            if (dir === 'horizontal'){
                items[slideCounter - 1].classList.remove('slideInLeft');
                items[slideCounter - 1].classList.add('slideInRight');
            } else {
                items[slideCounter - 1].classList.add('fadeIn');
            }
            showSlides(slideCounter += 1);
            }, 6000);
    };

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(pause);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAutoAnimation();
    });

    showSlides(slideCounter);
    changeSlides();
    activateAutoAnimation();
};

export default sliders;





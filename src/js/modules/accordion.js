const accordion = (buttonSel, textSel) => {
    const buttons = document.querySelectorAll(buttonSel),
          texts = document.querySelectorAll(textSel);

    texts.forEach((block) => {
            block.style.display = 'none';
            block.classList.add('animated' , 'fadeInDown');
    });

    const checkActivityClass = (i) => {
            if (!texts[i].classList.contains('active')) {
                texts[i].classList.add('active');
            } else { texts[i].classList.remove('active'); }
    };

    const toggleTexts = () => {
        texts.forEach((block) => {
            if (block.classList.contains('active')) {
                block.classList.add('fadeInDown');
                block.classList.remove('fadeOut');
                block.style.display = 'block';
            } else {
                block.classList.remove('fadeInDown');
                block.classList.add('fadeOut');
                setTimeout(() => block.style.display = 'none', 350);
            }
        });
    };

    buttons.forEach((item, i) => {
        item.addEventListener('click', (event) => {
            const e = event.target;
            if (e && e.parentNode.matches(buttonSel)) {
                checkActivityClass(i);
                toggleTexts();
            }
        });
    });

    toggleTexts();

};

export default accordion;
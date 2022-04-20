const filterElements = function () {

    const triggers = document.querySelector('.portfolio-menu'),
          images = document.querySelectorAll('.portfolio-block'),
          buttons = document.querySelectorAll('.portfolio-item'),
          addMoreBlock = document.querySelector('.portfolio-no');

    const removeActiveCards = () => {
        addMoreBlock.style.display = 'none';
        addMoreBlock.classList.remove('animated', 'fadeIn');
        images.forEach((item) => {
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeIn');
        });
        buttons.forEach((item) => {
            item.classList.remove('animated', 'active');
        });
    };

    const filters = function (event) {
        const e = event.target;
        removeActiveCards();

        if (e.matches('.portfolio-item')) {
            let className = e.className.split(' ')[1];
            e.classList.add('active');

            if (e.matches('.grandmother') || e.matches('.granddad')) {
                setTimeout(() => {
                    addMoreBlock.style.display = 'block';
                    addMoreBlock.classList.add('animated', 'fadeIn');
                }, 0);
            } else {
                setTimeout(() => {
                    images.forEach(item => {
                        if (item.classList.contains(className)) {
                                item.style.display = 'block';
                                item.classList.add('animated', 'fadeIn');
                        }
                    });
                }, 0);
            }
        }
    };

    triggers.addEventListener('click', filters);
};

export default filterElements;
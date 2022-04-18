import {sendResource} from '../services/requests';

const showMoreStyles = (wrapperSel, btnSel) => {

    const button = document.querySelector(btnSel),
          wrapper = document.querySelector(wrapperSel);

    button.addEventListener('click', () => {
        button.remove();
        sendResource('http://localhost:3000/styles')
        .then(res => showCards(res))
        .catch(err => console.log(err));
    });

    const showCards = (responce) => {
        responce.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('animated', 'fadeIn', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            div.innerHTML = `
                <div class="styles-block">
                    <img src=${item.src} alt=style_image>
                        <h4>${item.title}</h4>
                        <a href=${item.link}>Подробнее</a>
                    </div>
                </div>
            `;
            wrapper.append(div);
        });
    };
};

export default showMoreStyles;
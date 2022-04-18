import {postData} from '../services/requests';

function forms (state) {

    const message = {
        loading: 'Ожидайте, данные загружаются.',
        success: 'Отлично! Ожидайте обратного звонка!',
        failure: 'Упс! Что-то пошло не так...',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
        spinner: 'assets/img/spinner.gif'
    };
    const messageBlock = document.createElement('div'),
          messageImg = document.createElement('img'),
          messageText = document.createElement('div');
    const upload = document.querySelectorAll('[name="upload"]'),
          inputs = document.querySelectorAll('input');
    let api;

    function formMessage (form) {
        form.classList.add('animated', 'fadeInOut');
        setTimeout(() => {
            form.style.display = 'none';
        }, 20);
        messageBlock.classList.add('status');
        form.parentNode.append(messageBlock);
        messageImg.classList.add('animated', 'fadeInUp');
        messageImg.setAttribute('src', message.spinner);
        messageBlock.append(messageImg);
        messageText.textContent = message.loading;
        messageBlock.append(messageText);
    }

    function formInput () {
        const forms = document.querySelectorAll('form');

        forms.forEach((item) => {
            item.addEventListener('submit', (event) => {
                event.preventDefault();
                let formData = new FormData(item);
                
                clearInputs();
                formMessage(item);
                item.closest('.main-form') ? api = 'assets/message.php' : 
                                             api = 'assets/server.php';

                postData(formData, api)
                .then(data => {
                    messageImg.setAttribute('src', message.ok);
                    messageText.textContent = message.success;
                    console.log(data);
                })
                .catch(err => {
                    messageImg.setAttribute('src', message.fail);
                    messageText.textContent = message.failure;
                    console.error(err);
                })
                .finally(() => setTimeout(() => {
                    messageBlock.remove();
                    item.style.display = 'block';
                    item.classList.remove('fadeInOut');
                    item.classList.add('fadeInUp');
                }, 2000));
            });
        });
    }

    upload.forEach(item => {
        item.addEventListener('input', () => {
            console.log(item.files[0].name.split('.')[0].length);
            const name = item.files[0].name.split('.');
            let dots;
            name[0].length > 12 ? dots = '...' : dots = '.';
            item.previousElementSibling.textContent = name[0].substring(0, 11) + 
                dots + name[1];
        });
    });

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
    };

    formInput();
}

export default forms;
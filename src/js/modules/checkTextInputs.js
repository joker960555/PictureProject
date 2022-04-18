const checkTextInputs = () => {

    const cyrillicInput = (selector) => {
        const inputs = document.querySelectorAll(selector);

        inputs.forEach((item) => {
            item.addEventListener('input', (e) => {
                console.log(e.target, e.target.value);
                item.value = item.value.replace(/[a-z0-9]/gi, '');
            });
        });

    };

    cyrillicInput('[name="name"]');
    cyrillicInput('[name="message"]');
};

export default checkTextInputs;
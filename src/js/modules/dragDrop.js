const dragDrop = () => {
    const inputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(itemEvent => {
        inputs.forEach(input => {
            input.addEventListener(itemEvent, preventDefaults, false);
        });
    });

    function preventDefaults (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    function highLight (item) {
        item.closest('.file_upload').style.border = '5px solid blue';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)';
    }

    function unHighLight (item) {
        item.closest('.file_upload').style.border = 'none';
        item.closest('.file_upload').style.backgroundColor = 'initial';
    }

    ['dragenter', 'dragover'].forEach(itemEvent => {
        inputs.forEach(input => {
            input.addEventListener(itemEvent, () => highLight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(itemEvent => {
        inputs.forEach(input => {
            input.addEventListener(itemEvent, () => unHighLight(input), false);
        });
    });

    inputs.forEach(item => {
        item.addEventListener('drop', (event) => {
            item.files = event.dataTransfer.files;
            const name = item.files[0].name.split('.');
            let dots;
            name[0].length > 12 ? dots = '...' : dots = '.';
            item.previousElementSibling.textContent = name[0].substring(0, 11) + 
                dots + name[1];
        });
    });



};

export default dragDrop;
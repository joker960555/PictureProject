const mouseEnterPicture = () => {
    const imgBlocks = document.querySelectorAll('.sizes-block'),
          imgArray = [
              '../../assets/img/sizes-1-1.png',
              '../../assets/img/sizes-2-1.png',
              '../../assets/img/sizes-3-1.png',
              '../../assets/img/sizes-4-1.png'
            ];
    let src = '';

    imgBlocks.forEach((item, i) => {
        item.addEventListener('mouseover', (e) => {
            if (e.target && e.target.matches('img') ) {
                src = e.target.getAttribute('src');
                e.target.setAttribute('src', imgArray[i]);
                e.target.classList.add('animated', 'fadeIn');
                item.querySelectorAll('p').forEach(item => {
                    if (!item.matches('.sizes-hit')) {
                        item.style.display = 'none';
                    }
                });
            }
        });
        item.addEventListener('mouseout', (e) => {
                e.target.setAttribute('src', src);
                e.target.classList.remove('animated', 'fadeIn');
                item.querySelectorAll('p').forEach(item => {
                        item.style.display = 'block';
                });
        });
    });
};

export default mouseEnterPicture;
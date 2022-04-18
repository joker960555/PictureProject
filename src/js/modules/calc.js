const calc = (sizeSel, materialSel, optionsSel, promoSel, calcSel) => {

    const size = document.querySelector(sizeSel),
          material = document.querySelector(materialSel),
          options = document.querySelector(optionsSel),
          promo = document.querySelector(promoSel),
          calcForm = document.querySelector(calcSel);
    let sum = 0;

    const calculations = () => {
        sum = Math.round((+size.value) * (+material.value) + (+options.value));

        if (size.value === '' || material.value === '') {
            sum = 'Для расчета нужно выбрать размер картины и материал картины';
        } else if (promo.value === 'IWANTPOPART') {
            sum = Math.round(sum * 0.7);
        } 

        calcForm.textContent = sum;
    };

    size.addEventListener('change', calculations);
    material.addEventListener('change', calculations);
    options.addEventListener('change', calculations);
    promo.addEventListener('input', calculations);



};

export default calc;
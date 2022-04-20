import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filterElements from './modules/filterElements';
import mouseEnterPicture from './modules/mouseEnterPicture';
import accordion from './modules/accordion';
import burgerMenu from './modules/burgerMenu';

window.addEventListener('DOMContentLoaded', () => {
'use strict';

modals();
sliders('.main-slider-item', 'vertical');
sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
forms();
mask('[name="phone"]');
checkTextInputs();
showMoreStyles('#styles .row', '.button-styles');
calc('#size', '#material', '#options', '.promocode', '.calc-price');
filterElements();
mouseEnterPicture();
accordion('.accordion-heading', '.accordion-block');
burgerMenu('.burger', '.burger-menu');


});
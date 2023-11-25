//1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown",
//необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const dropdownItemElem = document.querySelectorAll('div.dropdown div.menu a.dropdown-item');
dropdownItemElem.forEach((element) => element.classList.add('super-dropdown'));
console.log(dropdownItemElem);
//2. У элемента с классом btn необходимо убрать класс "btn-secondary", 
//если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const btn = document.querySelector('div.dropdown button.btn');
function classManipulate(elem, cssClass) {
    if (elem.classList.contains(cssClass)) {
        elem.classList.remove(cssClass);
    } else {
        elem.classList.add(cssClass);
    }
}
classManipulate(btn, 'btn-secondary');
console.log(btn);
//3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const menuElem = btn.nextElementSibling;
menuElem.classList.remove('dropdown-menu');
console.log(menuElem);
//4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
//`<a href="#">link</a>`
const dropdownElem = btn.parentElement;
console.log(dropdownElem);
dropdownElem.insertAdjacentHTML('afterend', '<a href="#">link</a>');
// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
btn.id = 'superDropdown';
console.log(btn);
// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует 
//атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const btnData = document.querySelector('[aria-labelledby="dropdownMenuButton"]')
btnData.dataset.dd = '3';
console.log(btnData);
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const btnRmAttribute = document.querySelector('.dropdown-toggle');
btnRmAttribute.removeAttribute('type');
console.log(btnRmAttribute);

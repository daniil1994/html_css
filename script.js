let upButton = document.querySelector('.up-button')
// Проверяем условие скролла, если больше 200 применяем новый класс, если меньше 200 то удаляем класс
window.onscroll = function (){
    if (window.pageYOffset > 200) {
        upButton.classList.add('.show')
    } else {upButton.classList.remove('.show')};   
}

// обработчик клика
upButton.oneclick = function (){
    window.scrollTo(0,0);

};
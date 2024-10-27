const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    document.querySelector('.icon1').classList.toggle('btn--click'); //добавляет класс у icon1
    document.querySelector('.icon2').classList.toggle('btn--click'); //убирает класс у icon2
});

   

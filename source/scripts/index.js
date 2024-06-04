/* в этот файл добавляет скрипты*/
const btn = document.querySelector('.main-header__button');
const menu = document.querySelector('.nav');


btn.addEventListener('click', (evt)=> {
  evt.preventDefault();
  if(!btn.classList.contains('main-header__button--clouse')) {
    btn.classList.add('main-header__button--clouse');
    menu.classList.remove('nav--cloused');
  }else {
    btn.classList.remove('main-header__button--clouse');
    menu.classList.add('nav--cloused');
  }
});

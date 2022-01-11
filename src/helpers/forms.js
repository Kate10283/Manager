export const forms = () => {
    const buttons = document.getElementsByClassName('forms__button');
    const submenu = document.getElementsByClassName('forms__submenu');

    const show = (btn, i) => {
        btn.removeEventListener('click', hideBtn);
        btn.addEventListener('click', () => showBtn(btn, i));
    }

    const hide = (btn, i) => {
        btn.removeEventListener('click', showBtn);
        btn.addEventListener('click', () => hideBtn(btn, i));
    }

    const showBtn = (btn, i) => {
        
        console.log('show' + i);
        for (let y = 0; y < submenu.length; y++) {
            submenu[y].classList.add('_hide');
        }
        submenu[i].classList.remove('_hide');
        hide(btn, i);
    }

    const hideBtn = (btn, i) => {
        
        console.log('hide' + i);
        submenu[i].classList.add('_hide');
        show(btn, i);
    }

    for (let i = 0; i < buttons.length; i++) {
        show(buttons[i], i);
    }

}

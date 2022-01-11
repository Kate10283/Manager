export const table = () => {
    const money = document.querySelectorAll('.money p');
    const moneyInput = document.querySelectorAll('.money input');
    const date = document.querySelectorAll('.date p');
    const dateInput = document.querySelectorAll('.date input');
    const comment = document.querySelectorAll('.comment p');
    const commentInput = document.querySelectorAll('.comment input');

    const clickHandler = (x, input) => {
        for (let i = 0; i < x.length; i++) {
            x[i].onclick = () => {
                x[i].classList.toggle('_hide');
                input[i].classList.toggle('_hide');
                close(x[i], input[i]);
            }
        }
    }

    const close = (x, input) => {
        document.addEventListener('click', function eventListener (event) {
            console.log('check')
            if (!x.contains(event.target) && !input.contains(event.target)){
                x.classList.toggle('_hide');
                input.classList.toggle('_hide');
                document.removeEventListener('click', eventListener)
            }
        });
    }

    clickHandler(money, moneyInput);
    clickHandler(date, dateInput);
    clickHandler(comment, commentInput);



    // const groups = document.querySelectorAll('.table-group');
    // const subgroups = document.querySelectorAll('.table-subgroup');

    // for (let i = 0; i < groups.length; i++) {
    //     groups.onclick = () => {

    //     }
    // }
}
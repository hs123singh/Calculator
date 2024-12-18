let strings = " ";
let btn = document.querySelectorAll('.btn1');
Array.from(btn).forEach((btn1) => {
    btn1.addEventListener('click', (ele) => {
        if (ele.target.innerHTML == '=') {
            strings = eval(strings);
            document.querySelector('input').value = strings;
        }
         else if (ele.target.innerHTML == 'AC') {
            strings = " ";
            document.querySelector('input').value = strings;
        }
        else {
            console.log(ele.target)
            strings = strings + ele.target.innerHTML;
            document.querySelector('input').value = strings;
        }
    })

})

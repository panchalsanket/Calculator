// getting all the refernce of buttin
button = document.getElementsByTagName('button')
//getting reference of main-screen 
main_screen = document.getElementsByClassName('calculator-screen')
value = ""
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', action, false);
}
function action(e) {
    try {
        if (e.target.value == "=") {
            ans = eval(value)
            main_screen[0].value = ans
            value = ''
        }
        else if (e.target.value == 'all-clear') {
            value = ""
            main_screen[0].value = 0
        }
        else if(e.target.value === 'clear'){
            var newStr = value.slice(0, -1);
            value = newStr
            main_screen[0].value = value
        }
        else {
            value = value + e.target.value
            console.log(value)
            main_screen[0].value = value
        }
    } catch (err) {
        main_screen[0].value = 'Invalid'
    }
}



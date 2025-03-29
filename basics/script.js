let nameInput = document.querySelector(".nameInput");
let welcomeMessage = document.querySelector(".welcomeMessage");
let inputCelsius = document.querySelector("#inputCelsius");
let inputFahrenheit = document.querySelector("#inputFahrenheit");
let inputForm = document.querySelector("#form");

let nome = prompt("Qual seu nome?");
nameInput.innerHTML = nome + "!";

welcomeMessage.style.display = "block";

inputCelsius.addEventListener("input", () => { 
    if (inputCelsius.value === "" || inputCelsius.value == null) {
        inputFahrenheit.value = "";  
    } else {
        inputFahrenheit.value = converter(); 
    }
})

function converter() {
    let celsius = Number(inputCelsius.value);

    let fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}




let inputCalculadora = document.querySelector('.inputCalculadora');
let expression = "";

document.querySelectorAll('.grid button').forEach(button => {
    button.addEventListener('click', () => {
        let action = button.getAttribute('data-action');

        if (action === 'clear') {
            expression = "";
            inputCalculadora.value = "";
            return;
        }

        if ((action >= '0' && action <= '9') || action === ',') {
            expression += action;
            inputCalculadora.value = expression;
        }

        if (action === '+' || action === '-' || action === '*' || action === '/') {
            if (expression && !['+', '-', '*', '/'].includes(expression.trim().slice(-1))) {
                expression += " " + action + " ";
                inputCalculadora.value = expression;
            }
        }

        if (action === '=') {
            try {
                let result = eval(expression);  
                inputCalculadora.value = result;
                expression = result.toString();  
            } catch (e) {
                inputCalculadora.value = "Erro 2";
            }
        }
    })
})
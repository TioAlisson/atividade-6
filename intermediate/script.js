let formAge = document.getElementById('form-age');
let inputAge = document.getElementById('input-age');
let resultAge = document.getElementById('result-age');
 
formAge.addEventListener('submit', (e) => {
    e.preventDefault();
    reset();

    let age = inputAge.value; 

    if (isNaN(age) || age <= 0 || age >= 122) {
        resultAge.classList.add('age-invalidates');
        resultAge.value = "Informe uma idade válida!"
        resultAge.classList.remove('d-none');  
    } else {
        print(legalAge(age));
        resultAge.classList.remove('d-none');  
    }
});

function legalAge(ageValue) {
    if (ageValue > 0 && ageValue <= 18) {
        return false;
    } else {
        return true;
    }
}

function print(isTrueAge) {
    if(isTrueAge == true) {
        resultAge.value = "Você é de maior!";
        resultAge.classList.add('age-true'); 
    } else {
        resultAge.value = "Você é de menor";
        resultAge.classList.add('age-false');
    }
}

function reset() {
    resultAge.classList.remove('age-invalidates', 'age-false', 'age-true');
}

// DISCOUNTED

let inputPrice = document.getElementById('input-price');
let inputDiscounted = document.getElementById('input-discounted');
let inputResultDiscounted = document.getElementById('result-discounted');

// Posso pegar o envio do formulario tanto pelo btn ou pelo input, só muda o evento (usando 'click' para o botão ou 'submit' para o formulário).
let inputBtnCalculate = document.getElementById('btn-calculate');
let inputForm = document.getElementById('input-form');
let showResult = document.getElementById('discounted-price');
let showMessageValidate = document.getElementById('show-message-validate');

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let price = parseFloat(inputPrice.value);
    let discount = parseFloat(inputDiscounted.value);
    let priceFinal = calculateDiscount(price, discount); 

    if (price <= 0  || discount <= 0 || discount > 100) {
        showMessageValidate.classList.remove('d-none');
        showResult.classList.add('d-none');
    } else {
        printDiscount(priceFinal);
    }
});

function calculateDiscount(price, discount) {
    let discountedPrice = price - (price * (discount / 100));
    return discountedPrice;
}

function printDiscount(price) {
    showResult.classList.remove('d-none');
    showMessageValidate.classList.add('d-none');
    inputResultDiscounted.textContent = price + " R$";
}


// CONVERTER
let inputReal = document.getElementById('input-real');
let result = document.getElementById('result-coverter');

inputReal.addEventListener('input', (e) => {
    e.preventDefault();    
    real = inputReal.value;  

    if(inputReal.value === "" || inputReal.value == null || inputReal.value <= 0) {
        result.value = "";
    } else {
        result.value = converter(real);
    }
});

function converter(value) {
    let dollar = 5;
    let finalConversation = value / dollar;
    return finalConversation;
}
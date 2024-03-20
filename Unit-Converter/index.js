var inputOne= document.getElementById('ipt1')
var inputTwo= document.getElementById('ipt2')
var dropOne=document.getElementById('dropdown-value-one')
var dropTwo=document.getElementById('dropdown-value-two')
var convertButton = document.getElementById('c-btn')
var resetButton = document.getElementById('r-btn')



// (°F) = (°C) * 9/5) + 32. c -> f
// Kelvin = Celsius + 273.15 - c -> k
// °C = (°F - 32) × 5/9, f ->c
// 1°F − 32) × 5/9 + 273.15 f->k
// C = K - 273.15 k->c
// (1K − 273.15) × 9/5 + 32 k->f

convertButton.addEventListener('click',converter);
resetButton.addEventListener('click',reset);

function converter(){
    if(dropOne.value == dropTwo.value){
        alert("Both Units are Same")
    }
    else if(dropOne.value == "celsius" && dropTwo.value == 'fahrenheit'){
        let inputOneValue = inputOne.value;
        let c_To_f= Number(inputOneValue) * 9/5 + 32;
        inputTwo.value= c_To_f
    }
    else if(dropOne.value == "celsius" && dropTwo.value == 'kelvin'){
        let inputOneValue = inputOne.value;
        let c_To_k= Number(inputOneValue) + 273.15;
        inputTwo.value= c_To_k
    }
    else if(dropOne.value == 'fahrenheit' && dropTwo.value == 'celsius'){
        let inputOneValue = inputOne.value;
        let f_To_c= (Number(inputOneValue))- 32 * 5/9;
        inputTwo.value=f_To_c
    }
    else if(dropOne.value == 'fahrenheit' && dropTwo.value == 'kelvin'){
        let inputOneValue = inputOne.value;
        let f_To_k= (Number(inputOneValue) - 32 ) * 5/9 + 273.15;
        inputTwo.value= f_To_k 
    }
    else if(dropOne.value == 'kelvin' && dropTwo.value == 'celsius'){
        let inputOneValue = inputOne.value;
        let k_To_c= (Number(inputOneValue)) - 273.15;
        inputTwo.value=  k_To_c
    }
    else if(dropOne.value == 'kelvin' && dropTwo.value == 'fahrenheit'){
        let inputOneValue = inputOne.value;
        let k_To_f= (Number(inputOneValue)-273.15)*9/5 +32 ;
        inputTwo.value=  k_To_f;
    }
   
}

function reset(){
    inputOne.value=0
    inputTwo.value=0
    dropOne.value= 'celsius'
    dropTwo.value= 'celsius'

}

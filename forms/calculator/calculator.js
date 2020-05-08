let firstNumber = ""
let secondNumber = ""
let  userName = ""

btnAddition.onclick=function(){
firstNumber = parseInt(inptNumberOne.value)
secondNumber = parseInt(inptNumberTwo.value)
userName = inptUserName.value
  lblSolution.value =  `${userName}, the sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}.`
}

btnMultiplication.onclick=function(){
firstNumber = parseInt(inptNumberOne.value)
secondNumber = parseInt(inptNumberTwo.value)
userName = inptUserName.value
lblSolution.value =  `${userName}, the product of ${firstNumber} and ${secondNumber} is ${firstNumber * secondNumber}.`
}


btnClear.onclick=function(){
inptNumberOne.value = ""
inptNumberTwo.value =""
inptUserName.value = ""
lblSolution.value =  ""
}


btnChangeForm3.onclick=function(){
  ChangeForm(twoControls)
}

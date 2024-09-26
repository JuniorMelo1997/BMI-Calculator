const calculateBMI = ()=>{
    //Get the values from the inputs (weight in kg and height in meters (dividing by 100))
    const weight = Number(document.querySelector(".weight").value);
    const height = Number(document.querySelector(".height").value) / 100;

    //Calculate the BMI (IMC in portuguese)
    const bmi = weight / (height**2);

    //Define the final output message
    let result;

    if(bmi < 18.5){
        result = `Seu IMC é ${bmi} e seu nível é abaixo do peso`
    } else if (bmi >= 18.5 && bmi < 25){
        result = `Seu IMC é ${bmi} e seu nível é peso normal`
    } else if (bmi >= 25 && bmi < 30){
        result = `Seu IMC é ${bmi} e seu nível é sobrepeso`
    } else if (bmi >= 30 && bmi < 35){
        result = `Seu IMC é ${bmi} e seu nível é obesidade grau 1`
    } else if (bmi >= 35 && bmi < 40){
        result = `Seu IMC é ${bmi} e seu nível é obesidade grau 2`
    } else if (bmi >= 40){
        result = `Seu IMC é ${bmi} e seu nível é obesidade grau 3`
    } else{
        result = "Não foi possível calcular o IMC."
    }

    //Shows the final result in an alert
    alert(result);
}
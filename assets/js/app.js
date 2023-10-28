const userName = window.prompt('Please enter your name');
document.getElementById('username').innerHTML = userName;
const userAge = window.prompt('Please enter your age');
document.getElementById('age').innerHTML = userAge;

if(userAge >= 18){
  const userHeight = window.prompt('Please enter your height (in m, ie. 1.96)');
  document.getElementById('height').innerHTML = userHeight;
  const userWeight = window.prompt('Please enter your weight (in kg, ie. 89.3)');
  document.getElementById('weight').innerHTML = userWeight;
  const bmi = calculateBMI(userWeight, userHeight);
  if(bmi < 18.5){
    document.getElementById('advice-card').className = "box has-background-warning";
    document.getElementById('advice-text').innerHTML = `Your BMI is: ${bmi}<br/>You are under weight<br/>Start with a personal trainer`;
  }else if(bmi < 25){
    document.getElementById('advice-card').className = "box has-background-success";
    document.getElementById('advice-text').innerHTML = `Your BMI is: ${bmi}<br/>You are normal weight<br/>Start with any programme`;
  }else if(bmi < 30){
    document.getElementById('advice-card').className = "box has-background-warning";
    document.getElementById('advice-text').innerHTML = `Your BMI is: ${bmi}<br/>You are slightly over weight<br/>Start with cardio training`;
  }else{
    document.getElementById('advice-card').className = "box has-background-danger";
    document.getElementById('advice-text').innerHTML = `Your BMI is: ${bmi}<br/>You are obese<br/>Start with a personal trainer`;
  }
}else{
  document.getElementById("advice-card").className = "box has-background-grey-light";
  document.getElementById('advice-text').innerHTML = `Sorry ${userName}, you are not old enough to get a proper advice from us`;
}

/**
 * calculate the user's BMI
 * @param {*} weight userWeight
 * @param {*} height userHeight
 * @returns bmi
 */
function calculateBMI(weight, height){
  return weight / (height * height);
}
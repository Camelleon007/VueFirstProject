const buttonAddGoal = document.querySelector('button');
const inputGoal = document.querySelector('input');
const goalsList = document.querySelector('ul');

function addGoal() {
    const enteredValue = inputGoal.value;
    const listItemGoalElement = document.createElement('li');
    listItemGoalElement.textContent = enteredValue;
    goalsList.appendChild(listItemGoalElement);
    inputGoal.value = '';
     
}

buttonAddGoal.addEventListener('click', addGoal);
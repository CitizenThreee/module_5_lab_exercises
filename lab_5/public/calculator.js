let operator;
let nums = [0,];

function appendNum(num) {
    if(operator){
        nums[1] = nums[1] == undefined ? num : nums[1] + num.toString();
    }
    else{
        nums[0] = nums[0] == 0 ? num : nums[0] + num.toString();
    }
    updateInput(false);
}

function setOperator(op) {
    operator = op;
    updateInput(false);
}

async function calculateNum() {
    if(operator && nums[1]){
        switch(operator){
            case "+": 
                fetch(`/calculator/add?num1=${nums[0]}&num2=${nums[1]}`).then(response => response.json()).then(data => updateInput(true, data.result));
                break;
            case "-":
                fetch(`/calculator/subtract?num1=${nums[0]}&num2=${nums[1]}`).then(response => response.json()).then(data => updateInput(true, data.result));
                break;
            case "/":
                fetch(`/calculator/divide?num1=${nums[0]}&num2=${nums[1]}`).then(response => response.json()).then(data => updateInput(true, data.result));
                break;
            case "x":
                fetch(`/calculator/multiply?num1=${nums[0]}&num2=${nums[1]}`).then(response => response.json()).then(data => updateInput(true, data.result));
        }
    }
}

function updateInput(showingEquals, sum){
    let string = showingEquals ? `${nums[0]} ${operator ? operator : ""} ${nums[1]} = ${sum}` : `${nums[0]} ${operator ? operator : ""} ${nums[1] == undefined ? "" : nums[1]}`;
    document.getElementById("input-box").firstElementChild.innerHTML = string;
}

function clearAll() {
    operator = null;
    nums = [0,];

    updateInput();
}
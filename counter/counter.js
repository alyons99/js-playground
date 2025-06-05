const decreaseBtn = document.getElementById("decreaseBtn");
const clearBtn = document.getElementById("clearBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    if(count > 0) {
        count--;
    }
    countLabel.textContent = count;
}

clearBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
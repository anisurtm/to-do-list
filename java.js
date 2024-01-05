const inputBox = document.getElementById('input-box');
const ListContiner = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert('Add some tex!');
    }
else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    ListContiner.appendChild(li);
    let span =document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

}
inputBox.value="";
}

ListContiner.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem('data',ListContiner.innerHTML);
}
function shoTask(){
    ListContiner.innerHTML= localStorage.getItem('data')
}
shoTask();
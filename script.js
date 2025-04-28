
const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")


function addTask(){
    if(inputBox.value===''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputBox.value="";
    saveData();

}

listContainer.addEventListener('click',function (e) {

    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    
},false)


// Using the local storage to store the data

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}


// Getting data from Local Storage
function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}

// Calling this function
showData()
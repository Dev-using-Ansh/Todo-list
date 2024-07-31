let inputbox = document.getElementById("text");
let list = document.getElementById("list-container");
let addtask=()=>{
if (inputbox.value === "") {
    alert("Write task in it");
}
else {
    let li = document.createElement("li");
    li.className="item";
    let taskDiv = document.createElement("div");
    taskDiv.className = "task-text";
    taskDiv.textContent = inputbox.value;

    let btn = document.createElement("button");
    btn.classList.add("deleteBtn");
    btn.innerHTML="Delete";


    li.appendChild(taskDiv);
    li.appendChild(btn);
    list.appendChild(li);
}
inputbox.value="";
saveinput();
};
list.addEventListener("click", (e)=>{
    if(e.target.className === "task-text"){
        e.target.parentElement.classList.toggle("checked");
        saveinput();

    }
    else if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        saveinput();
    }
    
});
saveinput=()=>{
   localStorage.setItem("data",list.innerHTML);
}
display= ()=>{
   list.innerHTML=localStorage.getItem("data");
}
display();

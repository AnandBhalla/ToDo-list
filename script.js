let addButton = document.querySelector(".addbtn");
let list = document.querySelector(".list");

addButton.addEventListener("click", (e) => {
        let textInput = document.querySelector(".input");
        let task = textInput.value;
        if (!task) { 
          alert("Please enter a task.");
          return;
        }
        let card = document.createElement("div");
        card.className = "list-task";
        let html = `<input type="radio" class="done">
                    <div class="task-title"><h1>${task}</h1></div>
                    <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="delete"><i class="fa-solid fa-trash-can"></i></button>`;
        card.innerHTML = html;
        list.append(card);
        textInput.value = "";

  card.querySelector(".delete").addEventListener("click",(e)=>{
        card.remove()
  });

  card.querySelector(".edit").addEventListener("click",(e)=>{
      textInput.value=card.querySelector(".task-title").innerText
      addButton.innerText="Edit Task"
      addButton.addEventListener("click",()=>{
            card.remove()
            card.querySelector(".task-title").innerText=textInput.value
            textInput.value=""
            addButton.innerText="+NEW TASK"
      })
});

  card.querySelector(".done").addEventListener("click",(e)=>{
        card.querySelector("h1").style.textDecoration = "line-through";
        card.querySelector("h1").style.color = "grey";
  });
});
  






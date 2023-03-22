window.addEventListener('load', () =>{
    const form = document.getElementById('form');
    const input = document.getElementById('field');
    const taskContainer = document.getElementById('task-container');

    form.addEventListener('submit' , (e)=> {
        e.preventDefault();
        const task = input.value;
        if(!task){
            alert("please fill out the task....");
            return;
        }
        const taskList = document.createElement("div");
        taskList.classList.add("task-item");

        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
      
        taskList.appendChild(taskElement);

        const inputElement = document.createElement("textarea");
        inputElement.classList.add("inputs");
        inputElement.type = "text"
        inputElement.cols = 2;
        inputElement.rows = 1;
        inputElement.value = task ;
        inputElement.setAttribute("readonly","readonly" )

        taskElement.appendChild(inputElement);

        const taskAction = document.createElement('div');
        taskAction.classList.add("buttons");

        const editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.innerHTML = "edit";

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.innerHTML = "delete";

        taskAction.appendChild(editButton);
        taskAction.appendChild(deleteButton);

         taskList.appendChild(taskAction);
         taskContainer.appendChild(taskList);

        input.value="";

        editButton.addEventListener('click',()=>{
            if(editButton.innerHTML.toLowerCase() === "edit"){
                inputElement.removeAttribute("readonly");
                inputElement.focus();
                editButton.innerHTML = "Save";

            }
            else{
                inputElement.setAttribute("readonly", "readonly");
                editButton.innerHTML = "Edit";
            }
        })
        deleteButton.addEventListener('click' ,()=>{
            taskContainer.removeChild(taskList);
        })

    })
})
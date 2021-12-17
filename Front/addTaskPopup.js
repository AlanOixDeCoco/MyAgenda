function generateAddTaskContent(subject_id, subject_name){
    var addTaskContent=`<div class='categoryHeader'>
                            <p class='addTaskName'>Ajouter à ${subject_name}</p>
                            <img class='closePopup clickable' src='icons/nav/close.png' onclick='closePopupClicked()'></img>
                        </div>
                        <div class='addTaskBlock'>
                            <input type='text' id='taskName' name='taskName' placeholder='Nom de la tâche'>
                            <input type='date' id='deadLine' name='deadLine'>
                            <input type='textarea' id='description' name='description' placeholder='Description'>
                            <div class="taskGroupChoice">
                            <p>Groupe</p>
                            <select name="group" id="group">
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                            </div>
                            <button id="${subject_id}" onclick='submitAddTask(this.id, taskName.value, deadLine.value, description.value, group.value)'>Ajouter</button>
                        </div>`;
   return addTaskContent;
}

function AddTaskPopup(c_subject_id){
    let popupDiv = $("#popup");
    let subject_id = c_subject_id;
    this.update = function(){
        popupDiv.html(generateAddTaskContent(subject_id, "subject_name"));
    }
}

function submitAddTask(subject_id, taskname, deadline, password, group){
    console.log(subject_id + "/" + taskname + "/" + deadline + "/" + password + "/" + group);
}
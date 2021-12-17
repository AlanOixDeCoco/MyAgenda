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

function submitAddTask(subject_id, taskname, deadline, description, group){
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
    console.log(subject_id + "/" + taskname + "/" + deadline + "/" + date + "/" + description + "/" + group);
    $.ajax({
        type: "POST",
        url: API_URL + "/tasks",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + localStorage['myAgendasToken']
        },
        data: JSON.stringify({
            "tasks": [
                {
                    "name": taskname,
                    "deadline": deadline,
                    "creation": date,
                    "agendaID": localStorage['currentAgendaID'],
                    "groupID": 1
                }
            ]
        }),
        success: function(result, status, xhr){
            console.log(result);
        },
        error: function(response){
            console.log("Javascript à probablement carqué : response");
        },
    });
}
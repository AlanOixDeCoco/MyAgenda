function generateAddTaskContent(subject_id, subject_name, groups){
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
                                <div class="optionsWrapper">
                                    <select name="group" id="group" scrolling="auto">`;
    
    groups.forEach(group => {
            addTaskContent += "\t\t<option class='groupOption' value='" + group.groupID + "'>" + group.name + "</option>";
    });

   addTaskContent   += `            </select>
                                </div>
                            </div>
                            <button id="${subject_id}" onclick='submitAddTask(this.id, taskName.value, deadLine.value, description.value, group.value)'>Ajouter</button>
                        </div>`;
   return addTaskContent;
}

function AddTaskPopup(c_subject_id){
    let popupDiv = $("#popup");
    let subject_id = c_subject_id;
    this.update = function(){
        var settings = {
            "url": API_URL + "/groups",
            "method": "GET",
            "timeout": 0,
        };
            
        $.ajax(settings).done(function (groups) {
            popupDiv.html(generateAddTaskContent(subject_id, "subject_name", JSON.parse(groups)));
        });
        
    }
}

function submitAddTask(subject_id, taskname, deadline, description, group){
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
    console.log(subject_id + "/" + taskname + "/" + deadline + "/" + date + "/" + description + "/" + group);
    var settings = {
        "url": API_URL + "/tasks",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Authorization": "Bearer " + localStorage['myAgendasToken'],
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "tasks": [
            {
              "name": taskname,
              "deadline": deadline,
              "creation": date,
              "agendaID": localStorage['currentAgendaID'],
              "groupID": 10,
              "subjectID": subject_id
            }
          ]
        }),
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      }).fail(function (response) {
        console.log("Javascript à probablement craqué : response");
      });
}
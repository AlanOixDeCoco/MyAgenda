function generateAddAgendaContent(){
    var addAgendaContent=`<div class='categoryHeader'>
                            <p class='addTaskName'>Nouvel agenda</p>
                            <img class='closePopup clickable' src='icons/nav/close.png' onclick='closePopupClicked()'></img>
                        </div>
                        <div class='addTaskBlock'>
                            <input type='text' id='agendaName' name='agendaName' placeholder='Nom de l&apos;agenda'>
                            <button onclick='submitAddAgenda(agendaName.value)'>Ajouter</button>
                        </div>`;
   return addAgendaContent;
}

function AddAgendaPopup(){
    let popupDiv = $("#popup");
    this.update = function(){
        popupDiv.html(generateAddAgendaContent());
    }
}

function submitAddAgenda(agenda_name){
    var settings = {
        "url": API_URL + "/agendas",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Authorization": "Bearer " + localStorage['myAgendasToken'],
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "agendas": [
            {
              "name": agenda_name
            }
          ]
        }),
      };
      $.ajax(settings).done(function (response) {
        console.log(response);
        var settings = {
            "url": API_URL + "/agendas/" + JSON.parse(response).insertId + "/groups",
            "method": "PUT",
            "timeout": 0,
            "headers": {
              "Authorization": "Bearer " + localStorage['myAgendasToken'],
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "groups": [
                {
                  "groupID": 5
                }
              ]
            }),
          };
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
      }).fail(function (response) {
        console.log("Javascript à probablement craqué : response");
      });
      
      location.reload();
}
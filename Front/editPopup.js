function generateEditAgendaContent(agenda_id){
    var editAgendaContent=`<div class='categoryHeader'>
                            <p class='addTaskName'>Éditer l'agenda</p>
                            <img class='closePopup clickable' src='icons/nav/close.png' onclick='closePopupClicked()'></img>
                        </div>
                        <div class='addTaskBlock'>
                            <input type='text' id='agendaName' name='agendaName' placeholder=${agenda_id}>
                            <button onclick='submitAddAgenda(agendaName.value)'>Modifier</button>
                        </div>`;
   return editAgendaContent;
}

function editAgendaPopup(agenda_id){
    let popupDiv = $("#popup");
    this.update = function(){
        popupDiv.html(generateEditAgendaContent(agenda_id));
    }
}
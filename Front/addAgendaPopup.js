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
    console.log(agenda_name);
}
function generateAddCategoryContent(agenda_id, subject_name){
    var addCategoryContent=`<div class='categoryHeader'>
                            <p class='addTaskName'>Ajouter à ${subject_name}</p>
                            <img class='closePopup clickable' src='icons/nav/close.png' onclick='closePopupClicked()'></img>
                        </div>
                        <div class='addTaskBlock'>
                            <input type='text' id='categoryName' name='categoryName' placeholder='Nom de la matière'>
                            <button id="${agenda_id}" onclick='submitAddCategory(this.id, categoryName.value)'>Ajouter</button>
                        </div>`;
   return addCategoryContent;
}

function AddCategoryPopup(c_agenda_id){
    let popupDiv = $("#popup");
    let agenda_id = c_agenda_id;
    this.update = function(){
        popupDiv.html(generateAddCategoryContent(agenda_id, "agendaName"));
    }
}

function submitAddCategory(agenda_id, categoryName){
    console.log(agenda_id + "/" + categoryName);
}
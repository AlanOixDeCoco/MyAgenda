function generateCategoryBlock(id, name, groups, done, total, next_deadline, remind){
    var categoryBlock = `<div id='${id}' class='categoryBlock clickable' onclick='categoryClicked(this.id)'>
                            <div class='categoryHeader'>
                                <div class='categoryTitle'>
                                    <img src='icons/drawings/idea.png'>
                                    <p class='categoryName'>${name}</p>\
                                </div>`;
    if(remind != null){
        categoryBlock += "\t\t<img class='notifImage' src='icons/nav/remind.png'>\n";
    }
    categoryBlock += `  </div>
                            <p class='categoryGroups'>${groups}</p>
                            <div class='categoryInfos'>
                                <div class='infoLine taskState'>
                                    <img src='icons/nav/check_round.png'>
                                    <p>${done}/${total}</p>
                                </div>
                                <div class='infoLine nextDeadline'>
                                    <img src='icons/nav/clock.png'>
                                    <p>${next_deadline}</p>
                                </div>
                            </div>
                        </div>`;
    return categoryBlock;
}

// classe garante de l'affichage du contenu de l'agenda
function MainPannel(){
    this.update = function(agenda_id){
        $("#agendaContent").html("");
        var categories = ["", ""];
        categories.forEach(category => {
            $("#agendaContent").append(generateCategoryBlock(category.id, category.name, "faire traitement groupe affichage", done, total, next_deadline));
        });
        $("#agendaContent").append(`<center><img id="${agenda_id}" class="addImage clickable" src="icons/nav/add_round.png" onclick="addCategory(this.id)"></center>`);
    }
}


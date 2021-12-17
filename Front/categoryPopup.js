function generateCategoryContent(id, name, groups, tasks){
    var categoryContent =  `<div class='categoryHeader'>
                                <div class='categoryTitle'>
                                    <img src='icons/drawings/idea.png'>
                                    <p class='categoryName'>${name}</p>
                                </div>
                                <img class='closePopup clickable' src='icons/nav/close.png' onclick='closePopupClicked()'></img>
                            </div>
                            <p class='categoryGroups'>${groups}</p>`;
    tasks.forEach(task => {
        categoryContent += generateTaskBlock(task);
    });
    categoryContent += `<center><img id="${id}" class="addImage clickable" src="icons/nav/add_round.png" onclick="addTask(this.id)"></center>`;
   return categoryContent;
}

function generateTaskBlock(task_name, views, deadline, description, link, edit_date){
    var taskblock =`<div class='categoryTask'>
                        <div class='infoLine titleLine'>
                            <p>${task_name}</p>
                        </div>
                        <div class='infoLine'>
                            <img src='icons/nav/visible.png'>
                            <p>${views} views</p>
                        </div>
                        <div class='infoLine'>
                            <img src='icons/nav/clock.png'>
                            <p>${deadline}</p>
                        </div>
                        <div class='infoLine descriptionLine'>
                            <p><i>${description}</i></p>
                            </div>
                        <div class='infoLine linkLine'>
                            <a href="${link}">En savoir plus</a>
                        </div>
                        <div class='infoLine lastEditDateLine'>
                            <img src='icons/nav/edit.png'>
                            <p>${edit_date}</p>
                        </div>
                    </div>`;
    return taskblock;
}

function CategoryPopup(c_id){
    let popupDiv = $("#popup");
    let id = c_id;
    this.update = function(){
        popupDiv.html(generateCategoryContent(id, id, 'B2, A2, JPP DU WEB', ["Tache", "Tache"]));
    }
}
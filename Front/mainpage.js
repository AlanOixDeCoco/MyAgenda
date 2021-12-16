// API
const API_URL = "http://51.15.83.20:3001";

function getMyGroups(){
    var retour;
    $.ajax({
        type: "GET",
        url: API_URL + "/users/me/groups",
        async: false,
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + localStorage['myAgendasToken']
        },
        success: function(result, status, xhr){
            retour = result;
            console.log(result);
        },
        error: function(response){
            console.log("Error: " + response);
        }, 
    });
    return retour;
}

function generateCategoryBlock(name, groups, done, total, next_deadline, remind){
    var categoryBlock = `<div class='categoryBlock'>
                            <div class='categoryHeader'>
                                <div class='categoryTitle'>
                                    <img src='icons/drawings/idea.png'>
                                    <p class='categoryName'> ${name} </p>\
                                </div>`;
    if(remind != null){
        categoryBlock += "\t\t<img class='notifImage' src='icons/nav/notif_check_round.png'>\n";
    }
    categoryBlock += `  </div>
                            <p class='categoryGroups'>${groups}</p>
                            <div class='categoryInfos clickable'>
                                <div class='infoLine taskState'>
                                    <img src='icons/nav/check_round.png'>
                                    <p> ${done} / ${total} </p>
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
    this.update = function(){
        
    }
}

$(document).ready(function(){
    $("#agendaContent").html(generateCategoryBlock("DAC"));
    $("#agendaContent").append(generateCategoryBlock("ASI", "B2"));
    $("#agendaContent").append(generateCategoryBlock("PPP", "B2, A2", 3, 4));
    $("#agendaContent").append(generateCategoryBlock("COM", "B", 0, 12, "01/01/2022"));
    $("#agendaContent").append(generateCategoryBlock("DROIT", "A"));
    $("#agendaContent").append(`<center><img id="addCategory" class="clickable" src="icons/nav/add_round.png"></center>`);
});
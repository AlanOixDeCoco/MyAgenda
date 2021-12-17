// Fonction génération block agenda depuis nom agenda et liste catégories
function generateAgendaBlock(agendaID, name, categories){
    var agendaBlock = "<div class='agendaBlock'>\n"
                    + "\t<div class='agendaTitle'>\n"
                    + "\t\t<div id='" + agendaID + "' class='clickable agendaName' onclick='selectAgenda(this.id)'>\n"
                    + "\t\t\t<h1>" + name + "</h1>\n"
                    + "\t\t</div>\n"
                    + "\t\t<div class='agendaSettings'>\n"
                    + "\t\t\t<img id='" + agendaID + "' class='clickable' src='icons/nav/edit.png' onclick='editAgenda(this.id)'>\n"
                    + "\t\t\t<img class='visibility' src='icons/nav/visible.png'>\n"
                    + "\t\t</div>\n"
                    + "\t</div>\n"
                    + "\t<div class='categoriesList'>\n";
    agendaBlock += "\t</div>\n"
                + "<hr class='separationLine'>\n";
    return agendaBlock;
}

// Classe panneau de contenu gauche
function LeftPannel(){
    this.update = function(){
        var settings = {
            "url": API_URL + "/users/me/agendas",
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Authorization": "Bearer " + localStorage['myAgendasToken']
            }
        };
          
        $.ajax(settings).done(function (agendas) {
            $("#agendasList").html("");
            console.log(JSON.parse(agendas));
            JSON.parse(agendas).forEach(agenda => {
                $("#agendasList").append(generateAgendaBlock(agenda.agendaID, agenda.name, null));
            });
            $("#agendasList").append(`<center><img class="addImage clickable" src="icons/nav/add_round.png" onclick="addAgenda()"></center>`);
        });
    }

    this.update_state = function(nav_state) {
        switch(nav_state){
            case AGENDAS_STATE:
                $("#leftPannel").attr("class", "showLeft");
                break;
            default:
                $("#leftPannel").attr("class", "hideLeft");
                break;
        }
    }
}

// Fonction de recherche, lancée au clic bouton ou lorsque qu'on clique sur [entrer]
function search(text, key){
    if(key === "Enter"){
        alert(text.value);
    }
}

function selectAgenda(agenda_id){
    console.log(agenda_id);
}
// Fonction génération block agenda depuis nom agenda et liste catégories
function generateAgendaBlock(name, categories){
    var agendaBlock = "<div class='agendaBlock'>\n"
                    + "\t<div class='agendaTitle'>\n"
                    + "\t\t<div class='clickable agendaName'>\n"
                    + "\t\t\t<h1>" + name + "</h1>\n"
                    + "\t\t</div>\n"
                    + "\t\t<div class='agendaSettings'>\n"
                    + "\t\t\t<img class='clickable' src='icons/nav/edit.png'>\n"
                    + "\t\t\t<img class='visibility' src='icons/nav/visible.png'>\n"
                    + "\t\t</div>\n"
                    + "\t</div>\n"
                    + "\t<div class='categoriesList'>\n";
    categories.forEach(function(category){
        agendaBlock += "\t\t<div class='sliderCategory'>\n"
                    + "\t\t\t<p class='sliderCategoryName'>" + category + "</p>\n"
                    + "\t\t</div>\n"
    });
    agendaBlock += "\t</div>\n"
                + "<hr class='separationLine'>\n";
    return agendaBlock;
}
                        

// Classe panneau de contenu gauche
function LeftPannel(){
    this.update = function(){
        var agendas = []; // recup agendas (users/me/agendas w/ token)
        $("#agendasList").html(generateAgendaBlock("test", ["test_", "test__", "test___"]));
        $("#agendasList").append(generateAgendaBlock("test", ["test_", "test__"]));
        $("#agendasList").append(`<center><img class="addImage clickable" src="icons/nav/add.png" onclick="addAgenda()"></center>`);
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
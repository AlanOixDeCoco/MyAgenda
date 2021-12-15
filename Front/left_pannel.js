// Classe panneau de contenu gauche
function LeftPannel(){
    let agendas = [[0, [0, 1]], [1, [0, 1, 2]], [2, [0]]]; // Il faudra ici récupérer les agendas et changer le code en conséquence

    this.update = function(){
        agendas.forEach(element => {
            element
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
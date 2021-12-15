// Noms états
const MAIN_STATE = 0
const AGENDAS_STATE = 1
const PROFILE_STATE = 2

// Icons nav
const ICON_AGENDAS_LIST = "icons/nav/agendas.png";
const ICON_BACK = "icons/nav/back.png";
const ICON_CLOSE = "icons/nav/close.png";

const ICON_DEBUG_ERROR = "icons/nav/error.png"

// Classe navigation (gestion des valeurs pour la navigation & maj des éléments associés)
function Nav(){
    let nav_state = MAIN_STATE;
    let nav_header = new NavHeader(ICON_AGENDAS_LIST);
    let left_pannel = new LeftPannel();
    nav_header.update(nav_state);
    left_pannel.update_state(nav_state);

    this.press_left_nav = function(){
        switch(nav_state){
            case MAIN_STATE: 
                nav_state = AGENDAS_STATE;
                break;
            case AGENDAS_STATE:
                nav_state = MAIN_STATE;
                break;
        }
        nav_header.update(nav_state);
        left_pannel.update_state(nav_state);
    }
}

// Classe header de navigation (gestion visuelle du header)
function NavHeader(nav_icon){
    this.nav_icon = nav_icon;
    this.nav_text = "";

    this.update = function(nav_state) {
        $("#agendaIcon").show();
        switch(nav_state){
            case MAIN_STATE:
                this.nav_icon = ICON_AGENDAS_LIST;
                this.nav_text = "// requête nom agenda";
                break;
            case AGENDAS_STATE:
                this.nav_icon = ICON_CLOSE;
                this.nav_text = "MyAgendas";
                $("#agendaIcon").hide();
                break;
            default:
                this.nav_icon = ICON_DEBUG_ERROR;
                this.nav_text = "ERROR";
                $("#agendaIcon").hide();
                break;
        }
        $("#navIcon").attr("src", this.nav_icon);
        $("#navText").text(this.nav_text);
    }
}

let nav_handler = new Nav();

// Evenements
$("#navIcon").click(nav_handler.press_left_nav);
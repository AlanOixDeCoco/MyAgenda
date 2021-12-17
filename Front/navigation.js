// Noms états
const MAIN_STATE = 0;
const AGENDAS_STATE = 1;
const PROFILE_STATE = 2;

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
    left_pannel.update();
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
function NavHeader(c_nav_icon){
    let nav_icon = c_nav_icon;
    let nav_text = "";
    let agendaName = "";
    requestAgendaName(setAgendaName);
    
    function setAgendaName(agenda_name){
        agendaName = agenda_name;
    }

    this.update = function(nav_state) {
        $("#agendaIcon").show();
        switch(nav_state){
            case MAIN_STATE:
                nav_icon = ICON_AGENDAS_LIST;
                nav_text = agendaName;
                break;
            case AGENDAS_STATE:
                nav_icon = ICON_CLOSE;
                nav_text = "MyAgendas";
                $("#agendaIcon").hide();
                break;
            default:
                nav_icon = ICON_DEBUG_ERROR;
                nav_text = "ERROR";
                $("#agendaIcon").hide();
                break;
        }
        $("#navIcon").attr("src", nav_icon);
        $("#navText").text(nav_text);
    }
}

function requestAgendaName(func){
    $.ajax({
        type: "GET",
        url: API_URL + "/agendas/" + localStorage['currentAgendaID'],
        dataType: "json",
        async: false,
        headers: {
            "Authorization": "Bearer " + localStorage['myAgendasToken']
        },
        success: function(result, status, xhr){
            func(result[0].name);
        },
        error: function(response){
            return "noAgenda";
        },
    });
}

localStorage['currentAgendaID'] = 4;
let nav_handler = new Nav();
let popupHandler = new PopupHandler();
let agendaHandler = new AgendaHandler();

// Evenements
$("#navIcon").click(nav_handler.press_left_nav);

function addAgenda(){
    popupHandler.setPopup(new AddAgendaPopup());
    popupHandler.showPopup();
}

function editAgenda(agenda_id){
    console.log(agenda_id);
}

function categoryClicked(subject_id){
    popupHandler.setPopup(new CategoryPopup(subject_id));
    popupHandler.showPopup();
}

function closePopupClicked(){
    popupHandler.hidePopup();
}

function addTask(subject_id){
    popupHandler.setPopup(new AddTaskPopup(subject_id));
}

function addCategory(agenda_id){
    popupHandler.setPopup(new AddCategoryPopup(agenda_id));
    popupHandler.showPopup();
}

$(document).ready(function(){
    console.log("User token : " + localStorage['myAgendasToken']);
    getMyGroups();
    agendaHandler.update(localStorage['currentAgendaID']);
});
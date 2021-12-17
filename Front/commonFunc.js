// API
const API_URL = "http://51.15.83.20:3000";

function getMyGroups(){
    var settings = {
        "url": API_URL + "/users/me/groups",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Data-Type": "jsonp",
            'Access-Control-Allow-Origin': '*',
            "Authorization": "Bearer " + localStorage['myAgendasToken'],
            "Content-Type": "application/json"
        },
        //"data": JSON.stringify({})
    };
    $.ajax(settings).done(function(response){
        console.log(response);
    });
}
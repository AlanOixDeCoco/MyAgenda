const API_URL = "https://www.google.com";

function submitLogin(email, password){
    var psw = forge.md.sha512.create();
    psw.update(password);
    var hashed = psw.digest().toHex()
    loginRequest(email, hashed);
}

function loginRequest(email, psw){
    $.ajax({
        type: "POST",
        url: API_URL + "/auth/login",
        data: {
            user: email,
            password: psw
        },
        dataType: "json"
    }).done(function(msg){
        alert(msg);
    }).fail(function(jqXHR, textStatus){
        alert( "Request failed: " + textStatus );
    });
};
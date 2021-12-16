const API_URL = "http://51.15.83.20:3001";

const registerBoxTemplate = ("<div id='registerBox'>\n"
                        + "\t<h1>Créer un compte</h1>\n"
                        + "\t<input type='username' id='username' name='username' placeholder='Nom d&apos;utilisateur'><br>\n"
                        + "\t<input type='email' id='email' name='email' placeholder='Email du compte'><br>\n"
                        + "\t<input type='password' id='password' name='password' placeholder='Mot de passe du compte'><br><br>\n"
                        + "\t<button onclick='submitRegister(username.value, email.value, password.value)'>Créer un compte</button>\n"
                        + "\t<p>Déjà inscrit ?</p>\n"
                        + "\t<button onclick='switchToLogin()'>Se connecter</button>\n"
                        + "</div>");

const loginBoxTemplate = ("<div id='loginBox'>\n"
                        + "\t<h1>Se connecter</h1>\n"
                        + "\t<input type='email' id='email' name='email' placeholder='Email du compte'><br>\n"
                        + "\t<input type='password' id='password' name='password' placeholder='Mot de passe du compte'><br><br>\n"
                        + "\t<button onclick='submitLogin(email.value, password.value)'>Se connecter</button>\n"
                        + "\t<p>Pas encore de compte ?</p>\n"
                        + "\t<button onclick='switchToRegister()'>Créer un compte</button>\n"
                        + "\t</form>\n"
                        + "</div>");

$("#content").html(registerBoxTemplate);

function submitLogin(email, password){
    var psw = forge.md.sha512.create();
    psw.update(password);
    var hashed = psw.digest().toHex();
    loginRequest(email, hashed);
}

function submitRegister(username, email, password){
    var psw = forge.md.sha512.create();
    psw.update(password);
    var hashed = psw.digest().toHex();
    registerRequest(username, email, hashed);
}

function switchToLogin(){
    $("#content").html(loginBoxTemplate);
}

function switchToRegister(){
    $("#content").html(registerBoxTemplate);
}

function registerRequest(username, email, password){
    console.log(username + " / " + email + " / " + password);
    var toSend = {};
    toSend.user = {};
    toSend.user.username = username;
    toSend.user.email = email;
    toSend.user.password= password;
    $.ajax({
        type: "POST",
        url: API_URL + "/auth/register",
        data: toSend,
        success: function(result, status, xhr){
            console.log("successfully created your account : " + result);
        },
        error: function(response, error, errorMessage){
            console.log("Error while requesting register : " + errorMessage);
        }, 
    });
};

function loginRequest(email, password){
    console.log(email + " / " + password);
    var toSend = {};
    toSend.user = {};
    toSend.user.email = email;
    toSend.user.password= password;
    $.ajax({
        type: "POST",
        url: API_URL + "/auth/login",
        data: toSend,
        success: function(result, status, xhr){
            console.log(result.accessToken);
            localStorage['myAgendasToken'] = result.accessToken;
            window.location.href = "mainpage.html";
        },
        error: function(response, error, errorMessage){
            console.log("Error while requesting login : " + errorMessage);
        },
    });
};

$(document).ready(function(){
    console.log("Current token : " + localStorage['myAgendasToken']);
    $.ajax({
        type: "GET",
        url: API_URL + "/users/me",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + localStorage['myAgendasToken']
        },
        success: function(result, status, xhr){
            console.log("User : " + result[0].username)
        },
        error: function(response){
            console.log("Error: " + response);
        }, 
    });
})
const API_URL = "http://51.15.83.20:3000";

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
    var psw = forge.md.sha512.create(); // La on est pas crackable normalement
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
    var settings = {
        "url": API_URL + "/auth/register",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "user": {
            "username": "user",
            "email": "user@gmail.com",
            "password": "password"
          }
        })
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
};

function loginRequest(email, password){
    var settings = {
        "url": API_URL + "/auth/login",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "user": {
            "email": email,
            "password": password
          }
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response.accessToken);
        localStorage['myAgendasToken'] = response.accessToken;
        window.location.href = "mainpage.html";
    });
}


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
            console.log("User : " + result[0].username);
            window.location.href = "mainpage.html";
        },
        error: function(response){
            console.log("Error: " + response);
        }, 
    });
})

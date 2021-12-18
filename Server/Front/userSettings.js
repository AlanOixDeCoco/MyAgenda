function confirmSettings(pseudo){
    var settings = {
        "url": API_URL + "/users/me",
        "method": "PUT",
        "timeout": 0,
        "headers": {
          "Authorization": "Bearer " + localStorage['myAgendasToken'],
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "user": {
            "username": pseudo.value,
            "link_img": "www.test.com"
          }
        }),
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        window.location.href = "mainPage.html";
      }).fail(function (Z, Z, response){
        console.log("erreur : " + response);
      });
}
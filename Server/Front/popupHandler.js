function PopupHandler(){
    let popupDiv = $("#popup");
    this.setPopup = function(popup, id){
        popup.update(id);
    };

    this.showPopup = function(){
        popupDiv.attr("class", "showPopup");
    };
    this.hidePopup = function(){
        popupDiv.attr("class", "hidePopup");
    };
}
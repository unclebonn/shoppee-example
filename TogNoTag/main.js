var headerItemInfo = document.querySelector('.header_items-list .header__items-info');
var mainContent = document.querySelector('.maincontent');
var touchOnTheScreen = document.querySelector('body');

function removePopUP(){
    headerItemInfo.onclick = function(){
        mainContent.style.display = "block";
    }
    
    var remvovePopupByIcon = document.querySelector('.maincontent .popup_infomation .title i');
    remvovePopupByIcon.onclick = function(){
        mainContent.style.display = "none";
    }
    touchOnTheScreen.onclick = function(e){
        if(e.target == mainContent){
            mainContent.style.display = "none";
        }
    }




}

removePopUP();


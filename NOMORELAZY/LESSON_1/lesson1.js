var changeColorBtn =  ()=>{
    var changeColor = document.querySelector('.changeColor .settingColor ');
    changeColor.onclick = function (e) {
        var takeValue = changeColor.getAttribute('value');
        var listOfColor = document.querySelector('.chooseColor');
        if (takeValue == 1) {
            listOfColor.style.display = 'block';
            changeColor.setAttribute('value', '2');
        }
        else if (takeValue == 2) {
            listOfColor.style.display = 'none';
            changeColor.setAttribute('value', '1');
        }
    } 
}
changeColorBtn();
var changevaRRColor = document.querySelectorAll('.vaRR');
console.log(changevaRRColor);

function changeBlue() {
    var changeColorBody = document.querySelector('.chooseColor .listOfColor .backgroundblue');
    changeColorBody.onclick = function (e) {
        if (e.target == changeColorBody) {
            var takeValueOfpTag = document.querySelectorAll('p')
            takeValueOfpTag.forEach(element => {
                // Cach 1: element.classList.add("blue");
                // Cach 2:
                Object.assign(element.style, {
                    color: "blue"
                })
            });
            var changeHeaderColor = document.querySelector('.header');
            changeHeaderColor.style.backgroundColor = 'rgb(198 213 233)';
            var changeHeadingColor = document.querySelector('.heading');
            changeHeadingColor.style.backgroundColor = '#00388036';
            var changenew_newsColor = document.querySelector('.new_news');
            changenew_newsColor.style.backgroundColor = '#00388036';
            var changevaRRColor  = document.querySelectorAll('.vaRR');
            changevaRRColor.forEach(element => {
                Object.assign(element.style,{
                    backgroundColor:'#00388036'
                })
            });


        }
    }
}

changeBlue();
function changegreen() {
    var changeColorBody = document.querySelector('.chooseColor .listOfColor .backgroundgreen');
    changeColorBody.onclick = function (e) {
        if (e.target == changeColorBody) {
            var takeValueOfpTag = document.querySelectorAll('p')
            takeValueOfpTag.forEach(element => {
                // Cach 1: element.classList.add("blue");
                // Cach 2:
                Object.assign(element.style, {
                    color: "green"
                })
            });
            var changeHeaderColor = document.querySelector('.header');
            changeHeaderColor.style.backgroundColor = 'rgb(193 219 215)';
            var changeHeadingColor = document.querySelector('.heading');
            changeHeadingColor.style.backgroundColor = 'rgb(193 219 215)';
            var changenew_newsColor = document.querySelector('.new_news');
            changenew_newsColor.style.backgroundColor = 'rgb(193 219 215)';
            var changevaRRColor  = document.querySelectorAll('.vaRR');
            changevaRRColor.forEach(element => {
                Object.assign(element.style,{
                    backgroundColor:'rgb(193 219 215)'
                })
            });
        }
    }
}
changegreen();
function backgroundpink() {
    var changeColorBody = document.querySelector('.chooseColor .listOfColor .backgroundpink');
    changeColorBody.onclick = function (e) {
        if (e.target == changeColorBody) {
            var takeValueOfpTag = document.querySelectorAll('p')
            takeValueOfpTag.forEach(element => {
                // Cach 1: element.classList.add("blue");
                // Cach 2:
                Object.assign(element.style, {
                    color: "#c37381"
                })
            });
            var changeHeaderColor = document.querySelector('.header');
            changeHeaderColor.style.backgroundColor = 'rgb(216 193 219';
            var changeHeadingColor = document.querySelector('.heading');
            changeHeadingColor.style.backgroundColor = 'rgb(216 193 219';
            var changenew_newsColor = document.querySelector('.new_news');
            changenew_newsColor.style.backgroundColor = 'rgb(216 193 219';
            var changevaRRColor  = document.querySelectorAll('.vaRR');
            changevaRRColor.forEach(element => {
                Object.assign(element.style,{
                    backgroundColor:'rgb(216 193 219'
                })
            });
        }
    }
}
backgroundpink();
function backgroundpurple() {
    var changeColorBody = document.querySelector('.chooseColor .listOfColor .backgroundpurple');
    changeColorBody.onclick = function (e) {
        if (e.target == changeColorBody) {
            var takeValueOfpTag = document.querySelectorAll('p')
            takeValueOfpTag.forEach(element => {
                // Cach 1: element.classList.add("blue");
                // Cach 2:
                Object.assign(element.style, {
                    color: "purple"
                })
            });
            var changeHeaderColor = document.querySelector('.header');
            changeHeaderColor.style.backgroundColor = 'rgb(211 191 232)';
            var changeHeadingColor = document.querySelector('.heading');
            changeHeadingColor.style.backgroundColor = 'rgb(211 191 232)';
            var changenew_newsColor = document.querySelector('.new_news');
            changenew_newsColor.style.backgroundColor = 'rgb(211 191 232)';
            var changevaRRColor  = document.querySelectorAll('.vaRR');
            changevaRRColor.forEach(element => {
                Object.assign(element.style,{
                    backgroundColor:'rgb(211 191 232)'
                })
            });
        }
    }
}
backgroundpurple();
function backgroundyellow() {
    var changeColorBody = document.querySelector('.chooseColor .listOfColor .backgroundyellow');
    changeColorBody.onclick = function (e) {
        if (e.target == changeColorBody) {
            var takeValueOfpTag = document.querySelectorAll('p')
            takeValueOfpTag.forEach(element => {
                // Cach 1: element.classList.add("blue");
                // Cach 2:
                Object.assign(element.style, {
                    color: "#b8b874"
                })
            });
            var changeHeaderColor = document.querySelector('.header');
            changeHeaderColor.style.backgroundColor = '#feffcc';
            var changeHeadingColor = document.querySelector('.heading');
            changeHeadingColor.style.backgroundColor = '#feffcc';
            var changenew_newsColor = document.querySelector('.new_news');
            changenew_newsColor.style.backgroundColor = '#feffcc';
            var changevaRRColor  = document.querySelectorAll('.vaRR');
            changevaRRColor.forEach(element => {
                Object.assign(element.style,{
                    backgroundColor:'#feffcc'
                })
            });
        }
    }
}
backgroundyellow();
function backgroundorange() {
    var changeColorBody = document.querySelector('.chooseColor .listOfColor .backgroundorange');
    changeColorBody.onclick = function (e) {
        if (e.target == changeColorBody) {
            var takeValueOfpTag = document.querySelectorAll('p')
            takeValueOfpTag.forEach(element => {
                // Cach 1: element.classList.add("blue");
                // Cach 2:
                Object.assign(element.style, {
                    color: "orange"
                })
            });
            var changeHeaderColor = document.querySelector('.header');
            changeHeaderColor.style.backgroundColor = 'rgb(255 239 204)';
            var changeHeadingColor = document.querySelector('.heading');
            changeHeadingColor.style.backgroundColor = 'rgb(255 239 204)';
            var changenew_newsColor = document.querySelector('.new_news');
            changenew_newsColor.style.backgroundColor = 'rgb(255 239 204)';
            var changevaRRColor  = document.querySelectorAll('.vaRR');
            changevaRRColor.forEach(element => {
                Object.assign(element.style,{
                    backgroundColor:'rgb(255 239 204)'
                })
            });
        }
    }
}
backgroundorange();
window.addEventListener('resize', update);
var x = window.document.getElementById("demo");
update();

function update(){
    x.innerHTML = "Browser inner window width: " + 
                window.innerWidth + ",heigth: " + window.innerHeight + ".";
}

var newWindowObj = null;

function openw(){
    newWindowObj = window.open("http://parentsite.com","newWindow",
        "menubar=true,location=true,resizable=false,scrollbars=false,width=400,height=300,top=0,left=0")
}

function move() {
    newWindowObj.moveBy(50,-50);
    //newWindowObj.focus();
}

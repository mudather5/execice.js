//Exo 1


function first() {
    document.getElementById("paragragh").style.backgroundColor = "blue";
}


//Exo 2

function myFunction() {
    var para = document.getElementsByTagName("a")[0].getAttribute("id");
    var idi = document.getElementsByTagName("a")[0].getAttribute("hrefang");
    var tar = document.getElementsByTagName("a")[0].getAttribute("target");
    var hre = document.getElementsByTagName("a")[0].getAttribute("href");
    document.getElementById("paragraph").innerHTML = para + " " + idi + " " + tar + " " + hre;
}


//Exo 3

function mOver(obj) {
    obj.innerHTML = "bienvenue";
    obj.style.backgroundColor = "white";

}


function mOut(obj) {
    obj.innerHTML = "survolez moi";
    obj.style.backgroundColor = "#d3d3d3";

}


//Exo 4


function clickHere() {
    document.getElementById("parag").innerHTML = Date();
}

//Exo 5

function time() {

    setInterval(function () {
        document.getElementById("time").innerHTML = new Date()
    });

}




//Exo 6


var index = 0;
document.getElementById("fine").onclick = function () {
    changeColor()
};

function changeColor() {
    var colors = ["red", "green", "blue"];
    document.getElementById("fine").style.backgroundColor = colors[index];
    index++;
    if (index === colors.length) {
        index = 0;
    }
}


//Exo 7


document.getElementById("table").onclick = function () {
    addLine()
};


var i = 3;

function addLine() {

    var table = document.getElementById("tableau");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = 'ligne' + i++;
    cell2.innerHTML = 'ligne' + i++;
    if (cell1.innerHTML === 'ligne' && cell2.innerHTML === "ligne") {
        i++;
    }


}


//Exo 8


var paragraphe = document.createElement("p");
var node = document.createTextNode("description de l'image qui n'existe pas");
paragraphe.appendChild(node);
var element = document.getElementById("paragraphe");
element.appendChild(paragraphe);



//Exo 9

document.getElementById("photo1").onclick = function () {
    images()
};

document.getElementById("photo3").onclick = function () {
    photo()

}



//var photos = [];
//photos.push("photo1");
//photos.push("photo2");
//photos.push("photo3");


function images(element) {

}


var photo1 = document.getElementById("photo1");
photo1.onclick = function (photo1) {
    photo1.target.style.display = "none";
};

var photo2 = document.getElementById("photo2");
photo2.onclick = function (photo2) {
    photo2.target.style.display = "none";
};

var photo3 = document.getElementById("photo3");
photo3.onclick = function (photo3) {
    photo3.target.style.display = "none";
};

function masseg() {
    if (photo1 === "none" && photo3 === "none" && photo2 == "none") {
        alert("Félicitations, vous avez cliqué sur les 3 images");
    }
}


//Exo 10


document.getElementById("btn").onclick = function () {
    exoTen()
};

var time = 2000;

function exoTen() {
    setInterval(function () {
        document.getElementById("exercis").innerHTML = "le contenu a changé";
    }, time);

}

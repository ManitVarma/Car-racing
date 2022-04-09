canvas = document.getElementById("MyCanvas")
ctx = canvas.getContext("2d")

//Rover Width & Hegiht//
hegiht_car1 = 120;
Width_car1 = 70;
hegiht_car2 = 120;
Width_car2 = 70;

//BG Image path//
background_img ="https://i.postimg.cc/bv5d35nK/racing.jpg"; 
//Rover Image Path//
var car1_img = "carSP.jpg";
var car2_img = "carSP2.jpg";
//Placement of the Rover//
car1_X = 10;
car1_Y = 10;

car2_y = 100;
car2_x = 10;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBG;
    background_imgTag.src=background_img;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src=car1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src=car2_img;
}

function uploadBG(){
    ctx.drawImage(background_imgTag, 0,0,canvas.width, canvas.height);
}
function uploadCar1(){
    ctx.drawImage(car1_imgTag, car1_X,car1_Y, Width_car1,hegiht_car1);
}
function uploadCar2(){
    ctx.drawImage(car2_imgTag, car2_x,car2_y, Width_car2,hegiht_car2);
}

window.addEventListener("keydown" , my_keydown)

function my_keydown(e){
    keypressed = e.keyCode
    if(keypressed == '38'){
        car1up()
        console.log("up")
    }
    if(keypressed == '40'){
        car1down()
        console.log("down")
    }
    if(keypressed == '37'){
        car1left()
        console.log("left")
    }
    if(keypressed == '39'){
        car1right();
        console.log("right")
    }

    if(keypressed == '87'){
        car2up()
        console.log("up")
    }
    if(keypressed == '83'){
        car2down()
        console.log("down")
    }
    if(keypressed == '65'){
        car2left()
        console.log("left")
    }
    if(keypressed == '68'){
        car2right();
        console.log("right")
    }

    if(car1_X >700){
        document.getElementById("status").innerHTML = "Car 1 won";
    }
    else if(car2_x >700){
        document.getElementById("status").innerHTML = "Car 2 won"
    }
}

function car1up(){
    if(car1_Y >=0){
        car1_Y=car1_Y - 10
        uploadBG()
        uploadCar1()
        uploadCar2()
    }
}
function car1down(){
    if(car1_Y <=500){
        car1_Y=car1_Y + 10
        uploadBG()
        uploadCar1()
        uploadCar2()
    }
}
function car1left(){
    if(car1_X >=0){
        car1_X=car1_X - 10
        uploadBG()
        uploadCar1()
        uploadCar2()
    }
}
function car1right(){
    if(car1_X <=700){
        car1_X=car1_X + 10
        uploadBG()
        uploadCar1()
        uploadCar2()
    }

    
}

function car2up(){
    if(car2_y >=0){
        car2_y=car2_y - 10
        uploadBG()
        uploadCar1()
        uploadCar2()
    }
}
function car2down(){
    if(car2_y <=500){
        car2_y=car2_y + 10
        uploadBG()
        uploadCar1()
        uploadCar2()
    }
}
function car2left(){
    if(car2_x >=0){
        car2_x=car2_x - 10
        uploadBG()
        uploadCar1()
        uploadCar2()
    }
}
function car2right(){
    if(car2_x <=700){
        car2_x=car2_x + 10
        uploadBG()
        uploadCar1()
        uploadCar2()
    }
}

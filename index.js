var len = document.querySelectorAll(".drum").length;

function buttonAnimation(currentkey){
    var class_name = "."+currentkey;
    document.querySelector(class_name).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(class_name).classList.remove("pressed");
    }, 100);
}

function makesound(key){
    key = key.toLowerCase();
    switch(key){
        case "w":
            var sound = new Audio("./sounds/crash.mp3");
            sound.play();
            break;
        case "a": 
            var sound = new Audio("./sounds/kick-bass.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("./sounds/snare.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("./sounds/tom-1.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("./sounds/tom-2.mp3");
            sound.play();
            break;
        case "k": 
            var sound = new Audio("./sounds/tom-3.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("./sounds/tom-4.mp3");
            sound.play();
            break;
       }
}

for(var i = 0;i < len; ++i){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       var letter = this.innerHTML;
       buttonAnimation(letter);
       makesound(letter);
    });
}

document.addEventListener("keydown", function(event){
    buttonAnimation(event.key);
    makesound(event.key);
});



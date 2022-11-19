
let home = document.getElementById("home-screen");
let guest = document.getElementById("guest-screen");

let first = 0;
let second = 0;




function oneforhome(){
   first = first+1;
   home.innerHTML = first
    
}
function twoforhome(){
    first = first+2;
   home.innerHTML = first
    
}
function threeforhome(){
    first = first+3;
   home.innerHTML = first
}

function oneforguest(){

    second = second+1;
   guest.innerHTML = second

}
function twoforguest(){
    second = second+2;
    guest.innerHTML = second
}
function threeforguest(){
    second = second+3;
    guest.innerHTML = second
    
}
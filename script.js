function displayDate(){
document.getElementById('today').innerHTML=Date();
document.getElementById('today').style.fontSize='35px';   
}

function left(){
    document.getElementById('myImg').style.display='none'}
    function right(){
        document.getElementById('myImg').style.display='inline'}


// hide items inside the button
        function mf(){
            document.getElementById('showimg').style.display="block";
            // document.getElementById('de3').src='img/cod.jpeg';
            document.getElementById('de1').innerHTML='I am Jared'
            document.getElementById('de2').innerHTML='A software developer'
        }
// styling the header for functions
const fn = document.getElementById('fn');{
    fn.style.backgroundColor="red";
    fn.style.fontSize="30px";
    fn.style.color = "white";
}

// finding the largest of a number
 function findMax(){
    let max = -Infinity;
    for(let i  = 0; i<arguments.length; i++){
        if (arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}
document.getElementById('maxNumber').innerHTML = findMax(20, 40, 6, 500, 900);


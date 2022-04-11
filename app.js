//set initial count
let count = 0;

//Select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    //console.log(btn);
    btn.addEventListener("click", function(e){
        const className = e.currentTarget.classList;
        //console.log(className);
        //check whether or not an item is contained within your array object
        //contains() method returns a Boolean value
        if(className.contains("decrease")){
            count--;
        }
        else if(className.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }

        //set color for the counter number
        if(count > 0){
            value.style.color = "green";
        }
        else if(count < 0){
            value.style.color = "red";
        }
        else{
            value.style.color = "#000";
        }
        value.textContent = count;
    });
});

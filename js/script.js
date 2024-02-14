// 1. create an array of 3 images
let images = ['../media/images/bubble.jpeg','../media/images/kitty1.jpg','../media/images/kitty2.jpg'];




// 2. create an event listener for the button

document.getElementById("clickButton").addEventListener("click", displayImage);



// 3. create a function that will display a random image

function displayImage(){

    let image = document.getElementById('bubble');
    let random = Math.floor(Math.random() * images.length);
    image.src = images[random];
}

// function functionName() {
    //HINT: You will be using the randomly generated number to plug into the array index


//}


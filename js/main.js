//added DOMContentLoaded
document.addEventListener('DOMContentLoaded', init);

//added init function
function init() {
    document.body.addEventListener('click', handleClick);
};

//function to handle click event 
function handleClick() {
    const randomNum = Math.round(Math.random());
    let promise;

    if (randomNum === 0) {
        promise = randomColor();
    } else {
        promise = randomMessage();
    }

    promise.then(function (result) {
        //if the result is a color that starts with a hex "#" set the background color
        if (result.startsWith("#")) {
            document.body.style.backgroundColor = result;
        } else {
            //else add a message in main
            let main = document.querySelector('main');
            let p = document.createElement('p')
            p.textContent = result;
            main.appendChild(p);
        }
    });

}

function randomColor() {
    return new Promise(function (resolve) {
        let timeout = Math.random() * 1000 + 1000; //sets a 1 to 2 sec delay
        setTimeout(function () {
            let hex = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"); //generates a random 6-digit hex color code
            resolve(hex);
        }, timeout);
    });
}

function randomMessage() {
    return new Promise(function (resolve) {
        let timeout = Math.random() * 1000 + 1000; 
        setTimeout(function () {
            let message = ["Hello this is Quinton Boston, goodbye about to finish my async exercise :)", 
                "Promises are not to tricky", 
                "MAD MADD MADDD"]; //array messages that would be picked at random
            let randomIndex = Math.floor(Math.random() * message.length);
            let randomMsg = message[randomIndex];
            resolve(randomMsg);
        }, timeout);
    });
}




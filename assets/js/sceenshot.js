// const screenshotTarget = document.body;
//
// html2canvas(screenshotTarget).then((canvas) => {
//     const base64image = canvas.toDataURL("image/png");
//     window.location.href = base64image;
// });

document.addEventListener('keypress', function(e) {

    if (115 === e.charCode){
        var peoson = window.prompt("tell me your name");
        screenShot(peoson);
    }
});

function screenShot(peoson){


    html2canvas(document.querySelector("#capture")).then(canvas => {

        const parent = document.body;
        while (parent.firstChild) {
            parent.firstChild.remove()
        }

        console.log(peoson);
        // myWindow=window.open('','');
        document.body.id = "capture";
        document.write(`<p id="name">${peoson}</p>`);
        document.body.style.position = "reletive";
        document.getElementById("name").style.position="absolute";
        document.getElementById("name").style.top="10px";
        document.getElementById("name").style.left="150px";
        document.getElementById("name").style.zIndex="10";
        document.getElementById("name").style.fontSize="22px";
        document.getElementById("name").style.fontWeight="bolder";
        document.getElementById("name").style.fontFamily="monospace";

        canvas.style.position ="absolute";
        canvas.style.left =0;
        canvas.style.top =0;
        canvas.style.right =0;
        document.body.appendChild(canvas);

        // myWindow.focus()

    });



}
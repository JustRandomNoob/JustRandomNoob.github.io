
function MyFunction() {

    // document.getElementById("line2").innerHTML = "Player was not found in skyblock island";

    fetch("https://api.hypixel.net/status?uuid=71e75e00-580d-4f2e-b026-5f6785dceca2&key=e1084c05-ee59-4bc1-926b-abb936702cc5")
        .then(result => result.json())
        .then((status) => {  

            //The code
            const GameType = status.session.mode;

            if (GameType == 'dynamic') {

                console.log("lol");
            } else {
                Push.create('Player was kicked!')
                document.getElementById("line").innerHTML = "Player was kicked!";
                document.getElementById("line2").innerHTML = `Gamemode: ${GameType}`;
            }
        })
}

window.onload = MyFunction;

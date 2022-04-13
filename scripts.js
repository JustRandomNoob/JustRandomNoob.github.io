
function MyFunction() {

    // document.getElementById("line2").innerHTML = "Player was not found in skyblock island";
    document.getElementById("line").innerHTML = "Tracking Started Updating in 30 seconds!";

    fetch("https://api.hypixel.net/status?uuid=71e75e00-580d-4f2e-b026-5f6785dceca2&key=e1084c05-ee59-4bc1-926b-abb936702cc5")
        .then(result => result.json())
        .then((status) => {
            // now the code    
            setInterval(async function () {

                //The code

                fetch("https://api.hypixel.net/status?uuid=71e75e00-580d-4f2e-b026-5f6785dceca2&key=e1084c05-ee59-4bc1-926b-abb936702cc5")
                    .then(result => result.json())
                    .then((status) => {

                        const GameType = status.session.mode;
                        if (!status.session.online == 'true') {
                            Push.create('Player is offline!');

                        } else if (GameType == 'dynamic') {

                            document.getElementById("line").innerHTML = "Player is Online";
                            document.getElementById("line2").innerHTML = `Gamemode: ${GameType}`;
                        } else Push.create('Player was kicked!')


                    })
            }, 60000); // use 60000 for 1 minute 

        })

}


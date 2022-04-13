
function MyFunction() {

    // document.getElementById("line2").innerHTML = "Player was not found in skyblock island";
    document.getElementById("line").innerHTML = "Updating in 5 minutes";

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
                           console.log("Player is offline");
                           
                        } else if (GameType == 'dynamic') {

                            console.log(`Player is online`);
                            document.getElementById("line").innerHTML = "Player is Online";
                            document.getElementById("line2").innerHTML = `Gamemode: ${GameType}`;
                        } else console.log("Player was kicked");
                    })
            }, 15000); // use 60000 for 1 minute 

        })

}


function PushNotif() {


    Push.create('Hello World!')
}
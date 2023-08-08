document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("purchase-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const product = document.getElementById("product").value;
        const quantity = parseInt(document.getElementById("quantity").value);
        
        const product2 = document.getElementById("product2").value;
        const quantity2 = parseInt(document.getElementById("quantity2").value);
        
        const product3 = document.getElementById("product3").value;
        const quantity3 = parseInt(document.getElementById("quantity3").value);
        
        const discordUsername = document.getElementById("discordUsername").value;
        const robloxUsername = document.getElementById("robloxUsername").value;

        const purchaseData = `Product: ${product}\nQuantity: ${quantity}\nProduct 2: ${product2}\nQuantity 2: ${quantity2}\nProduct 3: ${product3}\nQuantity 3: ${quantity3}\nDiscord Username: ${discordUsername}\nRoblox Username: ${robloxUsername}`;

        sendPurchaseToDiscord(purchaseData);
    });

    function sendPurchaseToDiscord(purchaseData) {
        const webhookURL = "https://discord.com/api/webhooks/1138375271607709818/o-qNaVXPBJcR3IIOnsEVlNujSurG8uWk3bNcTYN9ATOCNbCBBUhjsb3_yQYMFOL9rTyO"; //

        fetch(webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: `New purchase:\n${purchaseData}`,
            }),
        })
        .then(response => {
            if (response.ok) {
                console.log("Purchase information sent to Discord.");
            } else {
                console.error("Failed to send purchase information to Discord.");
            }
        })
        .catch(error => {
            console.error("An error occurred:", error);
        });
    }
});

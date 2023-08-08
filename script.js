document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("purchase-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const product = document.getElementById("product").value;
        const quantity = document.getElementById("quantity").value;
        const total = document.getElementById("total").value;

        const purchaseData = `Product: ${product}\nQuantity: ${quantity}\nTotal: ${total}`;

        sendPurchaseToDiscord(purchaseData);
    });

    function sendPurchaseToDiscord(purchaseData) {
        const webhookURL = "YOUR_DISCORD_WEBHOOK_URL"; // Replace with your actual webhook URL

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

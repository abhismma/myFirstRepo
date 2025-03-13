function placeOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let orderId = Math.floor(10 + Math.random() * 90); 
            console.log(`⁠ Order ID: ${orderId}` ⁠);
            resolve(orderId);
        }, 1000);
    });
}

function processOrder(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let processingCode = ((orderId + 22) % 90) + 10;

            console.log(`⁠ Processing Code: ${processingCode} `⁠);
            resolve(processingCode);
        }, 1000);
    });
}


function confirmOrder(processingCode) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let confirmationNumber = ((processingCode + 22) % 90)+10; 
            console.log(`⁠ Confirmation Number: ${confirmationNumber} `⁠);
            resolve(confirmationNumber);
        }, 1000);
    });
}


function calculateFinalResult(confirmationNumber) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let extraNumber = Math.floor(10 + Math.random() * 90); 
            console.log(`⁠ Extra Number: ${extraNumber} `⁠);
            let finalResult = confirmationNumber + extraNumber;
            resolve(finalResult);
        }, 1000);
    });
}


placeOrder()
    .then((orderId) => processOrder(orderId))
    .then((processingCode) => confirmOrder(processingCode))
    .then((confirmationNumber) => calculateFinalResult(confirmationNumber))
    .then((finalResult) => console.log(`⁠ Final Result: ${finalResult}` ⁠))
    .catch((error) => console.log(`⁠ Error: ${error} `⁠));
function fetchDataWithCallback(callback) {
    console.log("Fetching data...");

    setTimeout(function() {
        try {
            let error = true;

            if (error) {
                throw new Error("Fetch failed");
            }

            callback("Data fetched");
        } catch (err) {
            console.log("Error: " + err.message);
        }
    }, 2000);git
}

fetchDataWithCallback(function(message) {
    console.log(message);
});

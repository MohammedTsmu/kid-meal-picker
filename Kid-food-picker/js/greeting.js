// ========================== S T A R T  -  G R E E T I N G =========================
function saveName() {
    var name = document.getElementById("nameInput").value;
    if (localStorage.getItem("name") != name) {
        // Reload the current page
        location.reload();

        localStorage.setItem("name", name);

        // Reload the current page
        location.reload();
    }
}



// 12 hours format
function loadName() {
    var name = localStorage.getItem("name");
    if (name != null) {
        setInterval(function () {
            // Get the current time in hours and minutes
            var now = new Date();
            var hour = now.getHours();
            var minute = now.getMinutes();

            // Determine the appropriate greeting based on the time of day
            var ampm;
            var status;

            // Determine the appropriate greeting based on the time of day
            var greeting;
            if (hour >= 0 && hour < 12) {
                greeting = "صباح الخير";
            }
            else if (hour >= 12 && hour < 18) {
                greeting = "مساء الخير";
            } else {
                greeting = "ليلة سعيدة";
            }

            // Determine the appropriate day status based on the time of day
            if (hour >= 0 && hour < 6) {
                status = ' <i class="fa-regular fa-moon"></i>';
                // status = ' <i class="fa-solid fa-cloud-moon"></i>';
            }
            else if (hour >= 6 && hour < 12) {
                status = ' <i class="fa-regular fa-sun"></i>';
                // status = '<i class="fa-solid fa-cloud-sun"></i>';
            }
            else if (hour >= 12 && hour < 18) {
                status = ' <i class="fa-regular fa-sun"></i>';
                // status = '<i class="fa-solid fa-cloud-sun"></i>';
            } else {
                status = ' <i class="fa-regular fa-moon"></i>';
                // status = ' <i class="fa-solid fa-cloud-moon"></i>';
            }

            if (hour >= 12) {
                ampm = 'م';
                hour -= 12;
            } else {
                ampm = 'ص';
            }
            hour = hour ? hour : 12; // handle midnight (0 hours)


            // Display the greeting with the current time in minutes
            document.getElementById("greeting").innerHTML = "<div class='greeting'><h4>" + hour + ":" + (minute < 10 ? "0" : "") + minute + " " + ampm + status + " " + greeting + ", " + name + "!</h4></div>";
        }, 1000); // Update every 1000 milliseconds (1 second)

        // document.getElementById("greeting").innerHTML = greeting + ", " + name + "!";
        document.getElementById("nameInputContainer").style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    // Define details for each image, making them available globally
    const details = {
        batteryOnTiming: {
            title: "Battery ON Timing",
            description: "This diagram illustrates the initial power-on sequence of the Minecraft Cube, where the system boots up, and the LEDs initialize.",
            image: "images/Battery_ON.png"
        },
        lowBrightness: {
            title: "Low Brightness Mode",
            description: "This diagram shows the dim LED brightness mode when the microprocessor operates at low power.",
            image: "images/Accelerometer_waveformLow.png"
        },
        mediumBrightness: {
            title: "Medium Brightness Mode",
            description: "This diagram demonstrates the intermediate LED brightness when the microprocessor operates at medium power.",
            image: "images/Accelerometer_WaveformMedium.png"
        },
        highBrightness: {
            title: "High Brightness Mode",
            description: "This diagram shows the highest LED brightness mode when the microprocessor operates at full power.",
            image: "images/Acceleromet_waveformHigh.png"
        },
        ballTiltSwitch: {
            title: "Ball Tilt Switch",
            description: "A close-up view of the ball tilt switch used to control cube activation based on orientation.",
            image: "images/Ball_tilt_switch_Annotated.jpg"
        },
        circuitBoard: {
            title: "Circuit Board",
            description: "The central PCB with annotated components, showing connections for LEDs and power.",
            image: "images/CircuitBoard_Annotated.jpg"
        },
        ledLightsOn: {
            title: "LED Lights ON",
            description: "An operational image of the cube with all LEDs lit up, highlighting its brightness.",
            image: "images/Lights_ON.jpg"
        },
        onOffSwitch: {
            title: "On-Off Switch",
            description: "The external switch on the bottom panel for powering the cube ON or OFF.",
            image: "images/On_Off_Button_Annotated.jpg"
        },
        oscilloscopeConnected: {
            title: "Oscilloscope Connected",
            description: "This shows the oscilloscope used to capture the cube's timing diagrams.",
            image: "images/OscilliscopeConnected.jpg"
        },
        fourLedsHighlighted: {
            title: "Four LEDs Highlighted",
            description: "This image highlights the four LEDs in each corner, showing their uniform placement and illumination.",
            image: "images/Four_LEDS_ON.jpg"
        },
        bottomCube: {
            title: "Bottom Cube View",
            description: "This is the bottom view of the cube, showing its general layout and labels.",
            image: "images/BottomCube.jpg"
        },
        bottomBatteries: {
            title: "Bottom Batteries View",
            description: "Shows the battery compartment with batteries installed.",
            image: "images/BottomBatteries.jpg"
        },
        bottomScrews: {
            title: "Bottom Screws Exposed View",
            description: "The screws exposed after opening the bottom panel.",
            image: "images/BottomScrewsExposed.jpg"
        },
        internalsBack: {
            title: "Internals Back View",
            description: "Back view showing internal components.",
            image: "images/InternalsBackView.jpg"
        },
    };

    // Show details function when a button is clicked
    function showDetails(imageId) {
        const detail = details[imageId];

        if (detail) {
            // Populate the popup with the relevant details
            document.getElementById("details-title").textContent = detail.title;
            document.getElementById("details-description").textContent = detail.description;
            document.getElementById("details-image").src = detail.image;

            // Show the popup
            const popup = document.getElementById("details-popup");
            if (popup) {
                popup.classList.remove("hidden");
                popup.classList.add("visible");
                popup.style.display = 'flex';  // Ensure proper display style is applied
            }
        }
    }

    // Attach event listeners to each button with a specific ID
    const buttons = document.querySelectorAll('.button[data-image-id]');
    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default action
            const imageId = button.getAttribute('data-image-id');
            showDetails(imageId);
        });
    });

    // Close details function to hide the popup
    function closeDetails() {
        const popup = document.getElementById("details-popup");
        if (popup) {
            popup.classList.remove("visible");
            popup.classList.add("hidden");
            popup.style.display = 'none';
        }
    }

    // Attach event listener to the close button
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', closeDetails);
    }

    // Attach event listener for clicking outside the popup content to close it
    document.addEventListener('click', function (event) {
        const popup = document.getElementById("details-popup");
        const popupContent = document.querySelector('.details-content');

        if (popup && popup.classList.contains('visible') && !popupContent.contains(event.target) && !event.target.closest('.button')) {
            closeDetails();
        }
    });

    // Prevent closing when clicking inside the popup content itself
    const popupContent = document.querySelector('.details-content');
    if (popupContent) {
        popupContent.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent click propagation to document
        });
    }
});

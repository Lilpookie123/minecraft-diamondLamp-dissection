function showDetails(imageId) {
    // Define details based on the image ID
    const details = {
        bottomCube: {
            title: "Bottom Cube View",
            description: "This is the bottom view of the cube, showing its general layout and labels. Here you can see the screws and battery compartment cover.",
            image: "images/BottomCube.jpg",
        },
        bottomBatteries: {
            title: "Bottom Batteries View",
            description: "This view shows the battery compartment, demonstrating how to replace the batteries in the cube. The compartment holds standard AA batteries.",
            image: "images/BottomBatteries.jpg",
        },
        bottomScrews: {
            title: "Bottom Screws Exposed View",
            description: "In this view, the screws are exposed, indicating the locations where disassembly begins. This helps to understand how the cube is held together.",
            image: "images/BottomScrewsExposed.jpg",
        },
        internalsBack: {
            title: "Internals Back View",
            description: "This image reveals the internal circuit of the cube, with wires and the primary control board. You can see how the connections are made inside.",
            image: "images/InternalsBackView.jpg",
        },
    };

    // Get the content based on the clicked image
    const detail = details[imageId];

    // Populate the popup with the relevant details
    document.getElementById("details-title").textContent = detail.title;
    document.getElementById("details-description").textContent = detail.description;
    document.getElementById("details-image").src = detail.image;

    // Show the popup
    document.getElementById("details-popup").classList.remove("hidden");
}

function closeDetails() {
    // Hide the popup
    document.getElementById("details-popup").classList.add("hidden");
}

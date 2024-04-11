let lastWidth = window.innerWidth; // Store the initial width

// Function to smoothly move the element to a random position within the viewport
function moveToRandomPosition() {
    const elem = document.getElementById("floater");
    if (!elem) return; // Exit if the element is not found

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    let currentTop = parseInt(elem.style.top, 10) || 0;
    let currentLeft = parseInt(elem.style.left, 10) || 0;

    // Ensure a minimum distance for the movement
    const minDistance = 100; // Minimum distance the element should move
    let targetX, targetY, distance;

    do {
        // Calculate max possible positions, considering the element's size
        const maxX = viewportWidth - elem.offsetWidth;
        const maxY = viewportHeight - elem.offsetHeight;

        // Generate a new random position within the bounds
        targetX = Math.floor(Math.random() * maxX);
        targetY = Math.floor(Math.random() * maxY);

        // Calculate the distance to the new target from the current position
        const dx = targetX - currentLeft;
        const dy = targetY - currentTop;
        distance = Math.sqrt(dx * dx + dy * dy);
    } while (distance < minDistance); // Repeat until a target far enough is found

    // Smoothly move the element to the target position
    let id = setInterval(frame, 10);
    function frame() {
        const dx = targetX - currentLeft;
        const dy = targetY - currentTop;

        if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
            clearInterval(id);
            elem.style.top = targetY + 'px';
            elem.style.left = targetX + 'px';
        } else {
            currentTop += dy / 10; // Adjust these values to change the speed
            currentLeft += dx / 10;
            elem.style.top = currentTop + 'px';
            elem.style.left = currentLeft + 'px';
        }
    }
}


// Resize listener and initial move logic remains the same.


// Immediately move the element to a starting position
moveToRandomPosition();

// Event listener for window resize
window.addEventListener('resize', function() {
    const currentWidth = window.innerWidth;
    if (Math.abs(currentWidth - lastWidth) >= 300) {
        moveToRandomPosition(); // Smoothly move the element
        lastWidth = currentWidth; // Update the last known width
    }
});



// let w = window.innerWidth;
// let h = window.innerHeight;

// function moveToRandomPosition() {
//     const elem = document.getElementById("floater");
//     const viewportWidth = window.innerWidth;
//     const viewportHeight = window.innerHeight;

//     // Calculate max possible positions, considering the element's size
//     const maxX = viewportWidth - elem.offsetWidth;
//     const maxY = viewportHeight - elem.offsetHeight;

//     // Generate random positions within the bounds
//     const targetX = Math.floor(Math.random() * maxX);
//     const targetY = Math.floor(Math.random() * maxY);

//     let id = setInterval(frame, 5);
//     function frame() {
//         // Current position
//         let currentTop = parseInt(elem.style.top, 10) || 0;
//         let currentLeft = parseInt(elem.style.left, 10) || 0;

//         // Calculate distance to target
//         const dx = targetX - currentLeft;
//         const dy = targetY - currentTop;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         // Define a threshold distance to stop the animation and jump to the target
//         const threshold = 0.5;

//         if (distance <= threshold) {
//             clearInterval(id);
//             // Directly set the element's position to the target coordinates
//             elem.style.top = targetY + 'px';
//             elem.style.left = targetX + 'px';
//         } else {
//             // Calculate step size as a smaller fraction of the distance when close to the target
//             const stepSize = Math.min(5, distance);
//             const stepX = (dx / distance) * stepSize;
//             const stepY = (dy / distance) * stepSize;
//             currentTop += stepY;
//             currentLeft += stepX;
//             elem.style.top = Math.round(currentTop) + 'px';
//             elem.style.left = Math.round(currentLeft) + 'px';
//         }
//     }
// }




// function myMove() {
//     let id = null;
//     const elem = document.getElementById("floater");
//     let pos = 0;
//     clearInterval(id);
//     id = setInterval(function frame() {
//         if (pos >= h - elem.offsetHeight) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = "0px"; // Keep the element at the left edge
//         }
//     }, 5);
// }

// let wasAbove600 = window.innerWidth > 600; // Initial state based on window width

// window.addEventListener('resize', function() {
//     let currentWidth = window.innerWidth; // Get current width

//     // Check if window width has just dropped below 600px from above
//     if (currentWidth < 600 && wasAbove600) {
//         myMove(); // Trigger the downward movement
//     }
//     // Check if window width has just exceeded 600px from below
//     else if (currentWidth > 600 && !wasAbove600) {
//         moveToRandomPosition(); // Move to a random position smoothly
//     }

//     // Update wasAbove600 based on current width
//     wasAbove600 = currentWidth > 600;
// });


// let w = window.innerWidth;
// let h = window.innerHeight;

// function myMove() {
//     let id = null;
//     const elem = document.getElementById("floater");
//     let pos = 0;
//     clearInterval(id);
//     id = setInterval(frame, 5);

//     function frame() {
//         if (pos >= h - elem.offsetHeight) { // Adjusted condition to stop at the bottom of the window
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = "0px"; // Keep the element at the left edge
//         }
//     }
// }

// // function windowSize(w) {
// //     if (w < 600) {
// //         myMove();
// //     } else {
// //         // Do nothing or reset element position if needed
// //     }
// // }

// let lastLoggedWidth = window.innerWidth; // Initial width

// window.addEventListener('resize', function() {
//     let currentWidth = window.innerWidth; // Get current width

//     // Check if the current width has changed by at least 50 pixels from the last logged width
//     if (Math.abs(currentWidth - lastLoggedWidth) > 600) {
//         myMove(); // Log the current width
//         lastLoggedWidth = currentWidth; // Update the last logged width to the current width
//     }
// });



// // windowSize(w);ffgfg

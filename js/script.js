
   document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('myVideo');
  const introMessage = document.getElementById('intro-message');
  const overlayContent = document.getElementById('overlay-content');
  
 
  let contentShown = false;

  video.addEventListener('timeupdate', () => {
    // Check if the current video time is past the desired point (e.g., 10 seconds).
    if (video.currentTime >= 10 && !contentShown) {
      // Hide the initial message and show the new content.
      introMessage.classList.add('hidden');
      overlayContent.classList.remove('hidden');

     
      contentShown = true;
    }
   
  });




  video.addEventListener('timeupdate', () => {
    // Check if the current video time is past the desired point (e.g., 10 seconds).
    if (video.currentTime >= 20 && !contentShown) {
      // Hide the initial message and show the new content.
      
      introMessage.classList.add('hidden');
      overlayContent.classList.remove('hidden');


      // Set the flag to true so this code block doesn't run again.
      contentShown = true;
    }
  });

  // You can also listen for the video to end to reset the UI.
  video.addEventListener('ended', () => {
    // Show the intro message again and hide the overlay.
    introMessage.classList.remove('hidden');
    overlayContent.classList.add('hidden');
    overlayContent2.classList.add('hidden');
    contentShown = false; // Reset the flag
  });
});
// script.js

// Get the video and image elements from the DOM
const video = document.getElementById('myVideo');
const image = document.getElementById('myImage');

// Define the timestamp in seconds when the image should appear
const triggerTime = 20; // For example, 10 seconds into the video

// Add a flag to prevent the event from triggering repeatedly
let imageTriggered = false;

// Add a timeupdate event listener to the video
video.addEventListener('timeupdate', () => {
    // Check if the current time has passed the trigger point
    // Use >= for reliability, in case the exact time is missed.
    if (video.currentTime >= triggerTime && !imageTriggered) {
        // Show the image by removing the 'hidden' class
        image.classList.remove('hidden');

        // Set the flag to true so the image doesn't reappear
        imageTriggered = true;
    }
});

// Optionally, add a seeked event listener to reset the trigger
// This allows the user to rewind the video and re-trigger the event.
video.addEventListener('seeked', () => {
    // Check if the user has rewound past the trigger point
    if (video.currentTime < triggerTime && imageTriggered) {
        // Hide the image again
        image.classList.add('hidden');

        // Reset the flag
        imageTriggered = false;
    }
});

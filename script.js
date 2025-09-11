document.addEventListener('DOMContentLoaded', () => {
    //
    // --- VIDEO OVERLAY FUNCTIONALITY ---
    //
    const expandVideoButton = document.getElementById('expandVideoButton');
    const fullScreenVideoOverlay = document.getElementById('fullScreenVideoOverlay');
    const closeVideoOverlayButton = document.getElementById('closeVideoOverlay');
    const headerVideo = document.querySelector('.header .responsive-video');
    const overlayVideo = document.querySelector('.overlay-video');

    if (expandVideoButton && fullScreenVideoOverlay && overlayVideo) {
        expandVideoButton.addEventListener('click', () => {
            fullScreenVideoOverlay.style.display = 'flex';
            // Pause the background video and play the overlay video
            if (headerVideo) {
                headerVideo.pause();
            }
            overlayVideo.play();
        });

        closeVideoOverlayButton.addEventListener('click', () => {
            fullScreenVideoOverlay.style.display = 'none';
            // Pause the overlay video when closing
            overlayVideo.pause();
            // If the header video exists, restart it
            if (headerVideo) {
                headerVideo.play();
            }
        });

        // Close the overlay if a user clicks outside the video
        fullScreenVideoOverlay.addEventListener('click', (event) => {
            if (event.target === fullScreenVideoOverlay) {
                fullScreenVideoOverlay.style.display = 'none';
                overlayVideo.pause();
                if (headerVideo) {
                    headerVideo.play();
                }
            }
        });
    }
// ... (existing code) ...

// --- SIDEBAR NAVIGATION FUNCTIONALITY ---
const openSidebarBtn = document.getElementById('open-sidebar-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const sidebarNav = document.getElementById('sidebar-nav');
const body = document.body;

if (openSidebarBtn && closeSidebarBtn && sidebarNav) {
    openSidebarBtn.addEventListener('click', () => {
        sidebarNav.classList.add('is-open');
        body.classList.add('sidebar-open');
    });

    closeSidebarBtn.addEventListener('click', () => {
        sidebarNav.classList.remove('is-open');
        body.classList.remove('sidebar-open');
    });

    // Optional: Close the sidebar when clicking outside it
    body.addEventListener('click', (e) => {
        if (body.classList.contains('sidebar-open') && !sidebarNav.contains(e.target) && !openSidebarBtn.contains(e.target)) {
            sidebarNav.classList.remove('is-open');
            body.classList.remove('sidebar-open');
        }
    });
}

    //
    // --- FEEDBACK FORM FUNCTIONALITY ---
    //
    // All feedback form JavaScript has been removed because it is now handled by the embedded Google Form.
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (existing code for video overlay and feedback form)

    // --- CTSO DROP-DOWN FUNCTIONALITY ---
    const ctsoDropdowns = document.querySelectorAll('.ctso-dropdown-container');

    ctsoDropdowns.forEach(dropdown => {
        const toggleButton = dropdown.querySelector('.ctso-toggle-btn');
        const content = dropdown.querySelector('.ctso-content');

        toggleButton.addEventListener('click', () => {
            // Toggle the 'active' class on the parent container
            dropdown.classList.toggle('active');

            // Toggle the display of the content
            if (content.style.display === 'none') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});

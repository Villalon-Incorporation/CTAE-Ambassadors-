document.addEventListener('DOMContentLoaded', () => {

    //
    // --- VIDEO OVERLAY FUNCTIONALITY ---
    //
    const expandVideoButton = document.getElementById('expandVideoButton');
    const fullScreenVideoOverlay = document.getElementById('fullScreenVideoOverlay');
    const closeVideoOverlayButton = document.getElementById('closeVideoOverlay');
    const headerVideo = document.querySelector('.header .responsive-video');
    const overlayVideo = document.querySelector('.overlay-video');
    
    // --- 'DID YOU FIND CHAMP?' INTERACTIVE ITEM ---
    const champTarget = document.getElementById('champTarget');
    const champNotification = document.getElementById('champNotification');
    
    let isChampTargetTriggered = false;
    let champTargetClicked = false; // New flag to track if the interactive item was clicked
    
    const googleFormUrl = "YOUR_GOOGLE_FORM_URL_HERE";

    if (expandVideoButton && fullScreenVideoOverlay && overlayVideo) {
        expandVideoButton.addEventListener('click', () => {
            fullScreenVideoOverlay.style.display = 'flex';
            if (headerVideo) {
                headerVideo.pause();
            }
            overlayVideo.play();
            
            // Reset state for new video view
            isChampTargetTriggered = false;
            champTargetClicked = false;
            
            // Start listening for the video time updates for the interactive item
            overlayVideo.addEventListener('timeupdate', () => {
    // 3 minutes * 60 seconds/minute + 14 seconds = 194 seconds
    const popUpTime = 198.5;
    const hideTime = 200; // The second the pop-up will disappear

    if (overlayVideo.currentTime >= popUpTime && overlayVideo.currentTime < hideTime && !isChampTargetTriggered) {
        champTarget.style.display = 'block';
        isChampTargetTriggered = true;
    } else if (overlayVideo.currentTime >= hideTime && isChampTargetTriggered) {
        champTarget.style.display = 'none';
        isChampTargetTriggered = false; // Reset the trigger
    }
});

            // Add the click handler for the interactive item
            champTarget.addEventListener('click', () => {
                alert('You found Champ!');
                window.open(googleFormUrl, '_blank');
                champTarget.style.display = 'none';
                champTargetClicked = true; // Set flag to true on click
            });
        });

        const closeOverlayHandler = () => {
            fullScreenVideoOverlay.style.display = 'none';
            overlayVideo.pause();
            overlayVideo.currentTime = 0; // Reset video to beginning
            if (headerVideo) {
                headerVideo.play();
            }
            
            // Check if interactive item was clicked, if not, show notification
            if (!champTargetClicked) {
                champNotification.classList.add('show');
                setTimeout(() => {
                    champNotification.classList.remove('show');
                }, 5000); // Notification lasts 5 seconds
            }

            // Reset state
            isChampTargetTriggered = false;
            champTarget.style.display = 'none';
        };

        closeVideoOverlayButton.addEventListener('click', closeOverlayHandler);

        fullScreenVideoOverlay.addEventListener('click', (event) => {
            if (event.target === fullScreenVideoOverlay) {
                closeOverlayHandler();
            }
        });
    }

    //
    // --- SIDEBAR NAVIGATION FUNCTIONALITY ---
    //
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

        body.addEventListener('click', (e) => {
            if (body.classList.contains('sidebar-open') && !sidebarNav.contains(e.target) && !openSidebarBtn.contains(e.target)) {
                sidebarNav.classList.remove('is-open');
                body.classList.remove('sidebar-open');
            }
        });
    }

    //
    // --- CTSO DROP-DOWN FUNCTIONALITY ---
    //
    const ctsoDropdowns = document.querySelectorAll('.ctso-dropdown-container');

    ctsoDropdowns.forEach(dropdown => {
        const toggleButton = dropdown.querySelector('.ctso-toggle-btn');
        const content = dropdown.querySelector('.ctso-content');

        toggleButton.addEventListener('click', () => {
            dropdown.classList.toggle('active');
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});

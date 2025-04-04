function ready(fn) {
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function thunderstorm() {
    document.getElementById('bg').classList.add('on');

    window.setTimeout(function () {
        document.getElementById('bg').classList.remove('on');

        window.setTimeout(function () {
            document.getElementById('bg').classList.add('on');

            window.setTimeout(function () {
                document.getElementById('bg').classList.remove('on');

                window.setTimeout(function () {
                    document.getElementById('bg').classList.add('on-long');

                    window.setTimeout(function () {
                        document.getElementById('bg').classList.remove('on-long');
                    }, 500);
                }, 100);
            }, 100);
        }, 100);
    }, 100);
}

function showMemberDetails(member) {
    document.getElementById('member').className = 'member';

    document.getElementById('member').classList.add('show-member');
    document.getElementById('member').classList.add(member);
}

function hideMemberDetails() {
    document.getElementById('member').className = 'member';
}

function toggleMenu() {
    closeContent();
    document.getElementsByClassName('sidebar')[0].classList.toggle('sidebar--active');
}

function closeMenu() {
    document.getElementsByClassName('sidebar')[0].classList.remove('sidebar--active');
}

function openContent(type) {
    closeMenu();
    document.querySelector('.content-overlay__entry--' + type).classList.add('content-overlay__entry--active');
    document.querySelector('.content-overlay').classList.add('content-overlay--active');
}

function closeContent() {
    document.querySelector('.content-overlay').classList.remove('content-overlay--active');

    setTimeout(function () {
        var entries = document.querySelectorAll('.content-overlay__entry');

        for (var i = 0; i < entries.length; i++) {
            entries[i].classList.remove('content-overlay__entry--active');
        }
    }, 500);
}

function closeAll() {
    hideMemberDetails();
    closeMenu();
    closeContent();
}

function generateMailToLink(pre, post) {
    window.location.href = 'mailto:' + pre + '@' + post;
}

function playAudioTrack(key) {
    document.getElementById('track-container-' + key).style.display = 'block';
    document.getElementById('track-' + key).play();
}

function initializeImageGallery() {
    window.imageGallery = {
        images: document.querySelectorAll('img.gallery-img'),
        currentImageIndex: -1,
        touchEvent: {
            swipeDir: 'none',
            startX: 0,
            startY: 0,
            distX: 0,
            distY: 0,
            startTime: 0
        }
    };

    window.imageGallery.images.forEach(function (item, index) {
        item.onclick = function () {
            showGalleryDetails(item, index);
        }
    });
}

function showGalleryDetails(img, index) {
    var detailContainer = document.querySelector('.gallery-detail');
    detailContainer.style.backgroundImage = 'url("' + img.src + '")';
    detailContainer.style.display = 'block';

    window.imageGallery.currentImageIndex = index;

    document.addEventListener('keyup', handleGalleryNavigation, false);
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    document.addEventListener('touchend', handleTouchEnd, false);
}

function hideGalleryDetails() {
    window.imageGallery.currentImageIndex = -1;

    document.removeEventListener('keyup', handleGalleryNavigation, false);
    document.removeEventListener('touchstart', handleTouchStart, false);
    document.removeEventListener('touchmove', handleTouchMove, false);
    document.removeEventListener('touchend', handleTouchEnd, false);

    var detailContainer = document.querySelector('.gallery-detail');
    detailContainer.style.display = 'none';
}

function handleGalleryNavigation(event) {
    if (event.code === 'Escape') {
        hideGalleryDetails();
    }
    if (event.code === 'ArrowRight') {
        if (window.imageGallery.images[window.imageGallery.currentImageIndex + 1]) {
            showGalleryDetails(window.imageGallery.images[window.imageGallery.currentImageIndex + 1], window.imageGallery.currentImageIndex + 1);
        } else {
            showGalleryDetails(window.imageGallery.images[0], 0);
        }
    }
    if (event.code === 'ArrowLeft') {
        if (window.imageGallery.images[window.imageGallery.currentImageIndex - 1]) {
            showGalleryDetails(window.imageGallery.images[window.imageGallery.currentImageIndex - 1], window.imageGallery.currentImageIndex - 1);
        } else {
            var lastImageIndex = window.imageGallery.images.length - 1;
            showGalleryDetails(window.imageGallery.images[lastImageIndex], lastImageIndex);
        }
    }
}

function handleTouchStart(event) {
    var touchObj = event.changedTouches[0];
    window.imageGallery.touchEvent.swipeDir = 'none';
    window.imageGallery.touchEvent.distX = 0;
    window.imageGallery.touchEvent.distY = 0;
    window.imageGallery.touchEvent.startX = touchObj.pageX;
    window.imageGallery.touchEvent.startY = touchObj.pageY;
    window.imageGallery.touchEvent.startTime = new Date().getTime();
    // event.preventDefault();
}

function handleTouchMove(event) {
    // event.preventDefault();
}

function handleTouchEnd(event) {
    var touchObj = event.changedTouches[0];
    var elapsedTime = new Date().getTime() - window.imageGallery.touchEvent.startTime;
    window.imageGallery.touchEvent.distX = touchObj.pageX - window.imageGallery.touchEvent.startX;
    window.imageGallery.touchEvent.distY = touchObj.pageY - window.imageGallery.touchEvent.startY;

    if (elapsedTime <= 300) {
        if (Math.abs(window.imageGallery.touchEvent.distX) >= 150 && Math.abs(window.imageGallery.touchEvent.distY) <= 100) {
            window.imageGallery.touchEvent.swipeDir = (window.imageGallery.touchEvent.distX < 0) ? 'ArrowLeft' : 'ArrowRight';
        }
        else if (Math.abs(window.imageGallery.touchEvent.distY) >= 150 && Math.abs(window.imageGallery.touchEvent.distX) <= 100) {
            window.imageGallery.touchEvent.swipeDir = (window.imageGallery.touchEvent.distY < 0) ? 'Up' : 'Escape';
        }
    }

    handleGalleryNavigation({code: window.imageGallery.touchEvent.swipeDir});

    // event.preventDefault();
}

function openPastEvents() {
    document.querySelector('.past-events__content').classList.toggle('past-events__content--open');

    window.setTimeout(function () {
        document.querySelector('.past-events__content').scrollIntoView({behavior: 'smooth'})
    }, 100);
}

ready(function () {
    window.setTimeout(function () {
        document.getElementById('content').classList.add('on');

        window.setTimeout(function () {
            document.getElementById('content').classList.remove('on');

            window.setTimeout(function () {
                document.getElementById('content').classList.add('on');

                window.setTimeout(function () {
                    document.getElementById('content').classList.remove('on');

                    window.setTimeout(function () {
                        document.getElementById('content').classList.add('on');

                        window.setTimeout(function () {
                            document.getElementById('content').classList.remove('on');

                            window.setTimeout(function () {
                                document.getElementById('content').classList.add('on');
                            }, 50);
                        }, 50);
                    }, 50);
                }, 50);
            }, 50);
        }, 50);

        initializeImageGallery();
    }, 1500);

    window.setTimeout(function () {
        thunderstorm();
    }, 5000);

    window.setInterval(function () {
        thunderstorm();
    }, 20000);

    window.setTimeout(function () {
        document.getElementById('content').classList.add('loaded');
    }, 100);

    window.setTimeout(function () {
        document.querySelector('.contact-icon').classList.add('contact-icon--visible');
    }, 8000);
});
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

function showGalleryDetails(img) {
    var detailContainer = document.querySelector('.gallery-detail');
    detailContainer.style.backgroundImage = 'url("' + img.src + '")';
    detailContainer.style.display = 'block';
}

function hideGalleryDetails() {
    var detailContainer = document.querySelector('.gallery-detail');
    detailContainer.style.display = 'none';
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
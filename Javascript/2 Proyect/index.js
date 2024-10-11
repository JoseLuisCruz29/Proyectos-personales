let background = ['img/background.jpg', 'img/background2.jpg', 'img/background3.jpg']

function getBackground() {
    const previousBg = localStorage.getItem('background');
    let setBackground = Math.floor(Math.random() * background.length);
    if (previousBg == setBackground) {
        return getBackground();
    }
    localStorage.setItem('background', setBackground);
    document.body.style.backgroundImage = `url(${background[setBackground]})`;
}

window.onload = function () {
    getBackground();
}
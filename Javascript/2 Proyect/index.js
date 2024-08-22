let background = []

background[0] = 'img/background.jpg';
background[1] = 'img/background2.jpg';
background[2] = 'img/background3.jpg';

window.onload = function () {
    let setBackground = Math.floor( Math.random()) * background.length;
    document.body.style.backgroundImage = `url(${background[setBackground]})`;
}
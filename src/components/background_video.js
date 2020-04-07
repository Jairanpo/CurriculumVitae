const mp4 = require('../static/videos/3840x2160.mp4');
const webm = require('../static/videos/3840x2160.webm');
const image = require('../static/images/background.png');

var html = `
    <div>
        <video playsinline autoplay muted loop poster=${image} id="bgvid">
        <source src=${webm} type="video/webm">
        <source src=${webm} type="video/mp4">
        </video>
    </div>
`

module.exports = html;
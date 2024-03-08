function t(time) {
    const video = document.getElementById("mdn-video");
    const timeArray = time.split(":");
    const timeMin = Number(timeArray[0]);
    const timeSec = Number(timeArray[1]);
    const timeTotal = timeMin * 60 + timeSec;
    video.currentTime = timeTotal;
}
function setTimeStamp() {
    var timeStampList = document.querySelectorAll(".time-stamp");
    timeStampList.forEach(function(target) {
        target.addEventListener('click', function() {
            const text =  target.firstChild.nodeValue;
            //console.log(text.substring(0,5));
            t(text.substring(0,5));
        });
    });
}
document.addEventListener("DOMContentLoaded", setTimeStamp);
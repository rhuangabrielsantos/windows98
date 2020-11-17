function time() {
    let today = new Date();

    let hours = today.getHours();
    let minutes = today.getMinutes();

    document.getElementById('time').innerHTML = hours + ":" + minutes;

    setTimeout('time()', 500);
}

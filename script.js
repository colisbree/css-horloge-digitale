
setInterval(() => {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let hr_dot = document.querySelector('.hr_dot');
    let min_dot = document.querySelector('.min_dot');
    let sec_dot = document.querySelector('.sec_dot');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h > 12 ? "PM" : "AM";

    //conversion 24H en 12h
    if (h > 12) {
        h = h - 12;
    }

    // ajout 0 quand 1 seul chiffre
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    // ajout du pluriel
    hplu = (h > 1) ? "Heures" : "Heure";
    mplu = (m > 1) ? "Minutes" : "Minute";
    splu = (s > 1) ? "Secondes" : "Seconde";

    hours.innerHTML = h + "<br/><span>" + hplu + "</span>";
    minutes.innerHTML = m + "<br/><span>" + mplu + "</span>";
    seconds.innerHTML = s + "<br/><span>" + splu + "</span>";
    ampm.innerHTML = am;

    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    hr_dot.style.transform = `rotate(${h * 30}deg )`; // 360/12=30
    min_dot.style.transform = `rotate(${m * 6}deg )`; // 360/60=6
    sec_dot.style.transform = `rotate(${s * 6}deg )`; // 360/60=6
})


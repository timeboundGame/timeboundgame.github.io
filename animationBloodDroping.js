function blooding() {
    const blooddroping = document.querySelectorAll("#blooddroping > div");

    blooddroping.forEach((e) => {
        e.style.transition = "none";
        e.style.height = '0';

    setTimeout(() => {
        blooddroping.forEach((e) => {
            const sec = Math.floor(Math.random() * 5) + 10;
            e.style.transition = sec + "s";
            e.style.height = '100vh'; 
        });
    }, 50)});
}

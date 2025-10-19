const locale = "id-ID"; // Ubah ke "en-US" untuk bahasa Inggris

setInterval(() => {
    const now = new Date();
    const time = now.toLocaleTimeString(locale, { hour12: true });
    const day = now.toLocaleDateString(locale, { weekday: 'long' });

    document.getElementById("day").innerText = 
        day.charAt(0).toUpperCase() + day.slice(1);

    document.getElementById("time").innerText = time;
}, 1000);

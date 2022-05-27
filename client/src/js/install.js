const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// event handler for the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", function (event) {
    window.deferredPrompt = event;
    butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async function() {

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {});

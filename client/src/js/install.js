const buttonInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// event handler for the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", function (event) {
    window.deferredPrompt = event;
    buttonInstall.classList.toggle("hidden", false);
});

// Click event handler for the `buttonInstall` element
buttonInstall.addEventListener("click", async function() {
    const promptEvent = window.deferredPrompt;
    if(!promptEvent){
        return;
    }
    else {
    promptEvent.prompt();
    window.deferredPrompt = null;
    buttonInstall.classList.toggle('hidden', true)
}
});

// Event handler for the `appinstalled` event
window.addEventListener("appinstalled", function(event) {
    window.deferredPrompt = null;
});

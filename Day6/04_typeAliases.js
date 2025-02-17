function launchBrowser(browser) {
    if (browser.browserName === "Chrome" && browser.version === "131") {
        console.log("Launch the chrome browser");
    }
    else {
        console.log("Launch the Edge browser");
    }
}
var chromeBrowser = {
    browserName: "Chrome",
    version: "131"
};
var edgeBrowser = {
    browserName: "Edge",
    version: "130"
};
launchBrowser(chromeBrowser);

type supportedBrowser="Chrome"|"Edge";
type browserVersion="131"|"130";

type browserProfile={
    browserName:supportedBrowser,
    version:browserVersion
}

function launchBrowser(browser:browserProfile){
    if(browser.browserName==="Chrome" && browser.version==="131"){
        console.log("Launch the chrome browser");   
    }
    else{
        console.log("Launch the Edge browser");   
    }
}
const chromeBrowser:browserProfile={
    browserName:"Chrome",
    version:"131"
}

const edgeBrowser:browserProfile={
    browserName:"Edge",
    version:"130"
}
launchBrowser(chromeBrowser)
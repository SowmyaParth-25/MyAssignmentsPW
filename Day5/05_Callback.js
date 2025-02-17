let browser = "Edge";

function checkBrowserVersion(callback){
    setTimeout(()=>{
callback(browser);
    },2000);
}
function logBrowserverion(browser){
console.log(`Browser version of ${browser} is v0.1`);

}

checkBrowserVersion(logBrowserverion)
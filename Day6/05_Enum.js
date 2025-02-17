"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Environment;
(function (Environment) {
    Environment[Environment["Local"] = 0] = "Local";
    Environment[Environment["Development"] = 1] = "Development";
    Environment[Environment["Staging"] = 2] = "Staging";
    Environment[Environment["Production"] = 3] = "Production";
})(Environment || (Environment = {}));
function runTests(env) {
    //    console.log(`Running tests in ${env} Environment`);
    switch (env) {
        case Environment.Local:
            console.log("Running tests in LOCAL environment.");
            break;
        case Environment.Development:
            console.log("Running tests in DEVELOPMENT  environment.");
            break;
        case Environment.Staging:
            console.log("Running tests in STAGING  environment.");
            break;
        case Environment.Production:
            console.log("Running tests in PRODUCTION  environment.");
            break;
        default:
            console.log("UNKNOWN environment.");
            break;
    }
}
runTests(Environment.Local);
runTests(Environment.Production);
runTests(Environment.Development);
runTests(Environment.Staging);

import { log } from "console";

enum Environment{
    Local,
    Development,
    Staging,
    Production
}

function runTests(env:Environment):void{
    
        //    console.log(`Running tests in ${env} Environment`);
        switch(env){
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

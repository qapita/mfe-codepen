import React from "react";
import { createRoot } from "react-dom/client";
const App =  React.lazy(() => import("./App"));
import axios from 'axios';

const loadFromManifest = async function(manifestUrl: string, propertyName: string) {
    var data = await axios.get(manifestUrl);   
    var url : string | undefined;
    if(!data?.data || !(url = data.data[propertyName])){
        alert(`No ${propertyName} available in manifest`);
        throw 'Unable to load url from manifest';
    }
    console.log(data.data)
    var lastSlashIndex = manifestUrl.lastIndexOf('/') || 0;
    return manifestUrl.substr(0, lastSlashIndex) + url;
};

async function loadConfigs(){
    (window as any).approvalMFE = "http://localhost:8001/remoteEntry.js";
    (window as any).liquidityMFE = await loadFromManifest("http://localhost:8002/manifest.json?q=234234", 'liquidityjs');
    console.log((window as any).liquidityMFE)
}

loadConfigs()
.then(() => {    
    const container: any = document.getElementById("root");
    const root = createRoot(container);
    root.render(<App />);
})
.catch(err => {
    console.error('unable to load config', err);
    throw err;
});

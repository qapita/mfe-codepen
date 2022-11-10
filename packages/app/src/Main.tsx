import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import { loadComponent } from "./utils/loadComponent";

/*
    Copied from https://github.com/module-federation/module-federation-examples/blob/master/dynamic-system-host/app1/src/App.js
*/
const System = (props: {system: {remote: string, url: string, module: string}}) => {
    const {
      system,
      system: { remote, url, module },
    } = props;
  
    if (!system || !remote || !url || !module) {
      return <h2>No system specified</h2>;
    }
    const Component = React.lazy(loadComponent(remote, 'default', module, url));  
    console.log(`Loading...${remote} - ${module} - ${url}`);
    debugger
    return (
      <React.Suspense fallback="Loading System">
        <Component />
      </React.Suspense>
    );
}

const Main = () => {
    return (
        <div>
            <h1>Header</h1>
            <main>
                <Routes>
                    <Route path="/liquidity/*" element={<System system={{ remote: 'liquidity', url: (window as any).liquidityMFE, module: './LiquidityApp'  }} />} />
                    <Route path="/surrenders" element={<System system={{ remote: 'liquidity', url: (window as any).liquidityMFE, module: './LiquidityApp'  }} />} />
                    <Route path="/approvals" element={<System system={{ remote: 'approval', url: (window as any).approvalMFE, module: './ApprovalApp'  }} />} />
                    <Route path="*" element={"No match found"}/>
                    <Route path="/" element={<HomePage />} />
                  </Routes>     
            </main>
        </div>
    );
  };
  
  export default Main;
  

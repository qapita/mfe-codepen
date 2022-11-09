import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";

const ApprovalApp = React.lazy(() => import('approval/ApprovalApp'));
const LiquidityApp = React.lazy(() => import('liquidity/LiquidityApp'));

const renderMFE = (MFE: React.ComponentType, loadingComponent: React.ReactNode | null = null): React.ReactNode => {
    return(
        <React.Suspense fallback={loadingComponent || "Loading..."}>
            <MFE />
        </React.Suspense>
    )
};


const Main = () => {
    return (
        <div>
            <h1>Header</h1>
            <main>
                <Routes>
                    <Route path="/liquidity/*" element={renderMFE(LiquidityApp)}/>
                    <Route path="/approvals/*" element={renderMFE(ApprovalApp, 'Loading approvals..')}/>
                    <Route path="*" element={"No match found"}/>
                  </Routes>     
            </main>
        </div>
    );
  };
  
  export default Main;
  
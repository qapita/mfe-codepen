import React, { Suspense, useEffect, useRef } from "react";
const ApprovalApp = React.lazy(() => import('approval/ApprovalApp'));
const LiquidityApp = React.lazy(() => import('liquidity/LiquidityApp'));

const App = () => {
  return (
    <div>
      <h1>Parent App</h1>
      <Suspense fallback={<div>Loading Approval...</div>}>
        <ApprovalApp />
      </Suspense>
      <Suspense fallback={<div>Loading Liquidity...</div>}>
        <LiquidityApp />
      </Suspense>      
    </div>
  );
};

export default App;

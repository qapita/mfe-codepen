import React, { useEffect, useRef } from "react";

const App = () => {
  const approvalRef: any = useRef(null);

  useEffect(() => {
    import("approval/ApprovalApp")
      .then(({ mount }) => mount(approvalRef.current))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>App</h1>
      <div ref={approvalRef}></div>
    </div>
  );
};

export default App;

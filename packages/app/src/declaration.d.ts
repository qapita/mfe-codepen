/*
    for declaring the scss module in typescript for importing.
*/
declare module "*.scss";
declare module "*.png";
declare module "*.svg";
declare module "*.less";
declare module "approval/ApprovalApp";
declare module "liquidity/LiquidityApp";

declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: Scope, plugin: Scope };

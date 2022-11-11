import { getOrLoadRemote } from './getOrLoadRemote';
/*
    Copied from https://github.com/module-federation/module-federation-examples/blob/master/dynamic-system-host/app1/src/utils/loadComponent.js
*/
export const loadComponent = (remote: any, sharedScope: any, module: any, url: any) => {
  return async () => {
    await getOrLoadRemote(remote, sharedScope, url);
    const container = window[remote] as any;
    const factory = await container.get(module);
    const Module = factory();
    return Module;
  };
};

/*
  Copied from https://github.com/module-federation/module-federation-examples/blob/master/dynamic-system-host/app1/src/utils/getOrLoadRemote.js
*/

export const getOrLoadRemote = (remote: any, shareScope: any, remoteFallbackUrl = undefined) =>
  new Promise<void>((resolve, reject) => {
    // check if remote exists on window
    if (!window[remote]) {
      // search dom to see if remote tag exists, but might still be loading (async)
      const existingRemote = document.querySelector(`[data-webpack="${remote}"]`) as any;
      // when remote is loaded..
      const onload = (originOnload: any) => async () => {
        await __webpack_init_sharing__('default');
        // check if it was initialized
        if (!(window as any)[remote].__initialized) {
          // if share scope doesnt exist (like in webpack 4) then expect shareScope to be a manual object
          if (typeof __webpack_share_scopes__ === 'undefined') {
            // use default share scope object passed in manually
            await (window as any)[remote].init(shareScope.default);
          } else {
            // otherwise, init share scope as usual
            await (window as any)[remote].init((__webpack_share_scopes__ as any)[shareScope]);
          }
          // mark remote as initialized
          (window as any)[remote].__initialized = true;
        }
        // resolve promise so marking remote as loaded
        resolve();
        originOnload && originOnload();
      };
      if (existingRemote) {
        // if existing remote but not loaded, hook into its onload and wait for it to be ready
        existingRemote.onload = onload(existingRemote.onload);
        existingRemote.onerror = reject;
        // check if remote fallback exists as param passed to function
        // TODO: should scan public config for a matching key if no override exists
      } else if (remoteFallbackUrl) {
        // inject remote if a fallback exists and call the same onload function
        var d = document,
          script = d.createElement('script');
        script.type = 'text/javascript';
        // mark as data-webpack so runtime can track it internally
        script.setAttribute('data-webpack', `${remote}`);
        script.async = true;
        script.onerror = reject;
        script.onload = onload(null);
        script.src = remoteFallbackUrl;
        d.getElementsByTagName('head')[0].appendChild(script);
      } else {
        // no remote and no fallback exist, reject
        reject(`Cannot Find Remote ${remote} to inject`);
      }
    } else {
      // remote already instantiated, resolve
      resolve();
    }
  });

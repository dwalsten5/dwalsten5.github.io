/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Insert scripts on initial render manually, allowing jQuery to load first
const insertJS = () => {
  const addScriptToBody = (src) => {
    const script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
  };

  const jQuery = document.createElement('script');
  document.body.appendChild(jQuery);
  // Because main and util depend on jQuery, ensure jQuery is loaded before
  // inserting these scripts
  jQuery.onload = () => {
    addScriptToBody('/js/main.js');
    addScriptToBody('/js/util.js');
  };
  jQuery.src = '/js/jquery.min.js';

  addScriptToBody('/js/breakpoints.min.js');
  addScriptToBody('/js/browser.min.js');
};

exports.onInitialClientRender = () => {
  insertJS();
};

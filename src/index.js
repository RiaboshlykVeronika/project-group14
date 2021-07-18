import './sass/main.scss';
// Import a module using ES6 import syntax
import './js/mobile-menu.js'

// Import a module from a URL (e.g. CDN), using dynamic imports
import('https://cdnjs.cloudflare.com/ajax/libs/body-scroll-lock/3.1.5/bodyScrollLock.min.js').then(() => {
  console.log(_.VERSION);
});

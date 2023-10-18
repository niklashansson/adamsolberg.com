import { Vimeo } from './vimeo';

window.Webflow ||= [];
import { vimeoPlayer } from './vimeoPlayer';

window.Webflow.push(() => {
  vimeoPlayer();
});

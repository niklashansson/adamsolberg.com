import type { VimeoPlayerOptions } from '@vimeo/player';
import Player from '@vimeo/player';

export const vimeoPlayer = function () {
  const instances = document.querySelectorAll('[vimeo-element="instance"]');

  instances.forEach((instance) => {
    const playerEl = instance.querySelector('[vimeo-element="player"]');
    const url = playerEl.getAttribute('vimeo-url');
    if (!url) return;

    const options: VimeoPlayerOptions = {
      url: url,
      title: false,
      controls: false,
      muted: true,
      allow: 'autoplay',
      loop: true,
      loader: false,
    };

    const player = new Player(playerEl, options);

    instance.addEventListener('mouseenter', () => {
      player.getPaused().then((paused) => {
        if (!paused) return;
        playerEl.classList.toggle('is-playing');
        player.play();
      });
    });

    instance.addEventListener('mouseleave', () => {
      player.getPaused().then((paused) => {
        if (paused) return;
        playerEl.classList.toggle('is-playing');
        player.pause();
      });
    });
  });
};

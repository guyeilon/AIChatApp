import lottie, { AnimationItem } from 'lottie-web';
import { Animation } from 'types/Lottie';
import React from 'react';

const useAnimation = (animationData: Animation) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let animation: AnimationItem;
    if (ref.current) {
      animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData,
      });
    }
    return () => {
      if (animation) animation.destroy();
    };
  }, [animationData]);

  return ref;
};

export default useAnimation;

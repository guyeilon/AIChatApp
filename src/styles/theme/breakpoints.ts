export const screenSize = {
  desktop: '1920px',
  laptop: '1380px',
  mobile: '760px',
};

const breakpoints = {
  min: {
    desktop: `(min-width: ${screenSize.desktop})`,
    laptop: `(min-width: ${screenSize.laptop})`,
    mobile: `(min-width: ${screenSize.mobile})`,
  },
  max: {
    desktop: `(max-width: ${screenSize.desktop})`,
    laptop: `(max-width: ${screenSize.laptop})`,
    mobile: `(max-width: ${screenSize.mobile})`,
  },
};

export default breakpoints;

const isHost = regex => (/* istanbul ignore next */ host = window.location.host) =>
  host.match(regex) !== null;

export const isFacebook = isHost(/^www\.facebook\.com$/);
export const isYouTube = isHost(/^www\.youtube\.com$/);

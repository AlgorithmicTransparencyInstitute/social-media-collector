const getLinearAdAdvertiserUrl = ({
  instreamVideoAdRenderer: {
    playerOverlay: {
      instreamAdPlayerOverlayRenderer: {
        visitAdvertiserRenderer: {
          buttonRenderer: {
            text: {
              runs: [{ text }]
            }
          }
        }
      }
    }
  }
}) => text;

export default getLinearAdAdvertiserUrl;

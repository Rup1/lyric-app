import React from "react";
import { Link } from "react-router-dom";

const Track = props => {
  const { track } = props;
  const style = {
    trackRating: {
      width: `${track.track_rating}%`
    }
  };
  return (
    <div className="slds-col slds-size_1-of-2 slds-m-bottom_medium">
      <article class="slds-card">
        <div class="slds-grid slds-einstein-header slds-card__header">
          <header class="slds-media slds-media_center slds-has-flexi-truncate">
            <div class="slds-grid slds-grid_vertical-align-center slds-size_3-of-4 slds-medium-size_2-of-3">
              <div class="slds-media__body slds-p-vertical-large">
                <h2
                  class="slds-truncate slds-text-heading_medium"
                  title={track.artist_name}
                >
                  <a
                    href="javascript:void(0);"
                    class="slds-card__header-link"
                    title={track.artist_name}
                  >
                    <span class="slds-text-heading_large">
                      {track.artist_name}
                    </span>
                  </a>
                </h2>
              </div>
            </div>
            <div class="slds-einstein-header__figure slds-size_1-of-4 slds-medium-size_1-of-3" />
          </header>
        </div>
        <div class="slds-card__body slds-clearfix slds-card__body_inner slds-p-vertical_large slds-text-heading_medium">
          <div class="slds-col slds-float_left slds-size_2-of-3">
            <div className="slds-m-bottom_xxsmall">
              <strong>
                <i className="fas fa-play" /> Track
              </strong>
              : <span>{track.track_name}</span>
            </div>
            <br />
            <div className="slds-m-bottom-medium">
              <strong>
                <i className="fas fa-compact-disc" /> Album
              </strong>
              : <span className="slds-m-top_large">{track.album_name}</span>
            </div>
          </div>
          <div className="slds-col slds-float_right slds-size_1-of-3">
            <h1>Track Rating:</h1>
            <div
              class="slds-progress-bar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={track.track_rating}
              role="progressbar"
            >
              <span class="slds-progress-bar__value" style={style.trackRating}>
                <span class="slds-assistive-text">
                  Rating: {track.track_rating}%
                </span>
              </span>
            </div>
            <span className="slds-text-heading_large track-rating">
              {track.track_rating}
            </span>
          </div>
        </div>
        <footer class="slds-card__footer slds-text-heading_medium">
          <a class="slds-card__footer-action" href="javascript:void(0);">
            <Link to={`lyrics/track/${track.track_id}`} className="test">
              <i className="fas fa-chevron-right" /> View Lyrics
            </Link>
            <span class="slds-assistive-text">Einstein Recommendations</span>
          </a>
        </footer>
      </article>
    </div>
  );
};

export default Track;

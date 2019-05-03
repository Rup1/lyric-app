import React, { Component } from "react";
import axios from "axios";
import Spinner from "../layouts/Spinner";
import { Link } from "react-router-dom";

export default class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {},
    related: null
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          this.props.match.params.id
        }&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        console.log(res.data);
        this.setState({ lyrics: res.data.message.body.lyrics });
        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${
            this.props.match.params.id
          }&apikey=${process.env.REACT_APP_MM_KEY}`
        );
      })
      .then(res => {
        this.setState({ track: res.data.message.body.track });
        console.log(res.data);
        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/artist.related.get?artist_id=${
            res.data.message.body.track.artist_id
          }&page_size=2&page=1&apikey=${process.env.REACT_APP_MM_KEY}`
        );
      })
      .then(res => {
        console.log(res.data.message.body.artist_list[0].artist.artist_name);
        this.setState({
          related: res.data.message.body.artist_list[0].artist.artist_name
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { track, lyrics, related } = this.state;
    console.log(track);
    console.log(related);
    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          {related}
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go back
          </Link>
          <div className="slds-card">
            <div className="slds-grid slds-einstein-header slds-card__header">
              <h1 className="slds-text-heading_large">
                {track.track_name} by{" "}
                <span className="text-secondary">{track.artist_name}</span>
              </h1>
            </div>
            <div className="card-body">
              <div className="slds-text-heading_medium slds-text-align_center">
                {lyrics.lyrics_body}
              </div>
            </div>
          </div>

          <div className="slds-box slds-grid slds-gutters slds-m-top_large slds-size_1-of-1">
            <div className="slds-col slds-size_1-of-3">
              <ul className="slds-has-dividers_around-space slds-text-heading_large">
                <li className="slds-item">
                  <strong>Album ID</strong>: {track.album_id}
                </li>
                <li className="slds-item">
                  <strong>Song Genre</strong>:
                  {
                    track.primary_genres.music_genre_list[0].music_genre
                      .music_genre_name
                  }
                </li>
                <li className="slds-item">
                  <strong>Explicit Words</strong>:{" "}
                  {track.explicit === 0 ? "no" : "yes"}
                </li>
              </ul>
            </div>

            <div className="slds-col slds-size_2-of-3">
              <ul className="slds-has-dividers_around-space slds-text-heading_large">
                <li className="slds-item">
                  <strong>Album ID</strong>: {track.album_id}
                </li>
                <li className="slds-item">
                  <strong>Song Genre</strong>:
                  {
                    track.primary_genres.music_genre_list[0].music_genre
                      .music_genre_name
                  }
                </li>
                <li className="slds-item">
                  <strong>Explicit Words</strong>:{" "}
                  {track.explicit === 0 ? "no" : "yes"}
                </li>
              </ul>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

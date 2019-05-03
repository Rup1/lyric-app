import React, { Component } from "react";
import axios from "axios";
import Illustration from "../layouts/Illustration";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    trackTitle: ""
  };
  findTrack = (dispatch, e) => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
          this.state.trackTitle
        }&page_size=10&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list
        });
        this.setState({ trackTitle: "" });
      })
      .catch(err => console.log(err));
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="search-song card card-body mb-4 p-4">
              <Illustration />
              <h1 className="display-4 text-center">
                <i className="fas fa-music" /> Search for a song
              </h1>
              <p className="lead text-center">Get the lyrics for any song</p>
              <form onSubmit={this.findTrack.bind(this, dispatch)}>
                <div className="slds-form-element">
                  <label
                    className="slds-form-element__label"
                    htmlFor="form-element-01"
                  />
                  <div className="slds-form-element__control">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Song Title..."
                      name="trackTitle"
                      value={this.state.trackTitle}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <button
                  className="slds-text-heading_medium slds-p-around_x-small slds-size_2-of-2 slds-m-top_medium slds-button slds-button_brand"
                  type="submit"
                >
                  Get Track Lyrics
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;

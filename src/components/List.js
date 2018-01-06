/* eslint-disable */


import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';


export default class List extends Component {
  // static propTypes = {
  //   todos: PropTypes.instanceOf(Immutable.List).isRequired,
  //   filter: PropTypes.string.isRequired
  // };

  handleCheck(index) {
    this.props.toggleChecked(index);
  }

  handleDestroy(index) {
    this.props.deleteTodo(index);
  }

  render() {
    const {tracks} = this.props;
    
    if (tracks.length > 0) {
      const trackItems = tracks.map((track, i) => {
        console.log(`what is track: `, track);
        const index = i + 1;
        return (
          <ListItem index={index} track={track} />
        );
      });

      return (
        <div>
          <h3>Songs Sampled by Kanye West</h3>
          <table className="table table-striped hover">
            <thead>
              {tracks}
            </thead>
            <tbody>
              {trackItems}
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <div>Track List</div>
    );
  }
}


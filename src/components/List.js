/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';
import ListItem from './ListItem.js'
import TransitionGroup from 'react-transition-group/TransitionGroup';


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
    const {search} = this.props
    const {tracks} = search
    if (tracks.length > 0) {
      const trackItems = tracks.map((track, i) => {
        const index = i + 1;
        return (
          <ListItem key={i} index={index} track={track} list={`search`} {...this.props}/>
        );
      });

      return (
        <div>
          <h4>Here are some songs <span style={{color: 'coral'}}>{this.props.search.searchedArtist}</span> sampled from </h4>
          <table className="table table-striped table-hover">
            <thead>
            <tr>
              <th scope="col">Artist</th>
              <th scope="col">Song Name</th>          
              </tr>
            </thead>
            <tbody>
                {trackItems}
            </tbody>
          </table>
        </div>
      );
    }

    return null
  }
}


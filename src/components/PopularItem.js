/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import styles from '../styles/popularitem.scss';

export default class PopularItem extends Component {

  render() {
    const { artist, clickHandler } = this.props
    return (
      <span className="popular__searchitem">
        <img
          className={styles.popularsearch__item}
          src={this.props.src}
          onClick={() => {this.props.clickHandler(artist)}}
        />
      </span>
    );
  }
}


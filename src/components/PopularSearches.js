/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import PopularItem from './PopularItem'
import styles from '../styles/popularsearches.scss';

export default class PopularSearches extends Component {
  render() {
    return (
      <div className={styles.popular__searches}>
        <h2 style={{color: '#FFFFFF'}}>Popular Searches</h2>
          <div style={{padding: '10px 10px'}}>
            <PopularItem 
                src="https://c1.staticflickr.com/5/4709/40402693602_d47a8ee26b_o.png"
                artist={`Kanye West`}
                clickHandler={this.props.clickHandler}
            />
            <PopularItem 
              src="https://c1.staticflickr.com/5/4760/25575504517_167e1355a3_o.png"
              artist={`Schoolboy Q`}
              clickHandler={this.props.clickHandler}
            />
            <PopularItem 
              src="https://c1.staticflickr.com/5/4747/40446520501_5a08470c83_o.png"
              artist={`Kendrick Lamar`}
              clickHandler={this.props.clickHandler}
            />
          </div>
      </div>
    );
  }
}


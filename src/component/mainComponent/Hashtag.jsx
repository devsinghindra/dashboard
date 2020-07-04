import React from 'react';
import Sidebar from './sidebar/sidebar';
import styles from './component.module.scss';

function Hashtag() {
  
    return(
      <div className={styles.hashtag_grid}>
        <div className = {styles.sidebar}>
          <Sidebar />
        </div>
        <div className = {styles.hashtag_area}>
          <p> Hashtag Area (It contain hashtag stats) </p>
        </div>
      </div>
    );
  }
  
  export default Hashtag;
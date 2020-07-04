import React from 'react';
import Sidebar from './sidebar/sidebar';
import styles from './component.module.scss';

function Overall() {
   
    return (
      <div className={styles.overall_grid}>
      <div class ={styles.sidebar}>
        <Sidebar />
      </div>
      <div class = {styles.overall_area}>
        <p> Overall Area (It contain today stats) </p>
      </div>
    </div>
    );
  }
   
  export default Overall;
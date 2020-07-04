import React from 'react';
import Sidebar from './sidebar/sidebar';
import Header from './Header/Header';
import styles from './component.module.scss';
import Card from './Card/Card';

function Dashboard() {
   
    return (
      <div className={styles.dashboard_grid}>
        <div className = {styles.sidebar}>
          <Sidebar />
        </div> 
        <div className = {styles.dashboard_area}>
           <div><Header /></div>
           <div class={styles.detail}>
             <div><Card no="5000" text="No of tweets"/></div>
             <div><Card no="4" text="Emtions"/></div>
             <div><Card no="2" text="Scoring Criteria"/></div>
           </div>
           <div className={styles.graph}>
           </div>
        </div>
      </div>
    );
}
   
export default Dashboard;
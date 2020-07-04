import React from 'react';
import Text from './Text';
import styles from './header.module.scss';

function Header() {
   
    return (
     <div className={styles.header}>
         <p><Text /></p>
     </div>
    );
}
   
export default Header;
import React from 'react';
import Text from './Text';
import styles from './style.module.scss';

function Card(props) {

    return (
        <div>
            <p className={styles.no}> {props.no}</p>
            <p className={styles.text}> {props.text}</p>
        </div>
    );
}

export default Card;
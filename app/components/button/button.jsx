import React from 'react';

import styles from './button.css';

const Button = ({ name }) => {
    return (
        <div className={styles.button}>Welcome {name}</div>
    );
}

export default Button;
import React from 'react';

import styles from './typing-indicator.css';

const TypingIndicator = () => {
    return (
        <div className={styles.typingIndicator}>
            <div className={styles.typingIndication}></div>
            <div className={styles.typingIndication}></div>
            <div className={styles.typingIndication}></div>
        </div>
    );
}

export default TypingIndicator;
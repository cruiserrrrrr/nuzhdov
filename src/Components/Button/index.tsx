import React from 'react';
import styles from './index.module.scss';

interface IButton {
    text: string;
    onClick: () => void;
    color?: string;
    size?: string;
}

const Button = (props: IButton) => {

    const {
        text = '',
        onClick = () => { },
        color = '',
        size = ''
    } = props;

    return (
        <div>
            <button
                onClick={onClick}
                className={`${styles.button} ${styles[color]} ${styles[size]}`}
            >
                {text}
            </button>
        </div>
    )
}

export default Button;
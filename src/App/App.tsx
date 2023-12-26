import React from 'react';
import styles from "./index.module.scss"
import Home from '../Components/Home';
const App: React.FC = () => {

    return (
        <div className={styles.app}>
            <Home/>
        </div>
    );
};

export default App;
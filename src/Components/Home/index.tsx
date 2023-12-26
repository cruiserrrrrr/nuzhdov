import React, { Component } from "react";
import styles from "./index.module.scss";

interface IState {
    text: string;
    displayedText: string;

}
class Home extends Component<IState> {
    typingInterval: number | undefined;
    state: IState = {
        text: '',
        displayedText: '',
    };
    constructor(props: any) {
        super(props);
        this.state = {
            text: 'NUZHDOV',
            displayedText: '',
        };
    }

    componentDidMount() {
         setTimeout(() => {
            this.startTyping();
        }, 1000);
    }

    startTyping = () => {
        const { text } = this.state;
        let index = 0;

        this.typingInterval = setInterval(() => {
            if (index < text.length) {
                this.setState((prevState) => ({
                    displayedText: prevState.displayedText + text.charAt(index),
                }));
                index++;
            } else {
                clearInterval(this.typingInterval);
            }
        }, 300);
    };

    // componentWillUnmount() {
    //     clearInterval(this.typingInterval);
    // }

    render() {
        const { displayedText } = this.state;
        return (
            <div className={styles.home}>
                <div className={styles.home_wrapper}>
                    {/* <h1 className={styles.title}>{displayedText}</h1> */}
                    <h1 className={styles.title}>NUZHDOV</h1>
                </div>
            </div>
        )
    }
}

export default Home;

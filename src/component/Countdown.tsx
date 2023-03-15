import React from 'react';
import {t} from "i18next";
import CircularProgress from '@mui/material/CircularProgress';

interface countdownState {
    seconds: number;
}

interface countdownProps {
}

class Countdown extends React.Component<countdownProps, countdownState> {
    private interval: NodeJS.Timer | undefined;
    constructor(props : countdownProps) {
        super(props);
        this.state = {
            seconds: 0,
        };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
       setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <section className="content">
                {t('seconds')}: {this.state.seconds}
                <CircularProgress variant="determinate" value={30} />
            </section>
        );
    }
}

export default Countdown;
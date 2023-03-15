import React from 'react';
import './App.css';
import Countdown from './component/Countdown';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Button from '@mui/material/Button';
function App() {
    return (
        <div className="App">
            <Header />
            <Countdown />
            <Button variant="contained">Start</Button>
            <Footer />
        </div>
    );
}

export default App;

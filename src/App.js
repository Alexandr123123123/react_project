import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Battle from './components/Battle';
import Popular from './components/Popular';
import NotFound from './components/NotFound';
import './App.css';
import { useParams } from 'react-router-dom';








function App() {
    // const [activePage, setActivePage] = React.useState('Home');
    const [activePage, setActivePage] = React.useState(
        window.location.pathname,
    );
    return (
        <div className="App">
            <div className="abc">
                <Navigation
                    activePage={activePage}
                    setActivePage={setActivePage}
                />
                <Routes>
                    <Route path="/" element={<Home setActivePage={setActivePage}/>}></Route>
                    <Route path="/battle" element={<Battle />}></Route>
                    <Route path="/popular" element={<Popular />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;

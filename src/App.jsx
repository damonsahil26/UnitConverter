import './App.css'
import LengthForm from './components/LengthForm'
import { useState } from "react";
import WeightForm from './components/WeightForm';
import TempForm from './components/TempForm';

function App() {
    const [currentTab, setActiveTab] = useState("lengthTab");

    var setCurrentTabAsLength = () => {
        clearActiveClass();
        document.getElementById("lengthTab").classList.add('active');
        setActiveTab("lengthTab");
    };

    var setCurrentTabAsWeight = () => {
        clearActiveClass();
        document.getElementById("weightTab").classList.add('active');
        setActiveTab("weightTab");
    };

    var setCurrentTabAsTemp = () => {
        clearActiveClass();
        document.getElementById("tempTab").classList.add('active');
        setActiveTab("tempTab");
    };

    var clearActiveClass = () => {
        document.getElementById("lengthTab").classList.remove('active');
        document.getElementById("weightTab").classList.remove('active');
        document.getElementById("tempTab").classList.remove('active');
    }

    return (
        <>
            <div className="form-container">
                <h1 className="gloria-hallelujah-regular title">Unit Convertor</h1>
                <div className="tab playpen-sans-cursive">
                    <button id="lengthTab" className="tablinks active" onClick={setCurrentTabAsLength}>Length</button>
                    <button id="weightTab" className="tablinks" onClick={setCurrentTabAsWeight}>Weight</button>
                    <button id="tempTab" className="tablinks" onClick={setCurrentTabAsTemp}>Temperature</button>
                </div>
                <br />
                {currentTab == "lengthTab" ? <LengthForm /> : null}
                {currentTab == "weightTab" ? < WeightForm /> : null}
                {currentTab == "tempTab" ? <TempForm /> : null}
            </div>
        </>
    )
}

export default App

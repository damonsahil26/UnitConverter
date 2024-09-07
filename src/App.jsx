import './App.css'
import LengthForm from './components/LengthForm'
import { useState } from "react";
import WeightForm from './components/WeightForm';
import TempForm from './components/TempForm';
import ResultPage from './components/ResultPage';

function App() {
    const [currentTab, setActiveTab] = useState("lengthTab");
    const [showResult, setResult] = useState(false);
    const [convertObj, setConvertVal] = useState(null);

    const handleShowResultChange = (newState) => {
        clearActiveClass();
        setActiveTab("");
        setResult(newState);
    };

    const handleConvertChange = (newState) => {
        setConvertVal(newState);
    };

    var setCurrentTabAsLength = () => {
        clearActiveClass();
        document.getElementById("lengthTab").classList.add('active');
        setResult(false);
        setActiveTab("lengthTab");
    };

    var setCurrentTabAsWeight = () => {
        clearActiveClass();
        document.getElementById("weightTab").classList.add('active');
        setResult(false);
        setActiveTab("weightTab");
    };

    var setCurrentTabAsTemp = () => {
        clearActiveClass();
        document.getElementById("tempTab").classList.add('active');
        setResult(false);
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
                {currentTab == "lengthTab" ? <LengthForm updateResultStateChange={handleShowResultChange} updateConvertChange={ handleConvertChange } /> : null}
                {currentTab == "weightTab" ? < WeightForm updateResultStateChange={handleShowResultChange} updateConvertChange={handleConvertChange} /> : null}
                {currentTab == "tempTab" ? <TempForm updateResultStateChange={handleShowResultChange} updateConvertChange={handleConvertChange} /> : null}
                {showResult ? <ResultPage userVal={convertObj.unitValue} from={convertObj.lengthFrom} to={convertObj.lengthTo} /> : null}
            </div>
        </>
    )
}

export default App

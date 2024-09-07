export default function ResultPage({ userVal, from, to }) {
    const conversionFactors = {
        kilometer: 1000,
        meter: 1,
        centimeter: 0.01,
        millimeter: 0.001,
        micrometer: 1e-6,
        nanometer: 1e-9,
        mile: 1609.34,
        yard: 0.9144,
        foot: 0.3048,
        inch: 0.0254,
        nauticalmile: 1852,
        tonne: 1000,
        kilogram: 1,
        gram: 0.001,
        milligram: 1e-6,
        microgram: 1e-9,
        imperialton: 1016.05,
        uston: 907.185,
        stone: 6.35029,
        pound: 0.453592,
        ounce: 0.0283495
    };

    var conversionFrom = from;
    var outputValue = 0;
    if (conversionFrom !== 'degreecelsius' && conversionFrom !== 'fahrenheit' && conversionFrom !== 'kelvin') {
        const valueIn = userVal * conversionFactors[from];

        // Convert from meters to the target unit
        outputValue = valueIn / conversionFactors[to];
    }
    else {

        if (from === to) {
            outputValue = userVal;
        }
        else {
            switch (conversionFrom) {
                case 'degreecelsius':
                    if (to === 'fahrenheit') {
                        outputValue = (userVal * 9 / 5) + 32;  // Celsius to Fahrenheit
                    } else if (to === 'kelvin') {
                        outputValue = userVal + 273.15;      // Celsius to Kelvin
                    }
                    break;

                case 'fahrenheit':
                    if (to === 'degreecelsius') {
                        outputValue = (userVal - 32) * 5 / 9;  // Fahrenheit to Celsius
                    } else if (to === 'kelvin') {
                        outputValue = (userVal - 32) * 5 / 9 + 273.15;  // Fahrenheit to Kelvin
                    }
                    break;

                case 'kelvin':
                    if (to === 'degreecelsius') {
                        outputValue = userVal - 273.15;      // Kelvin to Celsius
                    } else if (to === 'fahrenheit') {
                        outputValue = (userVal - 273.15) * 9 / 5 + 32;  // Kelvin to Fahrenheit
                    }
                    break;
            }

        }
    }

    return <>
        <div className="result-container">
            <label className="playpen-sans-result">Result of your calculation is : </label>
            <br />
            <br />
            <label className="playpen-sans-result result">{userVal} {from} = {outputValue} {to} </label>
            <br />
            <br />
            <br />
            <button type="button" className="button">Reset</button>
        </div>
    </>
}
import './App.css'
import Form from './components/form'

function App() {

    return (
        <>
            <div className="form-container">
                <h1 className="gloria-hallelujah-regular title">Unit Convertor</h1>
                <div className="tab playpen-sans-cursive">
                    <button className="tablinks active">Length</button>
                    <button className="tablinks">Weight</button>
                    <button className="tablinks">Temperature</button>
                </div>
                <br />
                <Form />
            </div>
        </>
    )
}

export default App

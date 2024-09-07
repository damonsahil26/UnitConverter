import { useForm } from "react-hook-form"


export default function TempForm({ updateResultStateChange, updateConvertChange }) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        showResultPage(data);
        console.log(data);
    }
    const showResultPage = (data) => {
        updateConvertChange({ unitValue: data.unitValue, lengthFrom: data.tempFrom, lengthTo: data.tempTo, result: 0 });
        updateResultStateChange(true);
    };


    return (
        <form className="form playpen-sans-cursive" onSubmit={handleSubmit(onSubmit)}>
            <label className="">Enter the temperature to convert : </label>
            <br />
            <input className="inputBox" type="number" {...register("unitValue", { required: true, valueAsNumber : true })} />
            {errors.unitValue && <span className="errorMessage"><br /> * This field is required</span>}
            <br />
            <br />
            <label className="">Unit to convert from : </label>
            <br />
            <select id="temperatureUnitConvertFrom" {...register("tempFrom")}>
                <option value="degreecelsius">Degree Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
            </select>
            <br />
            <br />
            <label className="">Unit to convert to : </label>
            <br />
            <select id="temperatureUnitConvertTo" {...register("tempTo")}>
                <option value="degreecelsius">Degree Celsius</option>
                <option value="fahrenheit" selected>Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
            </select>
            <br />
            <br />
            <button type="submit" className="button">Convert</button>
        </form>
    )
}
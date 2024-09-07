import { useForm } from "react-hook-form"


export default function TempForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => console.log(data)


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
                <option value="fehrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
            </select>
            <br />
            <br />
            <label className="">Unit to convert to : </label>
            <br />
            <select id="temperatureUnitConvertTo" {...register("tempTo")}>
                <option value="degreecelsius">Degree Celsius</option>
                <option value="fehrenheit" selected>Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
            </select>
            <br />
            <br />
            <button type="submit" className="button">Convert</button>
        </form>
    )
}
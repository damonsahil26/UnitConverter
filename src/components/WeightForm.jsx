import { useForm } from "react-hook-form"


export default function WeightForm({ updateResultStateChange, updateConvertChange }) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        showResultPage(data);
        console.log(data);
    }
    const showResultPage = (data) => {
        updateConvertChange({ unitValue: data.unitValue, lengthFrom: data.weightFrom, lengthTo: data.weightTo, result: 0 });
        updateResultStateChange(true);
    };


    return (
        <form className="form playpen-sans-cursive" onSubmit={handleSubmit(onSubmit)}>
            <label className="">Enter the weight to convert : </label>
            <br />
            <input type="number" className="inputBox" {...register("unitValue", { required: true, valueAsNumber: true })} />
            {errors.unitValue && <span className="errorMessage"><br /> * This field is required</span>}
            <br />
            <br />
            <label className="">Unit to convert from : </label>
            <br />
            <select id="weightUnitConvertFrom" {...register("weightFrom")}>
                <option value="tonne">Tonne</option>
                <option value="kilogram">Kilogram</option>
                <option value="gram">Gram</option>
                <option value="milligram">Milligram</option>
                <option value="microgram">Microgram</option>
                <option value="imperialton">Imperial ton</option>
                <option value="uston">US ton</option>
                <option value="stone">Stone</option>
                <option value="pound">Pound</option>
                <option value="ounce">Ounce</option>
            </select>
            <br />
            <br />
            <label className="">Unit to convert to : </label>
            <br />
            <select id="weightUnitConvertTo" {...register("weightTo")}>
                <option value="tonne">Tonne</option>
                <option value="kilogram" selected>Kilogram</option>
                <option value="gram">Gram</option>
                <option value="milligram">Milligram</option>
                <option value="microgram">Microgram</option>
                <option value="imperialton">Imperial ton</option>
                <option value="uston">US ton</option>
                <option value="stone">Stone</option>
                <option value="pound">Pound</option>
                <option value="ounce">Ounce</option>
            </select>
            <br />
            <br />
            <button type="submit" className="button">Convert</button>
        </form>
    )
}
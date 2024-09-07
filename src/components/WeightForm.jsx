import { useForm } from "react-hook-form"


export default function WeightForm() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)


    return (
        <form className="form playpen-sans-cursive" onSubmit={handleSubmit(onSubmit)}>
            <label className="">Enter the weight to convert : </label>
            <br />
            <input className="inputBox" {...register("unit")} />
            <br />
            <br />
            <label className="">Unit to convert from : </label>
            <br />
            <select id="weightUnitConvertFrom">
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
            <select id="weightUnitConvertTo">
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
            <button type="submit" className="button">Convert</button>
        </form>
    )
}
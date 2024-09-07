import { useForm } from "react-hook-form"


export default function Form() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)


    return (
        <form className="form playpen-sans-cursive" onSubmit={handleSubmit(onSubmit)}>
            <label className="">Enter the length to convert : </label>
            <br />
            <input className="inputBox" {...register("unit")} />
            <br />
            <br />
            <label className="">Unit to convert from : </label>
            <br />
            <select id="lengthUnitConvertFrom">
                <option value="kilometer">Kilometer</option>
                <option value="meter">Meter</option>
                <option value="centimeter">Centimeter</option>
                <option value="millimeter">Millimeter</option>
                <option value="micrometer">Micrometer</option>
                <option value="nanometer">Nanometer</option>
                <option value="mile">Mile</option>
                <option value="yard">Yard</option>
                <option value="foot">Foot</option>
                <option value="inch">Inch</option>
                <option value="nauticalmile">Nautical Mile</option>
            </select>
            <br />
            <br />
            <label className="">Unit to convert to : </label>
            <br />
            <select id="lengthUnitConvertTo">
                <option value="kilometer">Kilometer</option>
                <option value="meter">Meter</option>
                <option value="centimeter">Centimeter</option>
                <option value="millimeter">Millimeter</option>
                <option value="micrometer">Micrometer</option>
                <option value="nanometer">Nanometer</option>
                <option value="mile">Mile</option>
                <option value="yard">Yard</option>
                <option value="foot">Foot</option>
                <option value="inch">Inch</option>
                <option value="nauticalmile">Nautical Mile</option>
            </select>
            <br />
            <br />
            <button type="submit" className="button">Convert</button>
        </form>
    )
}
import { useForm } from "react-hook-form"


export default function LengthForm({ updateResultStateChange, updateConvertChange }) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        showResultPage(data);
        console.log(data);
    }
    const showResultPage = (data) => {
        updateConvertChange({ unitValue: data.unitValue, lengthFrom: data.lengthFrom, lengthTo : data.lengthTo, result : 0});
        updateResultStateChange(true);
    };

    return (
        <form className="form playpen-sans-cursive" onSubmit={handleSubmit(onSubmit)}>
            <label className="">Enter the length to convert : </label>
            <br />
            <input className="inputBox" type="number" {...register("unitValue", { required: true, valueAsNumber: true })} />
            {errors.unitValue && <span className="errorMessage"><br /> * This field is required</span>}
            <br />
            <br />
            <label className="">Unit to convert from : </label>
            <br />
            <select id="lengthUnitConvertFrom" {...register("lengthFrom")}>
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
            <select id="lengthUnitConvertTo" {...register("lengthTo")}>
                <option value="kilometer">Kilometer</option>
                <option value="meter" selected>Meter</option>
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
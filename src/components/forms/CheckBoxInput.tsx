import React, {useState} from 'react';
import Image from "next/image";
import CheckBoxSVG from "@/assets/svgs/CheckBoxSVG.svg"

interface Props {
    label: string,
    width?: number,
    height?: number

}


const CheckboxInput = ({label, width = 28, height = 28}: Props) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxClick = () => {
        setChecked(!checked);
    };

    return (
        <button type="button" className="flex items-center cursor-pointer"
             onClick={handleCheckboxClick}>
            <div
                className={`rounded text-purple-600 bg-purple-${checked ? '950' : 'transparent border'}  border-gray-10 focus:ring-purple-500 flex justify-center items-center`}
                style={{height: height, width: width, background: checked ? "#652D90" : "#FFFFFF"}}
            >
                {checked && <Image src={CheckBoxSVG} alt="CheckBox"/>}
            </div>
            <h5 className="ml-3 block text-md leading-6 text-gray-700">
                {label}
            </h5>
        </button>
    );
};

export default CheckboxInput;

"use client";

import Image from "next/image";
import {CustomButtonProps} from "@/types";

const CustomButton = ({title, containerStyles, handleClick, isDisabled, btnType}: CustomButtonProps) => {
	return (
		<button
			disabled={isDisabled}
			type={btnType}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}>
			<span className="flex-1">{title}</span>
		</button>
	)
}

export default CustomButton;

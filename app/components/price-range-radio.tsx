import type { UseFormRegister } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import type { FormSchema } from "./form";
import { formatPrice } from "../utils/formatPrice";

type PriceRangeRadioProps = {
	isChecked: boolean;
	title: string;
	register: UseFormRegister<FormSchema>;
	displayValue: string;
};

export function PriceRangeRadio({
	isChecked,
	title,
	register,
	displayValue,
}: PriceRangeRadioProps) {
	return (
		<label
			className={twMerge(
				"w-[284px] rounded-2xl border-zinc-200 border-[1px] pl-6 py-6 shadow-sm cursor-pointer",
				isChecked
					? "outline outline-indigo-600 outline-[2px]"
					: "hover:border-indigo-300",
			)}
		>
			<div className="flex items-center gap-3">
				<input
					type="radio"
					value={title}
					{...register("projectBudgetRange")}
					className="form-radio checked:bg-indigo-700 size-6 focus:ring-transparent cursor-pointer"
				/>
				<span className="text-lg">{displayValue}</span>
			</div>
		</label>
	);
}

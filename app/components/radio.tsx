import Image from "next/image";
import type { UseFormRegister } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import type { FormSchema } from "./form";

type RadioProps = {
	isChecked: boolean;
	title: FormSchema["interestedService"] | FormSchema["projectBudgetRange"];
	src: string;
	register: UseFormRegister<FormSchema>;
	name: "interestedService" | "projectBudgetRange";
};

export function Radio({ isChecked, title, src, register, name }: RadioProps) {
	return (
		<label
			className={twMerge(
				"w-[284px] rounded-2xl border-zinc-200 border-[1px] pl-6 py-6 shadow-sm cursor-pointer",
				isChecked
					? "outline outline-indigo-600 outline-[2px]"
					: "hover:border-indigo-300",
			)}
		>
			<input
				type="radio"
				className="hidden"
				{...register(name)}
				value={title}
			/>

			<div className="flex items-center gap-3">
				<div className="flex justify-center items-center size-16 rounded-full bg-indigo-200">
					<Image
						className="drop-shadow-[0_4px_6px_rgba(79,70,229,0.5)] size-[2.25rem]"
						src={src}
						alt={title}
						width={0}
						height={0}
					/>
				</div>
				<span className="text-lg">{title}</span>
			</div>
		</label>
	);
}

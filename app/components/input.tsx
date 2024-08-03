import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { FormSchema } from "./form";
import type { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import type { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
	label: string;
	register: UseFormRegister<FormSchema>;
	name: keyof FormSchema;
	errors: FieldErrors<FormSchema>;
	icon: LucideIcon;
	placeholder: string;
}

export function Input({
	label,
	register,
	name,
	errors,
	icon: Icon,
	placeholder,
	...props
}: InputProps) {
	return (
		<div className="flex flex-col gap-4">
			<label htmlFor="name" className="text-indigo-950 text-lg font-bold">
				{label}
			</label>
			<div
				className={twMerge(
					"group relative w-[284px] rounded-[46px] shadow-sm border-zinc-200 border-[1px] p-5 focus-within:outline outline-indigo-600 outline-1",
					errors[name] && "border-red-500 focus-within:outline-red-500",
				)}
			>
				<input
					type="text"
					{...register(name)}
					placeholder={placeholder}
					{...props}
					className="w-[90%] text-lg focus:outline-none"
				/>

				<Icon
					size={24}
					className={twMerge(
						"absolute top-1/2 right-4 -translate-y-1/2 text-zinc-400 group-focus-within:text-indigo-600",
						errors[name] && "group-focus-within:text-red-500",
					)}
				/>
			</div>
			{errors[name] && (
				<p className="text-red-500 text-sm">{errors[name]?.message}</p>
			)}
		</div>
	);
}

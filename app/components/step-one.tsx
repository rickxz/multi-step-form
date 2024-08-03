import { Building, Mail, Smartphone, User } from "lucide-react";
import { Input } from "./input";
import { useFormContext } from "react-hook-form";
import type { FormSchema } from "./form";
import { maskPhoneNumber } from "../utils/masks";

export function StepOne() {
	const methods = useFormContext<FormSchema>();

	return (
		<>
			<div className="flex gap-7">
				<Input
					label="Name"
					register={methods.register}
					name="name"
					errors={methods.formState.errors}
					icon={User}
					placeholder="John Carter"
				/>

				<Input
					label="Email"
					register={methods.register}
					name="email"
					errors={methods.formState.errors}
					icon={Mail}
					placeholder="Email address"
				/>
			</div>

			<div className="flex gap-7">
				<Input
					label="Phone Number"
					register={methods.register}
					name="phone"
					errors={methods.formState.errors}
					icon={Smartphone}
					onChange={(e) =>
						methods.setValue("phone", maskPhoneNumber(e.target.value))
					}
					maxLength={16}
					placeholder="(123) 456 - 7890"
				/>

				<Input
					label="Company"
					register={methods.register}
					name="companyName"
					errors={methods.formState.errors}
					icon={Building}
					placeholder="Company name"
				/>
			</div>
		</>
	);
}

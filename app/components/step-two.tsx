import { useFormContext } from "react-hook-form";
import { Radio } from "./radio";
import type { FormSchema } from "./form";

export function StepTwo() {
	const { register, watch } = useFormContext<FormSchema>();

	const interestedServiceSelected = watch("interestedService");

	return (
		<>
			<div className="flex gap-7">
				<Radio
					register={register}
					name={"interestedService"}
					title={"Development"}
					src={"/development.svg"}
					isChecked={interestedServiceSelected === "Development"}
				/>
				<Radio
					register={register}
					name={"interestedService"}
					title={"Web Design"}
					src={"/web-design.svg"}
					isChecked={interestedServiceSelected === "Web Design"}
				/>
			</div>

			<div className="flex gap-7">
				<Radio
					register={register}
					name={"interestedService"}
					title={"Marketing"}
					src={"/marketing.svg"}
					isChecked={interestedServiceSelected === "Marketing"}
				/>
				<Radio
					register={register}
					name={"interestedService"}
					title={"Other"}
					src={"/other.svg"}
					isChecked={interestedServiceSelected === "Other"}
				/>
			</div>
		</>
	);
}

import { useFormContext } from "react-hook-form";
import { PriceRangeRadio } from "./price-range-radio";
import type { FormSchema } from "./form";

export function StepThree() {
	const { register, watch } = useFormContext<FormSchema>();

	const priceRangeSelected = watch("projectBudgetRange");

	return (
		<>
			<div className="flex gap-7">
				<PriceRangeRadio
					register={register}
					title={"5000-10000"}
					isChecked={priceRangeSelected === "5000-10000"}
					displayValue={"$5.000 - $10.000"}
				/>
				<PriceRangeRadio
					register={register}
					title={"10000-20000"}
					isChecked={priceRangeSelected === "10000-20000"}
					displayValue={"$10.000 - $20.000"}
				/>
			</div>

			<div className="flex gap-7">
				<PriceRangeRadio
					register={register}
					title={"20000-50000"}
					isChecked={priceRangeSelected === "20000-50000"}
					displayValue={"$20.000 - $50.000"}
				/>
				<PriceRangeRadio
					register={register}
					title={"50000+"}
					isChecked={priceRangeSelected === "50000+"}
					displayValue={"$50.000 +"}
				/>
			</div>
		</>
	);
}

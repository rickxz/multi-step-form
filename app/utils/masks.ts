export function maskPhoneNumber(phoneNumber: string) {
	const mask = phoneNumber.replace(/\D/g, "");
	return `(${mask.slice(0, 3)}) ${mask.slice(3, 6)} - ${mask.slice(6)}`;
}

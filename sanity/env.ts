export const apiVersion =
	process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-08-15';

export const dataset = assertValue(
	'production',
	'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
	'0h5t3665',
	'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
	if (v === undefined) {
		throw new Error(errorMessage);
	}

	return v;
}

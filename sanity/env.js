export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-10'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variables: NEXT_PUBLIC_SANITY_DATASET'
)
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variables: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_TOKEN,
  'Missing environment variables: NEXT_PUBLIC_SANITY_TOKEN'
)

export const useCdn = false

function assertValue(v = undefined, errorMessage) {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

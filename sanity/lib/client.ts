import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

if (!projectId) {
  console.warn('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable')
}

export const client = createClient({
  projectId: projectId || 'rtvu19w7', // Fallback to prevent build errors
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false, // Set to true for production
})

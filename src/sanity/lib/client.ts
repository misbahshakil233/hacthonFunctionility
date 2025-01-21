import { createClient } from 'next-sanity'

import { apiVersion,  } from '../env'

export const client = createClient({
  projectId:"w9qbrne9",
  dataset:"production",
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

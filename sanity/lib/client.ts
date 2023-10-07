import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, token } from '../env'

// Making queries

export const readClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export const writeClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
})

import config from '@payload-config'
import { getPayload as getPayloadInstance } from 'payload'

export const getPayload = async (): ReturnType<typeof getPayloadInstance> => {
  return getPayloadInstance({ config })
}

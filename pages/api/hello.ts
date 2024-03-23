// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDB from '@/utils/db'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  connectToDB()
  res.status(200).json({ name: 'Marzieh Monshizadeh' })
}

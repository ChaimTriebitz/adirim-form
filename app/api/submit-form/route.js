import { prismaClient } from '@/utils/prisma'

export async function POST(req) {
   try {
      const body = await req.json()
      const { personal, swimming, addOns } = body

      const created = await prismaClient.personal.create({
         data: {
            ...personal,
            swimming: {
               create: {
                  ...swimming,
               },
            },
            addsOn: {
               create: {
                  ...addOns,
                  amount_add_ons: Number(addOns.amount_add_ons),
               },
            },
         },
      })

      return Response.json({ success: true, data: created })
   } catch (error) {
      console.error('API error:', error)
      return Response.json({ success: false, error: error.message }, { status: 500 })
   }
}

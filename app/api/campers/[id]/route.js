import { prismaClient } from '@/utils/prisma'
import { revalidatePath } from 'next/cache'

export async function PUT(req, { params }) {
   try {
      const id = Number(params.id)
      const body = await req.json()

      const {
         size_add_ons,
         amount_add_ons,
         is_confirmed,
         signature,
         ...camperData
      } = body

      const updated = await prismaClient.camper.update({
         where: { id },
         data: {
            ...camperData,
            addsOn: {
               update: {
                  where: { camperId: id },
                  data: {
                     size_add_ons,
                     amount_add_ons,
                  },
               },
            },
            confirmation: {
               update: {
                  where: { camperId: id },
                  data: {
                     is_confirmed,
                     signature,
                  },
               },
            },
         },
      })
      revalidatePath('/dashboard')
      return Response.json({ success: true, data: updated })
   } catch (error) {
      console.error('PUT camper error:', error)
      return Response.json({ success: false, error: error.message }, { status: 500 })
   }
}

export async function DELETE(req, { params }) {
   try {
      const id = Number(params.id)

      // Delete related AddsOn and Confirmation records first
      await prismaClient.addsOn.deleteMany({ where: { camperId: id } })
      await prismaClient.confirmation.deleteMany({ where: { camperId: id } })

      // Then delete the camper
      await prismaClient.camper.delete({ where: { id } })

      revalidatePath('/dashboard')

      return Response.json({ success: true })
   } catch (error) {
      console.error('DELETE camper error:', error)
      return Response.json({ success: false, error: error.message }, { status: 500 })
   }
}


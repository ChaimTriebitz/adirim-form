import { prismaClient } from '@/utils/prisma'

export const runtime = 'nodejs'

function sanitizeData(rawData) {
   const camper = {
      first_name: rawData?.camper?.first_name || "",
      last_name: rawData?.camper?.last_name || "",
      e_date: rawData?.camper?.e_date ? new Date(rawData.camper.e_date) : new Date(),
      h_date: rawData?.camper?.h_date || "",
      street_and_number: rawData?.camper?.street_and_number || "",
      neighborhood: rawData?.camper?.neighborhood || "",
      zip_code: Number(rawData?.camper?.zip_code) || 0,
      home_number: Number(rawData?.camper?.home_number) || 0,
      kupha_name: rawData?.camper?.kupha_name || "",
      kupha_number: Number(rawData?.camper?.kupha_number) || 0,
      school: rawData?.camper?.school || "",
      grade_finishing: Number(rawData?.camper?.grade_finishing) || 0,
      grade_entering: Number(rawData?.camper?.grade_entering) || 0,
      father_name: rawData?.camper?.father_name || "",
      father_phone_number: Number(rawData?.camper?.father_phone_number) || 0,
      mother_name: rawData?.camper?.mother_name || "",
      mother_phone_number: Number(rawData?.camper?.mother_phone_number) || 0,
      emergency_name: rawData?.camper?.emergency_name || "",
      emergency_phone_number: Number(rawData?.camper?.emergency_phone_number) || 0,
      email: rawData?.camper?.email || "",
      favorite_activities: rawData?.camper?.favorite_activities || "",
      dislike_activities: rawData?.camper?.dislike_activities || "",
      allergies: rawData?.camper?.allergies || "",
      freinds: rawData?.camper?.freinds || "",
      enhance: rawData?.camper?.enhance || "",
      is_swimmer: !!rawData?.camper?.is_swimmer,
   };

   const confirmation = {
      is_confirmed: !!rawData?.confirmation?.is_confirmed || true,
      signature: rawData?.confirmation?.signature || "",
   };

   const addOns = {
      size_add_ons: rawData?.addOns?.size_add_ons || "",
      amount_add_ons: Number(rawData?.addOns?.amount_add_ons) || 0,
   };

   return {
      camper,
      confirmation,
      addOns,
   };
}



export async function POST(req) {
   try {
      const body = await req.json()
      const sanitizedData = sanitizeData(body)
      const { camper, confirmation, addOns } = sanitizedData
      // const { camper, confirmation, addOns } = body

      const created = await prismaClient.camper.create({
         data: {
            ...camper,
            confirmation: {
               create: {
                  ...confirmation,
               },
            },
            addsOn: {
               create: {
                  ...addOns,
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

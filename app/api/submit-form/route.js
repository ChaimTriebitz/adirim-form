import { prismaClient } from '@/utils/prisma'

function sanitizeData(rawData) {
   const personal = {
      first_name: rawData?.personal?.first_name || "",
      last_name: rawData?.personal?.last_name || "",
      e_date: rawData?.personal?.e_date ? new Date(rawData.personal.e_date) : new Date(),
      h_date: rawData?.personal?.h_date || "",
      street_and_number: rawData?.personal?.street_and_number || "",
      neighborhood: rawData?.personal?.neighborhood || "",
      zip_code: Number(rawData?.personal?.zip_code) || 0,
      home_number: Number(rawData?.personal?.home_number) || 0,
      kupha_name: rawData?.personal?.kupha_name || "",
      kupha_number: Number(rawData?.personal?.kupha_number) || 0,
      school: rawData?.personal?.school || "",
      grade_finishing: Number(rawData?.personal?.grade_finishing) || 0,
      grade_entering: Number(rawData?.personal?.grade_entering) || 0,
      father_name: rawData?.personal?.father_name || "",
      father_phone_number: Number(rawData?.personal?.father_phone_number) || 0,
      mother_name: rawData?.personal?.mother_name || "",
      mother_phone_number: Number(rawData?.personal?.mother_phone_number) || 0,
      emergency_name: rawData?.personal?.emergency_name || "",
      emergency_phone_number: Number(rawData?.personal?.emergency_phone_number) || 0,
      email: rawData?.personal?.email || "",
      favorite_activities: rawData?.personal?.favorite_activities || "",
      dislike_activities: rawData?.personal?.dislike_activities || "",
      allergies: rawData?.personal?.allergies || "",
      freinds: rawData?.personal?.freinds || "",
      enhance: rawData?.personal?.enhance || "",
      signature_personal: rawData?.personal?.signature_personal || "",
   };

   const swimming = {
      is_swimmer: !!rawData?.swimming?.is_swimmer,
      signature_swimming: rawData?.swimming?.signature_swimming || "",
   };

   const addOns = {
      size_add_ons: rawData?.addOns?.size_add_ons || "",
      amount_add_ons: Number(rawData?.addOns?.amount_add_ons) || 0,
   };

   return {
      personal,
      swimming,
      addOns,
   };
}



export async function POST(req) {
   try {
      const body = await req.json()
      const sanitizedData = sanitizeData(body)
      const { personal, swimming, addOns } = sanitizedData

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

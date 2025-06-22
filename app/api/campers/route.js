export async function GET() {
   console.log('Fetching campers data...');
   
   try {
      const data = await prismaClient.camper.findMany({
         include: {
            signature: true,
            addsOn: true,
         },
      })

      return NextResponse.json({ success: true, data })
   } catch (error) {
      console.error('API error:', error)
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
   }
}


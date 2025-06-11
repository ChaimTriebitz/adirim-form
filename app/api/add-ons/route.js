import { prismaClient } from '@/utils/prisma';
import { NextResponse } from 'next/server'

console.log(prismaClient);


export async function POST(request) {
   let data;
   try {
      data = await request.json();
      console.log(data);
      
      const saved = await prismaClient.addOn.create({ data });

      return NextResponse.json({ success: true, saved });
   } catch (error) {
      console.error('Failed Prisma query', JSON.stringify(data || {}), error);
      return NextResponse.json(
         { success: false, error: error.message || 'Unknown error' },
         { status: 500 }
      );
   }
}

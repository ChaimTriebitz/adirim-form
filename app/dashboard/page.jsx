import { Table } from '@/components'
import { TABLE_HEADERS } from '@/data'
import { campers } from '@/controllers'
import axios from 'axios'
import { prismaClient } from '@/utils/prisma'

export default async function Dashboard() {
    const data = await prismaClient.camper.findMany({
         include: {
            addsOn: true,
            confirmation: true,
         },
      })

      console.log(data);
      


   return (
      <div>
         <Table headers={TABLE_HEADERS} rows={data} />
      </div>
   )
}

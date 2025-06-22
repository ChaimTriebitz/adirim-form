'use client'

import { svgs } from '../../assets'
import { useRouter } from 'next/navigation'

export const Remove = ({ row }) => {
  const router = useRouter()

  const handleRemove = async () => {
    if (!confirm('Are you sure you want to delete this item?')) return

    try {
      const res = await fetch(`/api/campers/${row.id}`, {
        method: 'DELETE',
      })

      const result = await res.json()
      if (result.success) {
        router.refresh()  // Refresh the page/data to reflect deletion
      } else {
        alert('Failed to delete: ' + result.error)
      }
    } catch (error) {
      alert('Error deleting item: ' + error.message)
    }
  }

  return (
    <button className='remove' onClick={handleRemove}>
      {svgs.trashBin}{svgs.trashCover}
    </button>
  )
}


import axios from 'axios';
export async function campers() {
    try {
      const res = await axios.get('/api/campers')
      if (res.data.success) {
        return res.data.data;
      }
    } catch (err) {
      return('Axios error:', err)
    }
}
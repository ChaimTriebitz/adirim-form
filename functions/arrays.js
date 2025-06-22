export const arrays = {
   filterObjects,
   sortBy
}

function filterObjects(data = [], fields = [], search) {
   return data.filter(d => fields.some(f => d[f]?.toLowerCase().includes(search?.toLowerCase())))
}

function sortBy(data = [], by = '', dir) {
   return data.sort((a, b) => {
      if (!by || !dir || a[by] === b[by]) return 0
      if (a[by] < b[by]) return dir === 'asc' ? -1 : 1
      if (a[by] > b[by]) return dir === 'asc' ? 1 : -1
   })
}

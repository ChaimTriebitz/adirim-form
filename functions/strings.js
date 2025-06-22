export const strings ={
   toSnakeCase

}

function toSnakeCase(str) {
   if (!str) return 'notes'
   return str
      .replace(/ /g, '_') 
      .replace(/__+/g, '_') 
      .toLowerCase();      
}
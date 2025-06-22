export const initialState = {
   refreshCount: 0,
   isDataLoading: true,
   page: 'banks',
   loggedInUser: null,
   dialogs: {},
   selectedIds: [],
   filters: {
      category: '',
   },
   banks: [],
   lenders: [],
   search: '',
   sort: {
      by: '',
      dir: 'asc'
   }
}
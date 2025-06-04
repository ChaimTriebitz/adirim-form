export const addOns = [
   {
      id: 1, element: 'dynamic', children: [
         { id: 1, name: 'name_add_ons', element: 'input', type: 'text', label: 'Name of child' },
         {
            id: 1, name: 'size_add_ons', element: 'select', label: 'Name of child', options: [
               { id: 1, name: '8', label: '8' },
               { id: 1, name: '10', label: '10' },
               { id: 1, name: '12', label: '12' },
               { id: 1, name: '14', label: '14' },
               { id: 1, name: '16', label: '16' },
               { id: 1, name: 's', label: 'S' },
               { id: 1, name: 'm', label: 'M' },
               { id: 1, name: 'l', label: 'L' },
               { id: 1, name: 'xl', label: 'XL' },
               { id: 1, name: 'xxl', label: 'XXL' },
            ]
         },
         { id: 1, name: 'amount_add_ons', element: 'input', type: 'number', label: 'Amount' },
         { id: 1, name: 'cost_add_ons', element: 'input', type: 'text', label: 'Cost' },
      ]
   }
]
tables ={
    1:{
       'name': 'Jiho',
    'vip_status': False,
    'order': 'Orange Juice, Apple Juice'
 
    },
    2:{},
    3:{},
    4:{},
    5:{},
    6:{},
    7:{},
    
    
}
print(tables)
def assign_table(table_number, name, status = False):
    tables[table_number]['name'] = name 
    tables[table_number]['vip_status'] = status
    tables[table_number]['order'] = ''
    
# Write your code below:
def assign_and_print_order(table_number,*order_items):
  tables[table_number]['order'] = order_items
  for order_item in order_items:
    print(order_item)
    
assign_table(2,'Arwa',True)
assign_and_print_order(2,'Steak','Seabass','Wine Bottle')
print(tables)
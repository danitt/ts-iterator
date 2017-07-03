import { Menu } from './menu.class'
import { MenuItem } from './menuItem.class'

// Instantiating Menus
const rootMenu = new Menu(`All Menus`, `Master menu list`)
const lunchMenu = new Menu(`Lunch Menu`, `Lunch`)
const dinnerMenu = new Menu(`Dinner Menu`, `Dinner`)
const dessertMenu = new Menu(`Dessert Menu`, `Dessert`)

// Composing MenuItems into Menus
dinnerMenu.add(new MenuItem(`Pasta`, `Penne with Basil`, false, 1050))
dessertMenu.add(new MenuItem(`Apple Pie`, `Made of spinach`, true, 880))

// Composing childMenu to menu
dinnerMenu.add(dessertMenu)

// Composing into rootMenu
rootMenu.add(dinnerMenu)

rootMenu.print()
rootMenu.printVege()

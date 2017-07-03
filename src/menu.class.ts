import { MenuComponent } from './menu.component'

export class Menu extends MenuComponent {
  protected menuComponents: Set<MenuComponent> = new Set()
  constructor(
    private name: string,
    private description: string
  ) { super() }
  add = (menuComponent: MenuComponent) => this.menuComponents.add(menuComponent)
  remove = (menuComponent: MenuComponent) => this.menuComponents.delete(menuComponent)
  getChild = (i) => this.menuComponents[i]
  getName = () => this.name
  getDescription = () => this.description
  print = () => {
    console.log(`• Menu: ${this.getName()}, desc: ${this.getDescription()}\n`)
    this.menuComponents.forEach(node => node.print())
  }
  printVege = () => {
    console.log(`• Menu: ${this.getName()} - Vegetarian Options`)
    this.menuComponents.forEach(node => {
      if (!node.hasChildren() && node.isVegetarian()) node.print()
      else node.printVege()
    })
  }
}

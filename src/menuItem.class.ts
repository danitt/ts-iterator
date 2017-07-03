import { MenuComponent } from './menu.component'

export class MenuItem extends MenuComponent {
  constructor(
    private name: string,
    private description: string,
    private vegetarian: boolean,
    private price: number
  ) { super() }
  getName = () => this.name
  getDescription = () => this.description
  getPrice = () => this.price
  isVegetarian = () => this.vegetarian
  print = () => {
    console.log(
      `• MenuItem: ${this.getName()} \n` +
      `\t isVege: ${this.isVegetarian()}, price: ${this.getPrice()}, desc: ${this.getDescription()}\n`
    )
  }
}

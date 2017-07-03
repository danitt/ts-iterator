export abstract class MenuComponent {
  protected menuComponents: Set<MenuComponent>
  add = (menuComponent: MenuComponent) => null
  remove = (menuComponent: MenuComponent) => null
  getChild = (i: number) => null
  hasChildren = () => !!this.menuComponents
  getName = (): string => null
  getDescription = (): string => null
  getPrice = (): number => null
  isVegetarian = (): boolean => null
  print = (): void => null
  printVege = (): void => null
}

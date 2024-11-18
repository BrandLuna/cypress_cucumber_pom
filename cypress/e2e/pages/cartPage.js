class cartPage {
  cartItem = '.inventory_item_name';

  assertcart1() {
    cy.get(this.cartItem).should('contain.text', 'Sauce Labs Bike Light');
  }

}
export default new cartPage();

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import inventarioPage from '../../pages/inventarioPage';
import loginPage from '../../pages/loginPage';
import cartPage from '../../pages/cartPage';

// Paso para abrir la página de Sauce Demo
Given("que abro la página de Sauce Demo", () => {
    loginPage.visit();
});

// Paso para ingresar un usuario y contraseña
When("ingreso el usuario {string} y la contraseña {string}", (usuario, contraseña) => {
    loginPage.login(usuario, contraseña);
});

// Paso para verificar que la página de productos se carga
Then("debería ver la página de productos", () => {
    inventarioPage.assertUrlInventory();
});


Given("me encuentro en la pagina de swaglabs", function () {
    inventarioPage.assertUrlInventory();
});

// Paso para ingresar un usuario y contraseña
When("agrego un producto al carrito de compra", () => {
    inventarioPage.clickaddtocart2();
});

// Paso para verificar que la página de productos se carga
Then("debería ver el producto agregado al carrito", () => {
    cartPage.assertcart1();

});

Then("debería ver {int} artículo en el carrito", (cantidadArticulos) => {
    inventarioPage.cantidadArticulos(cantidadArticulos);

});

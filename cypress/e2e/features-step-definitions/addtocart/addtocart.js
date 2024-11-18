import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import inventarioPage from '../../pages/inventarioPage';
import loginPage from '../../pages/loginPage';
import cartPage from "../../pages/cartPage";

beforeEach(function () {
    // Carga el fixture de datos de usuario
    cy.fixture('usuarios').as('usuariosData');
});

// Paso para abrir la página de Sauce Demo
Given("me encuentro en la pagina de swaglabs", function () {
    const usuario = this.usuariosData.usuario1;
    loginPage.visit();
    loginPage.login(usuario.username, usuario.password);
});

// Paso para ingresar un usuario y contraseña
When("agrego un producto al carrito de compra", () => {
    inventarioPage.clickaddtocart2();
});

// Paso para verificar que la página de productos se carga
Then("debería ver el producto agregado al carrito", () => {
    cartPage.assertcart1();

});


import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import inventarioPage from '../../pages/inventarioPage';
import loginPage from '../../pages/loginPage';

// Paso para abrir la página de Sauce Demo
Given("que abro la página de Sauce Demo", () => {
  loginPage.visit();
});

// Paso para ingresar un usuario y contraseña
When("ingreso el usuario {string} y la contraseña {string}", (usuario, password) => {
  loginPage.login(usuario, password);
});

// Paso para verificar que la página de productos se carga
Then("debería ver la página de productos", () => {
  inventarioPage.assertUrlInventory();
});


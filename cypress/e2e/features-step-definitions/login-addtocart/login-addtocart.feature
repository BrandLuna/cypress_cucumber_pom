Feature: Login en Sauce Demo

    Background: Login
        Given que abro la página de Sauce Demo
        When ingreso el usuario "standard_user" y la contraseña "secret_sauce"
        Then debería ver la página de productos

    Scenario: Agregar un producto al carrito
        Given me encuentro en la pagina de swaglabs
        When agrego un producto al carrito de compra
        Then debería ver el producto agregado al carrito

    Scenario: Agregar un producto al carrito 2
        Given me encuentro en la pagina de swaglabs
        When agrego un producto al carrito de compra
        Then debería ver 1 artículo en el carrito

Feature: Agregar al carrito de compras

  Scenario: Agregar un producto al carrito
    Given me encuentro en la pagina de swaglabs
    When agrego un producto al carrito de compra
    Then debería ver el producto agregado al carrito
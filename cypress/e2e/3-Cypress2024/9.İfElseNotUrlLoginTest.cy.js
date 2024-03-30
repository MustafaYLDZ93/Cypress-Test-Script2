describe('Asenkron Test Örneği', () => {
    it('Asenkron İşlemleri Kullanarak Test', async () => {
      // SauceDemo uygulamasını ziyaret et
      cy.visit('https://www.saucedemo.com/v1/index.html');
  
      // Başlık elementini kontrol et
      cy.get('.login_logo').should('be.visible');
  
      // Kullanıcı adı ve parola giriş elementlerini tanımla
      const usernameInput = cy.get('#user-name');
      const passwordInput = cy.get('#password');
  
      const username = 'standard_user';
      const password = 'secret_saucee';
  
      await usernameInput.type(username);
      await passwordInput.type(password);
  
     await  cy.get('#login-button').click();
     const currentUrl = await cy.url();
  
      // Kullanıcı giriş yapamazsa
      if (!currentUrl.includes('/inventory.html')) {
        // Eğer kullanıcı giriş yapamazsa, hata mesajının gösterildiğini kontrol et
        cy.get('h3[data-test="error"]').should('be.visible');


      } else {
        // Ürünü sepete ekleme
        await cy.get('.inventory_item').first().find('.btn_primary').click();
  
        // Sepete git butonuna tıkla
        await cy.get('.shopping_cart_link').click();
  
        // Sepet sayfasına yönlendirildiğini doğrula ve sepetteki bilgileri doğrula
        await cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack');
        await cy.get('.inventory_item_price').should('contain', '29.99');
        await cy.url().should('include', '/cart.html');
      }
    });
  });

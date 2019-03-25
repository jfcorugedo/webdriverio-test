const assert = require('assert');

describe('shop.polymer-project.org page', () => {
  it('should have the right title', () => {
    browser.url('https://shop.polymer-project.org');
    //const innerEl = $('.input').shadow$('#innerEl');
    const title = browser.getTitle();
    console.log('Title', title);
    assert.equal(title, 'Home - SHOP');
  });

  it('can switch to Ladies Outerwear', () => {
    browser.url('https://shop.polymer-project.org');
    const tab = $('shop-app').shadow$('app-header').$('a[href="/list/ladies_outerwear"]');

    tab.click();
    console.log('Ladies tab', tab);

    const listTitle = $('shop-app').shadow$('shop-list').shadow$('header > h1');
    console.log('Title', listTitle);
    assert.equal(listTitle.getText(), 'Ladies Outerwear');
  });
});

const assert = require('assert');

describe('shop.polymer-project.org page', () => {
  it('should have the right title', () => {
    browser.url('https://shop.polymer-project.org');
    //const innerEl = $('.input').shadow$('#innerEl');
    const title = browser.getTitle();
    console.log('Title', title);
    assert.equal(title, 'Home - SHOP');
  });
});

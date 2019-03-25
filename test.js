const { remote } = require('webdriverio');

(async () => {
    const browser = await remote({
        logLevel: 'trace',
        host: "localhost",
        hostname: "localhost",
        smartWait: 5000,
        port: 4444,
        capabilities: {
            browserName: 'chrome'
        }
    });

    await browser.url('https://webdriver.io');

    const title = await browser.getTitle();
    console.log('Title was: ' + title);

    await browser.deleteSession();
})().catch((e) => console.error(e));

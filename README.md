# webdriverio-test
Saple project to code some end-to-end tests using WebdriverIO  (https://webdriver.io)

It uses last version of webdriverio in order to be able to locate elements inside the ShadowDOM using the new `shadow$` and `shadow$$` methods.

To test over web components and its ShadowDOM it is using https://shop.polymer-project.org.

##How to run

* Start chromedriver inside a terminal:

```sh
$ npm run start:chrome
```
* Run tests in another terminal:

```sh
$ npm test
```

After a few seconds you will see the result:

![test results](https://github.com/jfcorugedo/webdriverio-test/blob/master/screenshots/test-results.png)

##Reporting

It also uses `junit-reporter` and `allure-reporter` to generate some cool API to see test results.

To see allure dashboard run:

```sh
$ npm run allure-report
```

![allure dashboard](https://github.com/jfcorugedo/webdriverio-test/blob/master/screenshots/allure-dashboard.png)

To see JUnit dashboard run this command:


```sh
$ npm run junit-report
```


![junit dashboard](https://github.com/jfcorugedo/webdriverio-test/blob/master/screenshots/junit-dashboard.png)

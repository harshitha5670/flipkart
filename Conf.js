exports.config = {
    directConnect: true,

    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    specs: ['Spec.js'],
    onPrepare: function () {
        browser.ignoreSynchronization = true
        browser.driver.manage().window().maximize()
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 300000
    },
    allScriptsInterval: 300000,
    getPageInterval: 15000
};
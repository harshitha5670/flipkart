
describe("search an mobile and add to cart", function () {

    it("should navigate to the flipkart website and add the phone to cart", function () {
        browser.get('https://www.flipkart.com/')
        try {
            element(by.xpath("//button[@class='_2AkmmA _29YdH8']")).click()
        }
        catch (error) {
            return error
        }
        browser.driver.sleep(5000)
        element(by.xpath("//div[@class='O8ZS_U']/input")).sendKeys("iphone")
        element(by.xpath("//button[@type='submit']")).click()
        browser.driver.sleep(5000)
        element(by.xpath("//div[@class='_3BTv9X']/img[@alt='Apple iPhone SE (Gold, 32 GB)']")).click()
        browser.getCurrentUrl().then(function (url) {
            console.log(url)
        })
        if (browser.getCurrentUrl() == 'https://www.flipkart.com/viewcart?otracker=PP_GoToCart') {
            console.log('mobile is added to the cart successfully')
        }
        else {
            console.log("mobile is not added to the cart")
        }
        

    })
        
})
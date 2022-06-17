describe('E commerce application',async()=>
{
   // const driverProvider = require('./driverProvider.js');

    it('Login page pass',async()=>
    {
       await browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more")
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining("A million more | Volvo Cars - International")
 
        //await browser.pause(3000) 

        //await $("(//*[contains(text(),'Our Cars')])[1]").click()

        //await browser.pause(3000)

        await $("//a[@id='signup']").waitForExist
         await browser.url("https://www.media.volvocars.com/global/en-gb/login")
         
         await $("//input[@id='Login']").setValue("Shruthishetty4795@gmail.com") 

         const password = $("//input[@id='Password']")
         await password.setValue("Test123")

         await $("//a[@id='submit']").click() 

         await browser.pause(3000)

         await $("//button[@title='Accept Cookies']").click()

         //await $("(//*[contains(text(),'Press Material')])[1]").waitForExist.click()
 
 
    })

})
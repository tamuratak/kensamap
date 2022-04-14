import * as fs from 'fs'
import * as puppeteer from 'puppeteer'


async function main() {
    const file = fs.readFileSync("./html/1.html").toString()
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setContent(file)
    /*
    await page.setContent(encoded.toString())
    await page.setContent(encoded.toString())
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.google.com')
    */
    await page.screenshot({path: 'example.png'})
    const handler = await page.$('a.kv-segment-record')
    const name = await handler?.$x('./div/div[1]/div/div')
    console.log(await name?.[0].evaluate(node => node.innerHTML))
    const s = await handler?.evaluate(node => (node.className))
    console.log('aaa' + s)
    await browser.close()
}

main()


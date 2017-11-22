import { getPage, getPageNTimes } from "./utils";



Promise.all([getPage("http://www.bbc.co.uk"), getPageNTimes("http://www.bing.com", 3)]).then(
    value=>{
        console.log("Done them all")
    }
)

import fetch from 'node-fetch';
import { setTimeout } from "timers";

export async function getPageNTimes(url: string, instances: number = 1) {
    let fetches = [];
    for (let i = 0; i < instances; i++) {
        fetches.push(fetch(url));
    }


    let o = await Promise.all(fetches);
    o.forEach((element, index) => {
        console.log(index)
    })

}

export async function getPage(url: string): Promise<string> {
    let result: string = "";


    let resp0 = await new Promise<string>((resolve, reject) => {
        fetch(url).then(value => {
            setTimeout(() => {

                console.log("Executing zero fetch");
                resolve("done")
            }, 2000)

        })

    })

    let resp = await fetch(url);
    console.log("executing first fetch");

    fetch(url).then(value => {
        console.log("Executing second fetch")
    })


    console.log("PARALLEL EXECUTION");



    //let results = await Promise.all([fetch(url), fetch(url), fetch(url)]);


    return result;
}
type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific

let a: One = 'hello'
let b = a as Two // less specific
let c = a as Three // more specific

let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') {
        return a + b
    } else {
        return '' + a + b
    }
}

let myVal: string = addOrConcat(2, 3, 'concat') as string 

//Be careful! TS sees no problem - but as a string is retrned
let nextVal: number = addOrConcat(2, 3, 'concat') as number 

(10 as unknown) as string // this is ok, but not recommended --force casting

//The DOM

const img = document.querySelector('img')! // The ! operator asserts that the element is not null

const myImg = document.getElementById('img') as HTMLImageElement // Type assertion to HTMLImageElement

const nextImg = <HTMLImageElement>document.getElementById('img') //this will not work for tsx (react)

img.src

myImg.src 
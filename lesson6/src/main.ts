class Coder {
    secondLang!: string

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'TypeScript'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I am ${this.age}`
    }
}

const Batu = new Coder('Batu', 'Rock', 26)
console.log(Batu.getAge()) // Hello, I am 26
// console.log(Batu.age)
// console.log(Batu.lang)

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ){
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I am coding in ${this.lang}`
    }
}

const Sara = new WebDev('MacBook Pro', 'Sara', 'Pop', 25)
console.log(Sara.getLang())
// console.log(Sara.age)
// console.log(Sara.lang)
////////////////////////////////////////////////////


interface Musician{
    name: string,
    instrument: string,
    play(action:string) : string
}

class Guitarist implements Musician {
    name: string
    instrument: string
    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument} `
    }
}

const Page = new Guitarist('Jimmy', 'Guitar')
console.log(Page.play('strums')) // Page plays the Guitar

/////////////////////////////////////////////////////////////////////////////

class Peeps{
    static count: number = 0
    static getCount():number {
        return Peeps.count
    }

    public id: number
    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(John.id)
console.log(Amy.id)
console.log(Steve.id)
console.log(Peeps.count)
/////////////////////////////////////////////////////////////////////

class Bands{
    private dataState: string[]
    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value:string[]){
        if(Array.isArray(value) && value.every(item => typeof item === 'string')) {
            this.dataState = value
            return
        } else {
            throw new Error('Invalid data. Must be an array of strings.')
        }
    }
}

const MyBands = new Bands()
MyBands.data = ['Metallica', 'Iron Maiden', 'Black Sabbath']
console.log(MyBands.data)
MyBands.data = [...MyBands.data, 'Led Zeppelin']
MyBands.data = ["Van Halen"]
console.log(MyBands.data)
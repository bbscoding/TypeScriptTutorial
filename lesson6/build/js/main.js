"use strict";
class Coder {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I am ${this.age}`;
    }
}
const Batu = new Coder('Batu', 'Rock', 26);
console.log(Batu.getAge()); // Hello, I am 26
// console.log(Batu.age)
// console.log(Batu.lang)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I am coding in ${this.lang}`;
    }
}
const Sara = new WebDev('MacBook Pro', 'Sara', 'Pop', 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument} `;
    }
}
const Page = new Guitarist('Jimmy', 'Guitar');
console.log(Page.play('strums')); // Page plays the Guitar
/////////////////////////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(John.id);
console.log(Amy.id);
console.log(Steve.id);
console.log(Peeps.count);
/////////////////////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(item => typeof item === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Invalid data. Must be an array of strings.');
        }
    }
}
const MyBands = new Bands();
MyBands.data = ['Metallica', 'Iron Maiden', 'Black Sabbath'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'Led Zeppelin'];
MyBands.data = ["Van Halen"];
console.log(MyBands.data);

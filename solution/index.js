module.exports = class{
    constructor(arr) {
        this.items = [];
        if (arr) {
            for (let value of arr) {
                this.add(value);
            }
        }

    }

    [Symbol.iterator](){
        return this.items.values();
    }

    [Symbol.toStringTag] = '^_^';

    has(item){
       return this.items.includes(item)
    };

    add(item) {
        if (!this.has(item)) {
            this.items.push(item);
        }
        return this;
    }

    clear(){
        this.items = [];
    }

    delete(item){
        let i = this.items.indexOf(item);
        if(~i){
            this.items.splice(i,1)
        }
    }

    forEach(cb, context = this) {
        return this.items.forEach(cb, context);
    }

    get size() {
        return this.items.length
    }

    * keys() {
        yield* this.items;
    }

    * values() {
        yield* this.items;
    }

    * entries() {
        yield* this.items.map((item) => [item, item]);
    }


}


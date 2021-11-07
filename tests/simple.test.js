const MySet = require('../solution');

describe('Тесты для Set', () => {
    it('хранит только уникальные значения', () => {
        const arr = [4, 8, 15, 16, 23, 42];
        const set = new MySet(arr);
        expect([...set]).toStrictEqual(arr);
    });
    it('есть свойство size', () => {
        const arr = [4, 8, 15, 16, 23, 42];
        const set = new MySet(arr);
        const test = 1;
        expect(set.size).toBe(6);
    });
    it('работает в цикле for-of', () => {
        const arr = [4, 8, 15, 16, 23, 42];
        const set = new MySet(arr);
        let i = 0;
        for (const item of set) {
            expect(item).toBe(arr[i]);
            i++;
        }
    });
    it('есть методы keys, values, entries', () => {
        const arr = [4, 8, 15, 16, 23, 42];
        const set = new MySet(arr);
        let i = 0;
        for (const item of set.entries()) {
            expect(item).toStrictEqual([arr[i], arr[i]]);
            i++;
        }
    });
    it('есть метод clear', () => {
        const arr = [4, 8, 15, 16, 23, 42];
        const set = new MySet(arr);
        set.clear();
        expect(set.size).toStrictEqual(0);
    });
    // it('есть метод add, который может работать в цепочке вызовов', () => {
    //     const arr = [4, 8, 15, 16, 23, 42];
    //     const set = new MySet(arr);
    //
    //     const object = {
    //         getValue() {
    //             return this.value
    //         }
    //     }
    //     set.add(object).add(object).add(object);
    //     console.log(set)
    //     expect(set.size).toStrictEqual(0);
    // });
});


// const object = {
//     getValue () { return this.value }
// }
//
// const data = {
//     value: 42
// }

// есть метод add
// set.add(object);
// set.add(data);

// который может работать в цепочке вызовов
// set.add(object).add(object).add(object);

// есть метод delete
// set.delete(data);

// есть метод has
// console.log(set.has({})); // false
// console.log(set.has(object)); // true
// console.log(set.has(data)); // false

// и кое-что еще
// console.log(set === set.valueOf()) // true
// console.log(String(set)) // [object ^_^]
// console.log(Object.prototype.toString.call(set)) // [object ^_^]

// есть forEach, который делает какие-то странные вещи...
// set.forEach(function (item) {
//     console.log(item.getValue.call(this)); // 42
// }, data)



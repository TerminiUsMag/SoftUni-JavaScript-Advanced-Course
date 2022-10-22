let bookSelection = require('./solution');
let { should, expect, assert } = require('chai');

describe("Tests …", function () {
    describe("isGenreSuitable", function () {


        it(`If the value of the string genre is equal to 'Thriller' and the value of age is less to 12, 
        return: Books with Thriller genre are not suitable for kids at 10 age`, function () {

            let genre = 'Thriller';
            let age = 10;

            expect(bookSelection.isGenreSuitable(genre, age)).to.equal('Books with Thriller genre are not suitable for kids at 10 age');
        });

        it(`If the value of the string genre is qual to 'Horror' and the value of age is 12 should return : Books with Horror genre are not suitable for kids at 12 age`, function () {

            let genre = 'Horror';
            let age = 12;

            expect(bookSelection.isGenreSuitable(genre, age)).to.equal('Books with Horror genre are not suitable for kids at 12 age');

        });

        it(`If the value of the string is 'Horror' and the value of age is greater than 12 should return : Those books are suitable`, function () {

            let genre = 'Horror';
            let age = 15;

            expect(bookSelection.isGenreSuitable(genre, age)).to.equal('Those books are suitable');
        })
    });
    describe('isItAffordable', function () {
        it('Should throw an error if the inputs are not numbers', function () {

            assert.throw(() => bookSelection.isItAffordable('10', 'hello'), Error, 'Invalid input');
            assert.throw(() => bookSelection.isItAffordable('Pesho', 10), Error, 'Invalid input');
            assert.throw(() => bookSelection.isItAffordable(10, 'Gosho'), Error, 'Invalid input');
            //expect.to.Throw(isItAffordable(price,budget),'Invalid input');

        });
        it('Should return "You dont have enough money" if the result is lower than 0 ', function () {

            assert.equal(bookSelection.isItAffordable(10, 9), "You don't have enough money");
            assert.equal(bookSelection.isItAffordable(10, 9.5), "You don't have enough money");
            assert.equal(bookSelection.isItAffordable(9, 8.99), "You don't have enough money");
        });
        it('Should return `Book bought. You have ${result}$ left` if the result is equal or bigger than 0', function () {

            assert.equal(bookSelection.isItAffordable(5, 10), `Book bought. You have 5$ left`);
            assert.equal(bookSelection.isItAffordable(5, 5), `Book bought. You have 0$ left`);
        });
    });
    describe('suitableTitles', function () {
        it("Invalid input", function () {
            assert.throw(() => { bookSelection.suitableTitles('10', 'Correct') }, Error, "Invalid input");
            assert.throw(() => { bookSelection.suitableTitles(['Hey', 'Hello'], true) }, Error, "Invalid input");
        });
        it("Valid input", function () {
            let objArr = [{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "The Peaky Blinders", genre: 'Action' }];
            let genre = "Thriller";
            let result = bookSelection.suitableTitles(objArr,genre);
            assert.deepEqual(result,['The Da Vinci Code']);
        });
    });
});

var {Shop, Item} = require('../src/gilded_rose.js');

jasmine.getEnv().addReporter({
    specDone: function(result) {
      console.log(result.fullName);
    }
});

// describe("Gilded Rose", function() {

//   it("should foo", function() {
//     const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
//     const items = gildedRose.updateQuality();
//     expect(items[0].name).toEqual("foo");
//   });

// });

describe('#updateQuality', function() {

  describe('when the product type is common', function () {
    describe('before sellIn has passed', function () {
      it("should decrease the quality of standard product by 1pts/day", function() {
        const gildedRose = new Shop([ new Item("Minor potion", 5, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(4);
        expect(items[0].quality).toEqual(9);
      })
    })
    describe('after sellIn has passed', function () {
      it("should decrease the quality of standard product by 2pts/day", function() {
        const gildedRose = new Shop([ new Item("Minor potion", 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(-1);
        expect(items[0].quality).toEqual(8);
      })
    })
  })

  describe('when the product type is sulfuras', function() {
    it('the quality never goes down', function () {
      const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
      expect(items[0].quality).toEqual(80);
    })
  })


  it("the quality of an item is never negative", function() {
    const gildedRose = new Shop([ new Item("Minor potion", -1, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-2);
    expect(items[0].quality).toEqual(0);
  })
});
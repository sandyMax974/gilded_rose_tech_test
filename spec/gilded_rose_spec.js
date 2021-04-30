// var {Shop, Item} = require('../src/gilded_rose.js');

// jasmine.getEnv().addReporter({
//     specDone: function(result) {
//       console.log(result.fullName);
//     }
// });

describe('#updateQuality', function() {

  describe("when the product is conjured item", function() {
    describe('before sellIn has passed', function () {
      it("should decrease the quality of standard product by 2pts/day", function() {
        const gildedRose = new Shop([ new Item("Conjured Mana Cake", 5, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(4);
        expect(items[0].quality).toEqual(8);
      })
    })
    describe('after sellIn has passed', function () {
      it("should decrease the quality of standard product by 4pts/day", function() {
        const gildedRose = new Shop([ new Item("Conjured Mana Cake", 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(-1);
        expect(items[0].quality).toEqual(6);
      })
    })
  })

  describe('when the product type is common', function () {
    describe('before sellIn has passed', function () {
      it("should decrease the quality of standard product by 1pts/day", function() {
        const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 5, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(4);
        expect(items[0].quality).toEqual(9);
      })
      it("the quality of an item is never negative", function() {
        const gildedRose = new Shop([ new Item("+5 Dexterity Vest", -1, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(-2);
        expect(items[0].quality).toEqual(0);
      })
    })
    describe('after sellIn has passed', function () {
      it("should decrease the quality of standard product by 2pts/day", function() {
        const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 0, 10) ]);
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

  describe('when the product type is Backstage Passes', function() {

    it("the quality of an item is never more than 50", function() {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(3);
      expect(items[0].quality).toEqual(50);
    })

    describe("more than 10 days sellIn left", function() {
      it('the quality increases by 1pts/day', function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 5) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(14);
        expect(items[0].quality).toEqual(6);
      })
    })

    describe("less than 10 days sellIn left", function() {
      it('the quality increases by 2pts/day', function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 5) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(9);
        expect(items[0].quality).toEqual(7);
      })
    })
    describe("less than 5 days sellIn left", function() {
      it('the quality increases by 3pts/day', function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 5) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(4);
        expect(items[0].quality).toEqual(8);
      })
    })
    describe("when sellIn date has passed", function() {
      it('the quality drops to zero', function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(-1);
        expect(items[0].quality).toEqual(0);
      })
    })
  })

  describe('when the product type is Aged Brie', function() {
    describe("before sellIn has passed", function() {
      it('the quality increases by 1pts/day', function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 15, 5) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(14);
        expect(items[0].quality).toEqual(6);
      })
    })

    describe("after sellIn has passed", function() {
      it('the quality increases by 2pts/day', function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 0, 5) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(-1);
        expect(items[0].quality).toEqual(7);
      })
    })
  
    it("the quality of an item is never more than 50", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 0, 50) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(50);
    })

  })
});
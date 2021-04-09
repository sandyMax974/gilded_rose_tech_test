var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

});

describe('updateQuality', function() {

  it("before sellIn has passed, should decrease the quality of standard product by 1pts/day", function() {
    const gildedRose = new Shop([ new Item("Minor potion", 5, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(9);
  })
  it("after sellIn has passed, should decrease the quality of standard product by 2pts/day", function() {
    const gildedRose = new Shop([ new Item("Minor potion", 0, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(8);
  })
});
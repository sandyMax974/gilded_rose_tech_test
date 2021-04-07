# Tech Test: Gilded Rose

* SellIn => number of days we have to sell the item
* Quality => how valuable the item is
* End of each day both values get lowered for every item

Exceptions:
* Once the sell by date has passed, Quality degrades twice as fast
* The Quality of an item is never negative
* “Aged Brie” actually increases in Quality the older it gets
* The Quality of an item is never more than 50
* “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
* “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

### Brief

> We have recently signed a supplier of conjured items. This requires an update to our system: “Conjured” items degrade in Quality twice as fast as normal items

The aim is to practice good design in the language of your choice. Refactor the code in such a way that adding the new "conjured" functionality is easy.

Legacy code worked from: https://github.com/emilybache/GildedRose-Refactoring-Kata/tree/main/js-jasmine
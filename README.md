# Tech Test: Gilded Rose

## Focus

Ability to read, refactor and extend legacy code.

## Specifications

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a
prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods.
Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We
have a system in place that updates our inventory for us. It was developed by a no-nonsense type named
Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that
we can begin selling a new category of items. First an introduction to our system:

	- All items have a SellIn value which denotes the number of days we have to sell the item
	- All items have a Quality value which denotes how valuable the item is
	- At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

	- Once the sell by date has passed, Quality degrades twice as fast
	- The Quality of an item is never negative
	- "Aged Brie" actually increases in Quality the older it gets
	- The Quality of an item is never more than 50
	- "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
	- "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
	Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
	Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

	- "Conjured" items degrade in Quality twice as fast as normal items

Feel free to make any changes to the UpdateQuality method and add any new code as long as everything
still works correctly. However, do not alter the Item class or Items property as those belong to the
goblin in the corner who will insta-rage and one-shot you as he doesn't believe in shared code
ownership (you can make the UpdateQuality method and Items property static if you like, we'll cover
for you).

Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a
legendary item and as such its Quality is 80 and it never alters.

https://github.com/emilybache/GildedRose-Refactoring-Kata/tree/main/js-jasmine

## Process

* There are a lots of exceptions in the above specs, so I would need to wrap my head around these first.
* I've identify 5 different product types: "Conjured", "Sulfuras", "Backstage Passes", "Aged Brie" and the rest (that I'll call "Common").
* Now that I understand how updateQuality works, I can create my own tests, checking that the quality of each product type decreases according to the specs.

## Difficulties

* It took me sometimes to undestand how to run this JS file in the CLI, in order to get visibility. I kept having the following error:
```
admin@Sandys-Air gilded_rose % node /src/gilded_rose.js
node:internal/modules/cjs/loader:927
  throw err;
  ^

Error: Cannot find module '/src/gilded_rose.js'
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:924:15)
    at Function.Module._load (node:internal/modules/cjs/loader:769:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
    at node:internal/main/run_main_module:17:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}
```
I eventually realised that it was /spec/texteste_ficture.js that I was meant to run.


Is the gilde_rose a front-end program without an html interface, that I'm running in the back-end via node.js?
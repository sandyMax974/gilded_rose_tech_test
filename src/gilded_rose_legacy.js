updateQuality() {
  for (var i = 0; i < this.items.length; i++) { // iterating through the shop item list
    // block identifying common item and applying the correct behaviour on quality
    if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') { // exclude brie and passes 
      if (this.items[i].quality > 0) { // exclude items with quality already at 0
        if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') { // exclude sulfuras items
          this.items[i].quality -= 1; // decrease all item by 1
        } 
      }
    } else { // block identifying brie or passes and applying the correct behaviour on quality
      if (this.items[i].quality < 50) { // if the quality is under 50
        this.items[i].quality += 1; // increase by 1
        if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') { // if it is a pass
          if (this.items[i].sellIn < 11) { // and there is less than 10 days left
            if (this.items[i].quality < 50) { // and the quality is under 50
              this.items[i].quality += 1; // increase by 1
            }
          }
          if (this.items[i].sellIn < 6) { // if there is less than 6 days left
            if (this.items[i].quality < 50) { // and the quality is under 50
              this.items[i].quality += 1; // increase by 1
            }
          }
        }
      }
    } // block to reduce the SellIn for all items except sulfuras
    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
      this.items[i].sellIn -= 1;
    } 
    if (this.items[i].sellIn < 0) {
      if (this.items[i].name != 'Aged Brie') {
        if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.items[i].quality > 0) {
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
              this.items[i].quality -= 1;
            }
          }
        } else {
          this.items[i].quality -= this.items[i].quality;
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality += 1;
        }
      }
    }
  }
  return this.items;
}
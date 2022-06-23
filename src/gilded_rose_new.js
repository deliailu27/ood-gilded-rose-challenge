class Item {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }
  

function addCapped(number, toAdd, upperBound){
    let result = number + toAdd;
    result = result - ((result - upperBound) + Math.abs(result - upperBound))/2;
    return result;
  }
  
function subCappedZero(number, toSub){
    let result = number - toSub;
    result = (result + Math.abs(result))/2; 
    return result;
}

class Shop {
    constructor(items=[], qualityCap=50){
      this.items = items;
      this.qualityCap = qualityCap;
    }
    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            
            switch (true){
                case (item.name === 'Sulfuras, Hand of Ragnaros'):
                    break;
                case (item.name === 'Aged Brie' && item.sellIn > 0):
                    item.quality = addCapped(item.quality, 1, this.qualityCap);
                    break;
                case (item.name === 'Aged Brie' && item.sellIn <= 0):
                    item.quality = addCapped(item.quality, 2, this.qualityCap);
                    break;
                case (item.name === 'Backstage passes to a TAFKAL80ETC concert' && item.sellIn > 10):
                    item.quality = addCapped(item.quality, 1, this.qualityCap);
                    break;
                case (item.name === 'Backstage passes to a TAFKAL80ETC concert' && item.sellIn > 5 && item.sellIn <= 10):
                    item.quality = addCapped(item.quality, 2, this.qualityCap);
                    break;
                case (item.name === 'Backstage passes to a TAFKAL80ETC concert' && item.sellIn > 0 && item.sellIn <= 5):
                    item.quality = addCapped(item.quality, 3, this.qualityCap);
                    break;
                case (item.name === 'Backstage passes to a TAFKAL80ETC concert' && item.sellIn <= 0):
                    item.quality = 0;
                    break;
                case (item.name === 'Conjured' && item.sellIn > 0):
                    item.quality = subCappedZero(item.quality, 2);
                    break;
                case (item.name === 'Conjured' && item.sellIn <= 0):
                    item.quality = subCappedZero(item.quality, 4);
                    break;
                case item.sellIn <= 0:
                    item.quality = subCappedZero(item.quality, 2);
                    break;
                default:
                    item.quality = subCappedZero(item.quality, 1);
                    break;
            }
            switch (true){
                case (item.name === 'Sulfuras, Hand of Ragnaros'):
                    break;
                default:
                    item.sellIn = subCappedZero(item.sellIn, 1);
            }
        }
      
  
      return this.items;
    }

  }
  
  module.exports = {
    Item,
    Shop
  }
  
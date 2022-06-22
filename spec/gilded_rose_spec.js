var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it('quality degrades before date passes', function(){
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 20)]);
    const result= gildedRose.updateQuality()[0].quality
    const expected = 19
     
    expect (result).toEqual(expected)
  
  })

  it('Aged Brie increases quality',function(){
    const gildedRose = new Shop([new Item("Aged Brie", 2, 0)])
    const result= gildedRose.updateQuality()[0].quality
    const expected = 1

    expect(result).toEqual(expected)
    })

  it('quality degrades twice as fast after date passes',function(){
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 20)]);
    const days = 11
    for (let day=0; day<days; day++) {
      gildedRose.updateQuality();
    }
    const result = gildedRose.items[0].quality
    const expected =8

    expect(result).toEqual(expected)
  })

  it('Sulfuras does not decrease in quality',function(){
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
    const result= gildedRose.updateQuality()[0].quality 
    const expected = 80

    expect(result).toEqual(expected)
  })


  it('Backstage pass increase quality before date passes',function(){
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
    const result = gildedRose.updateQuality()[0].quality
    const expected = 21

    expect(result).toEqual(expected)
  })

  it('Backstage passes quality drop to 0 after date passes',function(){
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
    const days= 16
    for (let day=0; day<days; day++) {
      gildedRose.updateQuality();
    }
    const result = gildedRose.items[0].quality
    const expected =0

    expect(result).toEqual(expected)
  })

  it('Backstage passes increase quality by 2 when 10 days left', function(){
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
    const result = gildedRose.updateQuality()[0].quality
    const expected = 51


    expect(result).toEqual(expected)
  })


  

});

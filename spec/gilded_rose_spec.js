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


  

});

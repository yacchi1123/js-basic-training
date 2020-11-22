const items = [
  { name: 'じゃがいも', price: 50},
  { name: 'にんじん', price: 60},
  { name: 'しいたけ', price: 200},
  { name: '玉ねぎ', price: 50}
];

const createItemList = (items) => {
  // ここにソースコードを記入
  const $itemList = $('#item-list');
  
  items.forEach((item) => {
    const { name, price } = item;

    // liタグ生成
    const $li = $("<li>", {
      "class": "item-list__item"
    });
    
    // divタグ生成(野菜名)
    const $vegiName = $("<div>", {
      "class": "vegi-name"
    });
    $vegiName.text(name);
    
    // divタグ生成(値段)
    const $vegiPrice = $("<div>", {
      "class": "vegi-price"
    });
    $vegiPrice.text(`${price}円`);
    
    // 要素追加
    $li.append($vegiName);
    $li.append($vegiPrice);
    $itemList.append($li);
  })
}

createItemList(items);

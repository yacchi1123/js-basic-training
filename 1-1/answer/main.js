const items = [
  { name: 'じゃがいも', price: 50},
  { name: 'にんじん', price: 60},
  { name: 'しいたけ', price: 200},
  { name: '玉ねぎ', price: 50}
];

const createItemList = (items) => {
  // ulタグの要素取得
  const vegiList = document.getElementById('item-list');

  items.forEach(item => {
    // liタグ作成
    const vegi = document.createElement('li');
    vegi.classList.add("item-list__item");

    // 野菜名作成
    const vegiName = document.createElement('div');
    vegiName.classList.add('vegi-name');
    vegiName.textContent = item.name;

    // 価格作成
    const vegiPrice = document.createElement('div');
    vegiPrice.classList.add('vegi-price');
    vegiPrice.textContent = `${item.price}円`;

    // 要素の追加
    vegi.appendChild(vegiName);
    vegi.appendChild(vegiPrice);
    vegiList.appendChild(vegi);
  });
}

createItemList(items);

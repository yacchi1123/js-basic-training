const items = [
  { name: 'じゃがいも', price: 50},
  { name: 'にんじん', price: 60},
  { name: 'しいたけ', price: 200},
  { name: '玉ねぎ', price: 100}
];

const createItemList = (items) => {
  // ulタグの要素取得
  const vegiList = document.getElementById('item-list');

  items.forEach(item => {
    const { name, price } = item;

    // liタグ作成(TODO:関数化してください。)
    const vegi = document.createElement('li');
    vegi.classList.add("item-list__item");

    // 野菜名作成(TODO:関数化してください。)
    const vegiName = document.createElement('div');
    vegiName.classList.add('vegi-name');
    vegiName.textContent = name;

    // 価格作成(TODO:関数化してください。)
    const vegiPrice = document.createElement('div');
    vegiPrice.classList.add('vegi-price');
    vegiPrice.textContent = `${price}円`;

    // 要素の追加(TODO:関数化してください。)
    vegi.appendChild(vegiName);
    vegi.appendChild(vegiPrice);
    vegiList.appendChild(vegi);
  });
}

createItemList(items);

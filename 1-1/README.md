## 課題
main.jsで定義されている`items`から各アイテムを取り出し、
以下のようなHTML構造となるように取り出したデータをもとにDOM作成しましょう。
処理は、`createItemList`に記載してください。
言語はVnilla Js(プレーンなJavaScript)でコーディングしましょう。
また、課題提出時はindex.htmlの`li`タグの要素はすべて消してください。

index.html

```
(省略)
<ul id="item-list">
  <li class="item-list__item">
    <div class="vegi-name">じゃがいも</div>
    <div class="vegi-price">50円</div>
  </li>
  <li class="item-list__item">
    <div class="vegi-name">にんじん</div>
    <div class="vegi-price">60円</div>
  </li>
  <li class="item-list__item">
    <div class="vegi-name">しいたけ</div>
    <div class="vegi-price">200円</div>
  </li>
  <li class="item-list__item">
    <div class="vegi-name">玉ねぎ</div>
    <div class="vegi-price">100円</div>
  </li>
</ul>
(省略)
```

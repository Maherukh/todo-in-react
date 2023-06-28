import React from "react";
import Item from "./Item";

function ItemList({ items, onRemoveItem }) {
  return (
    <ul>
      {items.map((item, index) => (
        <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
      ))}
    </ul>
  );
}

export default ItemList;
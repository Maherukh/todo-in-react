import './App.css'
function ItemList({items, setItems}) {
    function onRemoveItem(itemToRemove) {
        const newItem = items.filter(item => item !== itemToRemove);
        setItems(newItem);
      }
    return (
        <>
        <ul>
          {items.map((item, index) => (
            <li key={index + item}>
            {item}
            <button onClick={() => onRemoveItem(item)}>X</button>
            </li>
          ))}
        </ul>
        </>
    );
}

export default ItemList;
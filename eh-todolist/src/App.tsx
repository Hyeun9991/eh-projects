import { useEffect, useState } from 'react';
import { Item } from './types/type';
import ItemList from './components/ItemList';
import InsertItem from './components/InsertItem';
import TodoListTemplate from './components/TodoListTemplate';

function App() {
  const saveItem = localStorage.getItem('todos');
  const [items, setItems] = useState<Item[]>(
    saveItem ? JSON.parse(saveItem) : []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(items));
  }, [items]);

  return (
    <div className="bg-cs-white w-full min-h-screen flex justify-center items-center">
      <TodoListTemplate>
        <InsertItem items={items} setItems={setItems} />
        <ItemList items={items} setItems={setItems} />
      </TodoListTemplate>
    </div>
  );
}

export default App;

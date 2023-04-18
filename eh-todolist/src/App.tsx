import { useEffect, useState } from 'react';
import { Item } from './types/type';
import ItemList from './components/ItemList';
import InsertItem from './components/InsertItem';

function App() {
  const saveItem = localStorage.getItem('todos');
  const [items, setItems] = useState<Item[]>(saveItem ? JSON.parse(saveItem) : []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(items));
  }, [items]);

  return (
    <div className="bg-cs-white w-full min-h-screen flex justify-center items-center">
      <div className="bg-cs-gray flex flex-col items-center gap-8 w-2/3 h-[420px] sm:w-[375px] sm:h-[500px] rounded-xl px-6 py-8 shadow-xl">
        <InsertItem items={items} setItems={setItems} />
        <ItemList items={items} setItems={setItems} />
      </div>
    </div>
  );
}

export default App;

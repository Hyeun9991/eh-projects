import { useState } from 'react';
import { Item } from './types/type';
import ItemList from './components/ItemList';
import InsertItem from './components/InsertItem';

function App() {
  const [items, setItems] = useState<Item[]>([]);

  return (
    <div className="bg-cs-white w-full min-h-screen flex justify-center items-center">
      <div className="bg-cs-gray/70 flex flex-col gap-8 w-2/3 h-[420px] sm:w-[375px] sm:h-[500px] rounded-xl px-4 py-8 shadow-xl">
        <InsertItem items={items} setItems={setItems} />
        <ItemList />
      </div>
    </div>
  );
}

export default App;

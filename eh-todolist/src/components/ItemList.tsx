import { Item } from '../types/type';
import { BsFillCheckCircleFill, BsFillTrash3Fill } from 'react-icons/bs';

interface Props {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ItemList = ({ items, setItems }: Props) => {
  const clickDelete = (data: Item) => {
    setItems(items.filter((item: Item) => item.itemId !== data.itemId));
  };

  const clickComplete = (data: Item) => {
    setItems(
      items.map((item: Item) => {
        if (item.itemId === data.itemId) {
          return { ...item, clear: !item.clear };
        }

        return item;
      })
    );
  };

  return (
    <ul className="bg-cs-white/50 w-full rounded-lg flex flex-col">
      {items.map((data: Item) => {
        return (
          <li key={data.itemId} className="border-b border-cs-gray px-1.5 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => clickComplete(data)}
                  className={
                    'w-5 h-5 rounded-full outline-none focus:ring-4 ring-cs-green/50'
                  }
                >
                  <BsFillCheckCircleFill
                    className={`w-full h-full rounded-full hover:text-cs-green hover:bg-cs-green/40 
                      ${
                        data.clear
                          ? 'text-cs-green bg-cs-green/40'
                          : 'text-cs-gray'
                      }`}
                  />
                </button>
                <p
                  className={`${
                    data.clear ? 'text-cs-gray-02' : ''
                  } text-sm text-cs-dark-gray`}
                  onClick={() => {}}
                >
                  {data.itemName}
                </p>
              </div>
              <button
                onClick={() => clickDelete(data)}
                className="bg-cs-gray hover:bg-cs-red flex items-center justify-center w-6 h-6 rounded-full outline-none focus:ring-4 ring-cs-red/50"
              >
                <BsFillTrash3Fill className="w-3 h-3 rounded-full text-cs-white/50" />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;

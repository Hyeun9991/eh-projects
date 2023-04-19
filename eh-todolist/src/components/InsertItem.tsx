import { useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addItem } from '../modules/ItemReducer';

const InsertItem = () => {
  const dispatch = useDispatch();
  
  const [itemName, setItemName] = useState('');

  const changeItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  const clickButton = () => {
    const itemData = {
      id: uuid(),
      name: itemName,
      clear: false,
    };
    dispatch(addItem(itemData.id, itemData.name, itemData.clear));

    setItemName('');
  };

  return (
    <div className="w-full flex items-center justify-between">
      <input
        type="text"
        value={itemName}
        onChange={changeItemName}
        className="bg-cs-gray-02/60 text-cs-dark-gray placeholder:text-cs-dark-gray/60 w-[85%] px-3 py-1.5 text-sm rounded-lg outline-none focus:ring-4 ring-cs-gray-03/50"
      />
      <button
        onClick={clickButton}
        className="w-8 h-8 cursor-pointer rounded-full outline-none focus:ring-4 ring-cs-blue/50"
      >
        <BsFillPlusCircleFill className="text-cs-blue hover:text-cs-white w-full h-full" />
      </button>
    </div>
  );
};

export default InsertItem;

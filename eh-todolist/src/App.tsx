import ItemList from './components/ItemList';
import InsertItem from './components/InsertItem';
import TodoListTemplate from './components/TodoListTemplate';

function App() {
  return (
    <div className="bg-cs-white w-full min-h-screen flex justify-center items-center">
      <TodoListTemplate>
        <InsertItem />
        <ItemList />
      </TodoListTemplate>
    </div>
  );
}

export default App;

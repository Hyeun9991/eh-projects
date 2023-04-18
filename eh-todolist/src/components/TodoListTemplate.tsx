import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const TodoListTemplate = ({ children }: Props) => {
  return (
    <div className="bg-cs-gray flex flex-col items-center gap-8 w-2/3 h-[420px] sm:w-[375px] sm:h-[500px] rounded-xl px-6 py-8 shadow-xl">
      {children}
    </div>
  );
};

export default TodoListTemplate;

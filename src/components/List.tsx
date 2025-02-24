import style from './ListStyle.module.css'
import { Trash } from 'phosphor-react';
import { Check } from 'phosphor-react';

interface Content {
  content: string;
  tasks: string[]; 
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
  isChecked: boolean; // Recebe o estado do checkbox como prop
  handleToggleCheck: () => void; // Recebe a função para alternar o estado do checkbox
}

const List = ({ content, tasks, setTasks, isChecked, handleToggleCheck }: Content) => {

  function handleDeleteTask(contentToDelete: string) {
    setTasks(tasks.filter((task) => task !== contentToDelete)); 
  }

  return (
    <div className={style.contentGlobalList}>
      <div className={style.boxList}>
        <div className={style.separationDivsList}>
          <div>
            <div
              onClick={handleToggleCheck} // Chama a função para alternar o estado do checkbox
              className={`${style.circleCheck} ${isChecked ? style.checkedCircle : ''}`}
            >
              {isChecked && <Check size={14} />}
            </div>
            <span className={`${isChecked ? style.isRiskedStyle : ''}`}>{content}</span>
          </div>
          <Trash
            className={style.trashIcon}
            size={14}
            onClick={() => handleDeleteTask(content)} 
          />
        </div>
      </div>
    </div>
  );
}

export default List;

import Header from './components/Header'
import { PlusCircle } from 'phosphor-react';
import style from './App.module.css'
import Clipboard from './assets/Clipboard.svg'
import { ChangeEvent, FormEvent, useState } from 'react';
import List from './components/List';

const App = () => {
  const [tasks, setTasks] = useState<string[]>([]); // Armazena as tarefas
  const [newTask, setNewTask] = useState<string>(''); // Armazena a nova tarefa
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]); // Array para armazenar os estados dos checkboxes

  function handleAddTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleSubmitTask(event: FormEvent) {
    event.preventDefault();
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setCheckedItems((prevItems) => [...prevItems, false]); // Inicializa o estado do checkbox como "não marcado"
    setNewTask('');
  }

  // Função para alternar o estado do checkbox de uma tarefa específica
  function handleToggleCheck(index: number) {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  }

  const checkedCount = checkedItems.filter((item) => item).length; // Conta os itens marcados

  return (
    <div className={style.globalContent}>
      <Header />
      <div className={style.content}>
        <form onSubmit={handleSubmitTask}>
          <input
            type="text"
            placeholder="Adicione uma tarefa"
            value={newTask}
            onChange={handleAddTask}
          />
          <button type="submit">
            Criar <PlusCircle />
          </button>
        </form>

        <div className={style.boxAddToList}>
          <p>
            Tarefas criadas{' '}
            <div className={style.circleInformationList}>
              {tasks.length}</div>
          </p>
          <p>
            Concluídas{' '}
            <div className={style.circleInformationListtwo}>
              {`${checkedCount} de ${tasks.length}`}
            </div>
          </p>
        </div>

        {tasks.length === 0 ? (
          <div className={style.clipboardImage}>
            <img src={Clipboard} alt="Clipboard" />
            <div className={style.paragraphCreateList}>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        ) : (
          <div className={style.list}>
            {tasks.map((task, index) => (
              <List
                key={index}
                content={task}
                tasks={tasks}
                setTasks={setTasks}
                isChecked={checkedItems[index]} 
                handleToggleCheck={() => handleToggleCheck(index)} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

import styles from './Todo.module.css'
import {RiTodoFill, RiAddFill} from  'react-icons/ri'
import {BsCheckLg} from  'react-icons/bs'
const Todo = ( {todo, deleteTodo, completedTodo} ) => {
	return (
    <div className={`${styles.Todo} ${todo.isCompleted ? styles.TodoCompleted : ""}`}>
			<RiTodoFill className={`${styles.TodoIcon}`}/>
      <p>{todo.text}</p>
			<BsCheckLg className={styles.TodoCheck} onClick={() => completedTodo(todo.id)}/>
			<RiAddFill className={styles.TodoDelete} onClick={() => deleteTodo(todo.id)}/>
    </div>
  );
}

export default Todo
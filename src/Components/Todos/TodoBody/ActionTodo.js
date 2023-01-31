import {MdDeleteForever, MdReplay} from 'react-icons/md'
import Button from '../../UI/Button'
import styles from './ActionTodo.module.css'
const ActionTodo = ( {clearAll, deleteCompleted, todos, completedTodo} ) => {

	if(!todos.length) {
		return;
	}

	return (<div className={styles.ActionTodo}>
		<Button onClick={clearAll} title="Clear all TODOs">
			<MdDeleteForever className={styles.clearAllTodos}/>
		</Button>
		<Button onClick={deleteCompleted}
						disabled={completedTodo === 0}
						title="Delete completed TODOs"
		>
			<MdReplay className={styles.clearCompletedTodos} />
		</Button>
	</div>)
}

export default ActionTodo
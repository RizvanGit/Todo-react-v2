import Todo from './Todo'
import styles from './ListTodo.module.css'
const ListTodo = (props) => {
	const {todos, deleteTodo, completedTodo} = props

	return (todos.length ?
						(<div className={styles.ListTodo}> {todos.map( (todo) => {
							return <Todo
								todo={todo}
								key={todo.id}
								deleteTodo={deleteTodo}
								completedTodo={completedTodo}
							/>

						} )} </div>)
						: <div className={styles.emptyTodo}><p>Todo list is empty..</p></div> )
}

export default ListTodo
import styles from './NotificationTodo.module.css'

const NotificationTodo = ( { countTodos } ) => {
	if(!countTodos){
		return;
	}
	return <div className={styles.notificationTodos}>You
		have {countTodos} completed {countTodos > 1 ? "todos" : "todo"}!</div>
}

export default NotificationTodo
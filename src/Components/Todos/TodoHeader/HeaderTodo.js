import styles from './HeaderTodo.module.css'
import Form from '../../UI/Form'
const HeaderTodo = (props) => {
	const {addTodo} = props
	return (<div className={styles.HeaderTodo}>
			<h1>TODO LIST</h1>
			<Form addTodo={addTodo}/>
		</div>)
}

export default HeaderTodo
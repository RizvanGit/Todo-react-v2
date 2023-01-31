import Input from './Input'
import Button from './Button'
import styles from './Form.module.css'
import { useState } from 'react'
const Form = (props) => {

	const {addTodo} = props
	const [inputValue, setInputValue] = useState('')
	const formSubmitHandler = (event) => {
		event.preventDefault()
		if (inputValue) {
			addTodo(inputValue)
			setInputValue('')
		}
	}



	return (<form className={styles.Form}
								onSubmit={(e) => formSubmitHandler(e)}>
			<Input type="text" value={inputValue} onChange={setInputValue}/>
		<Button type="submit" >Click</Button>
	</form>)
}

export default Form
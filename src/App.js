import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import './App.css'
import HeaderTodo from './Components/Todos/TodoHeader/HeaderTodo'
import ListTodo from './Components/Todos/TodoBody/ListTodo'
import NotificationTodo from './Components/Todos/TodoFooter/NotificationTodo'
import ActionTodo from './Components/Todos/TodoBody/ActionTodo'



function App() {

	const [todos, setTodos] = useState([])

	const addTodoHandler = (text) => {

		const newTodo = {
			text: text,
			isCompleted: false,
			id: uuidv4(),
		}

		setTodos([...todos, newTodo])
	}

	const completedTodoHandler = ( id ) => {
		setTodos(todos.map( (todo) => {
			return (id === todo.id
				? {...todo, isCompleted: !todo.isCompleted}
				: {...todo})
		}))
	}

	const clearAllTodos = () => {
		setTodos([])
	}

	const deleteCompletedTodos = () => {
		setTodos(todos.filter( (todo) => !todo.isCompleted))
	}

	const deleteTodoHandler = (id) => {
		setTodos(todos.filter( (todo) => todo.id !== id))
	}

	const countCompletedTodos = todos.filter(todo => todo.isCompleted).length

  return (<div className="App">
		<HeaderTodo addTodo={addTodoHandler}/>
		<ActionTodo todos={todos}
								clearAll={clearAllTodos}
								deleteCompleted={deleteCompletedTodos}
								completedTodo={countCompletedTodos}
		/>
		<ListTodo todos={todos}
							deleteTodo={deleteTodoHandler}
							completedTodo={completedTodoHandler}
		/>
		<NotificationTodo todos={todos} countTodos={countCompletedTodos}/>
	</div>)
}

export default App

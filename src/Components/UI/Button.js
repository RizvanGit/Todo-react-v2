import styles from './Button.module.css'
const Button = (props) => {
	const {children, text} =props
	return ( <button
		{...props}
		className={styles.Button}
	>
		{children}
	</button>)
}
export default Button
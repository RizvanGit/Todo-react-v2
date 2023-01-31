import styles from './Input.module.css'

const Input = ( props ) => {
	const { onChange } = props
	return <input {...props}
								className={styles.Input}
								placeholder="Enter your TODO..."
								onChange={( e ) => onChange( e.target.value )}
	/>
}

export default Input
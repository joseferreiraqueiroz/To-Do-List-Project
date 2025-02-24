import styles from './HeaderStyle.module.css'
import Logo from '../assets/Logo.svg'

const Header = () => {
  return (
    <div className={styles.ContentHeader}>
      <img src={Logo} />        
    </div>
  )
}

export default Header
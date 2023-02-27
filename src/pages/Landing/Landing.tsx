// stylesheets
import logo from '../../assets/icons/espresso.jpg'
import icon from '../../assets/icons/cappucinos.jpg'
import img from '../../assets/icons/latteArt.jpg'
import styles from './Landing.module.css'

// services
import * as authService from '../../services/authService'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
  handleLogout: () => void;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user, handleLogout } = props

  const handleDeleteAccount = async(): Promise<void> => {
    await authService.deleteAccount()
    handleLogout()
  }

  return (
    <main className={styles.container}>
      <h1>Coffee Shops</h1>
      <img src={img} alt='flat' />
      <img src={logo} alt='beans' />
      <img src={icon} alt='cap' />
      { user &&
        <button onClick={handleDeleteAccount}>
          DELETE ACCOUNT
        </button>
      }
    </main>
  )
}

export default Landing

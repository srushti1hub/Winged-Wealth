import { useAppContext } from '../../context/context'

const styles = {
  wrapper:
    'flex min-h-screen items-center justify-center bg-[#1d1d1d] text-gray-200',
  button: 'rounded-xl border px-10 py-5',
}

const Login = ({ login }) => {
  const { connectWalletHandler } = useAppContext()

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={connectWalletHandler}>
        Connect with Metamask
      </button>
    </div>
  )
}

export default Login

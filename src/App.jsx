import styles from './style';


function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            Navbar
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Hero
        </div>
      </div>
      <div className={`bg-primary ${styles.padingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Stats
        </div>
      </div>
    </div>
  )
}

export default App

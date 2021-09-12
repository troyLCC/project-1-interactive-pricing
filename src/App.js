
// import './App.css';
import Header from "./components/header/Header"
import Interactive_Pricing from './components/card/Interactive_Pricing';
import Card from './components/card/Card'
import styles from "./App.module.css"
function App() {
  return (
    <div className={styles.background1}>
      <div className={styles.background2}></div>
      <Header/>
      <Card>
      <Interactive_Pricing /> 
      </Card>
      <footer>
        Testing Footer
      </footer>
     
     
    </div>
  );
}

export default App;

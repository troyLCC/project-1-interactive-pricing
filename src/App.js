
import './App.css';
import Header from "./components/header/Header"
import Interactive_Pricing from './components/card/Interactive_Pricing';
import Card from './components/card/Card'
function App() {
  return (
    <div>
      <Header/>
      <Card>
      <Interactive_Pricing /> 
      </Card>
     
     
    </div>
  );
}

export default App;

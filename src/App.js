
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Players from './pages/PlayersComponent';
import SignUp from './pages/SignUpRegistration';
import Signin from './pages/Signin';
import Navbar from './View.js/Navbar';
import Gallery from './pages/Gallery';
import PlayerComponentAdmin from './pages/PlayersComponentAdmin';
import FinacialStatement from './pages/FinancialStatement' 

function App() {

  console.log("Hello")

  fetch('http://localhost:8080/api/v1/players');

  return (
    <Router>
      <div className='App'>
        
    <Navbar/>
        <div className='content'>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/home' exact component={Home}></Route>
            <Route path='/gallery' exact component={Gallery}></Route>
            <Route path='/players' exact component={Players}></Route>
            <Route path='/signin' exact component={Signin}></Route>
            <Route path='/signup' exact component={SignUp}></Route>
            <Route path='/about' exact component={PlayerComponentAdmin}></Route>
            <Route path="/edit-player/:id" component={SignUp}></Route>
            <Route path='/finances' exact component={FinacialStatement}></Route>
            <Redirect to='/'/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

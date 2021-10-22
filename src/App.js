
import './App.css';
import UserName from './User/User';
const user = {
  login:'developer21',
  password:123456
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <UserName name={user}/>
      </header>
    </div>
  );
}

export default App;

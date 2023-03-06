import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import CartWidget from './Components/CartWidget/CartWidget';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  let greeting = 'Lo sentimos, el producto no está disponible'
  return (
    <div className="App">
      <header className='header'>
        <NavBar></NavBar>
      </header>
      <body>
        <div class="d-flex flex-column min-vh-100 min-vw-100">
          <div class="d-flex flex-grow-1 justify-content-center align-items-center">
           <ItemListContainer greeting={greeting}></ItemListContainer>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;





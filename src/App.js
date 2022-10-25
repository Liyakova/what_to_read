import './App.css';
import Books from './Components/Books/Books';
import AllCategories from './Components/Filter/AllCategories';
import List from './Components/ListToRead/List';


function App() {
  return (
    <div>

      <div className='App'>
        <AllCategories />        
      </div>

      <div className='block'>
            <div className='listToRead'>
              <List />
            </div>

            <div className='books'>
              <Books />
            </div>
      </div>
      
    </div>
  
  )
}

export default App;

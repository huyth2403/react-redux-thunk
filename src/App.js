import './App.css';
import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {_fetchAllPeople} from './redux/actions/PeopleAction'

function App() {

  const data = useSelector(state => state.people)

  const dispatch = useDispatch()


  const listPeople = (data) => {
    return <ul>
      {data.map(el => <li key={Math.random()}>{el.name + ' - ' + el.age}</li>)}
    </ul>
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {!data.loading && <p>{data.data.length > 0 ? listPeople(data.data) : 'Empty'}</p>}<br/>
        {data.loading ? 'Loading...' : ''}
        <button onClick={() => dispatch(_fetchAllPeople())}>Fetch People</button>
      </header>
    </div>
  );
}

export default App;

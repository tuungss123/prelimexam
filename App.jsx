import './App.css'
import Bible from './components/biblequiz'

function App() {

  return (
    <>
    <div className='both'>
    <div className='true'>
      <span>TRUE Condition</span>
      <Bible 
      answer = {true}
      />
      </div>
      <div className='false'>
        <span>FALSE Condition</span>
      <Bible 
      answer={false}/>
      </div>
      </div>
    </>
  )
}

export default App

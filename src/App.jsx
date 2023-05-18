import './App.css'
import SummaryEmail from './components/SummaryEmail'

function App() {

  const [sprintTickets, setSprintTickets] = useState([])
  const [bauTickets, setBauTickets] = useState([])
  const [goals, setGoals] = useState([])

  return (
    <>
      <div>
        <h1>Summary Email Creator</h1>
        
        <SummaryEmail />
      </div>
    </>
  )
}

export default App

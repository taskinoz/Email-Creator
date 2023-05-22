import { useState } from 'react'
import './App.css'
import SummaryEmail from './components/SummaryEmail'
import TicketInput from './components/TicketInput'
import Sprint from './components/Sprint'
import GoalsInput from './components/GoalsInput'

function App() {

  const [goals, setGoals] = useState([])

  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState('');

  const [bauTickets, setBauTickets] = useState([]);
  const [newBauTicket, setNewBauTicket] = useState('');

  const [sprint, setSprint] = useState(0);

  const addTicket = (ticket) => {
    setTickets([...tickets, ticket]);
    setNewTicket('');
  };

  const addBauTicket = (bauTicket) => {
    setBauTickets([...bauTickets, bauTicket]);
    setNewBauTicket('');
  };

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };
  

  return (
    <>
      <div>
        <h1>Summary Email Creator</h1>
        <TicketInput addTicket={addTicket} />
        <TicketInput addTicket={addBauTicket} />
        <Sprint sprint={sprint} setSprint={setSprint} />
        <GoalsInput addGoal={addGoal} />
        <SummaryEmail 
          tickets={tickets}
          bauTickets={bauTickets}
          goals={goals}
          sprint={sprint}
        />
      </div>
    </>
  )
}

export default App

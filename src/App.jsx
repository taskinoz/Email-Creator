import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem('tickets'));
    const storedBauTickets = JSON.parse(localStorage.getItem('bauTickets'));
    const storedGoals = JSON.parse(localStorage.getItem('goals'));
    const storedSprint = JSON.parse(localStorage.getItem('sprint'));
    if (storedSprint) { setSprint(storedSprint); }
    if (storedGoals) { setGoals(storedGoals); }
    if (storedBauTickets) { setBauTickets(storedBauTickets); }
    if (storedTickets) { setTickets(storedTickets); }
  }, []);

  const addTicket = (ticket) => {
    setTickets([...tickets, ticket]);
    setNewTicket('');
    localStorage.setItem('tickets', JSON.stringify([...tickets, ticket]));
  };

  const addBauTicket = (bauTicket) => {
    setBauTickets([...bauTickets, bauTicket]);
    setNewBauTicket('');
    localStorage.setItem('bauTickets', JSON.stringify([...bauTickets, bauTicket]));
  };

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
    localStorage.setItem('goals', JSON.stringify([...goals, goal]));
  };

  const setSprintNumber = (sprintNumber) => {
    setSprint(sprintNumber);
    localStorage.setItem('sprint', JSON.stringify(sprintNumber));
  };
  

  return (
    <>
      <div>
        <h1>Summary Email Creator</h1>
        <TicketInput addTicket={addTicket} />
        <TicketInput addTicket={addBauTicket} />
        <Sprint sprint={sprint} setSprintNumber={setSprintNumber} />
        <GoalsInput addGoal={addGoal} />
        <SummaryEmail 
          tickets={tickets}
          bauTickets={bauTickets}
          goals={goals}
          sprint={sprint}
        />
        <button 
          onClick={() => {
            localStorage.clear();
            setTickets([]);
            setBauTickets([]);
            setGoals([]);
            localStorage.setItem('sprint', JSON.stringify(0));
          }}
        >
          Clear
        </button>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import SummaryEmail from './components/SummaryEmail'
import TicketInput from './components/TicketInput'

function App() {

  const [goals, setGoals] = useState([])
  const [newGoal, setNewGoal] = useState('')

  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState('');

  const [bauTickets, setBauTickets] = useState([]);
  const [newBauTicket, setNewBauTicket] = useState('');

  const addTicket = (ticket) => {
    setTickets([...tickets, ticket]);
    setNewTicket('');
  };

  const addBauTicket = (bauTicket) => {
    setBauTickets([...bauTickets, bauTicket]);
    setNewBauTicket('');
  };

  const updateTicket = (id, field, value) => {
    const updatedTickets = tickets.map((ticket) => {
      if (ticket.id === id) {
        return {
          ...ticket,
          [field]: value,
        };
      }
      return ticket;
    });
    setTickets(updatedTickets);
  };

  return (
    <>
      <div>
        <h1>Summary Email Creator</h1>

        <TicketInput addTicket={addTicket} />
        <TicketInput addTicket={addBauTicket} />

        <SummaryEmail 
          tickets={tickets}
          bauTickets={bauTickets}
          goals={goals}
        />
      </div>
    </>
  )
}

export default App

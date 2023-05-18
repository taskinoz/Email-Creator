import React, { useState } from 'react';
import { statusOptions } from './Status';
import TicketInput from './Tickets';

const SummaryEmail = () => {
    const [tickets, setTickets] = useState([]);
    const [newTicket, setNewTicket] = useState('');

    const addTicket = () => {
        const ticket = {
            id: tickets.length + 1,
            description: newTicket,
            status: '',
        };
        setTickets([...tickets, ticket]);
        setNewTicket('');
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
        <div>
            <h1>Summary Email Creator</h1>
            <div>
                <input
                    type="text"
                    value={newTicket}
                    onChange={(e) => setNewTicket(e.target.value)}
                    placeholder="New Ticket"
                />
                <button onClick={addTicket}>Add Ticket</button>
            </div>
            <ul>
                <li>EPIC - Business As Usual</li>
                <li>High Priority Items</li>
            </ul>
            <TicketInput
                title="Must Have"
                tickets={tickets.filter((ticket) => ticket.type === 'must-have')}
                updateTicket={updateTicket}
            />
            <TicketInput
                title="Nice to Have"
                tickets={tickets.filter((ticket) => ticket.type === 'nice-to-have')}
                updateTicket={updateTicket}
            />
            <h2>Email Preview</h2>
            <p>This is a wrap of Sprint 12 for our Code Runners.</p>
            <h3>How we did:</h3>
            <ul>
                {tickets.map((ticket) => (
                    <li key={ticket.id}>
                        Relative to our Sprint Goal "{ticket.description}", we have {ticket.status === 'success' ? 'succeeded' : 'not succeeded'} this sprint. {statusOptions.find((option) => option.value === ticket.status)?.emojii}
                        Success being defined as "{ticket.status === 'success' ? 'Completing' : 'Releasing'} {ticket.description}"
                    </li>
                ))}
            </ul>
            {/* Include the remaining email content */}
        </div>
    );
};

export default SummaryEmail;

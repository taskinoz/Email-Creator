import React, { useState } from 'react';
import { statusOptions } from './Status';
import TicketInput from './Ticket';

const SummaryEmail = ({
    tickets,
    bauTickets,
    goals,
}) => {

    return (
        <div>
            <ul>
                <li>EPIC - Business As Usual</li>
                <ul>
                    {tickets.map((ticket) => (
                        <li key={ticket.id}>
                            {ticket.description}
                        </li>
                    ))}
                </ul>
                <li>High Priority Items</li>
                <ul>
                    {bauTickets.map((ticket) => (
                        <li key={ticket.id}>
                            {ticket.description}
                        </li>
                    ))}
                </ul>
            </ul>
            <h2>Email Preview</h2>
            <p>This is a wrap of Sprint 12 for our Code Runners.</p>
            <h3>How we did:</h3>
            <ul>
                {goals.map((goal) => ( 
                    <li key={goal?.id}>
                        Relative to our Sprint Goal "{goal?.description}", we have {ticket?.status === 'success' ? 'succeeded' : 'not succeeded'} this sprint. {statusOptions.find((option) => option.value === ticket.status)?.emojii}
                        Success being defined as "{ticket?.status === 'success' ? 'Completing' : 'Releasing'} {ticket?.description}"
                    </li>
                ))}
            </ul>
            {/* Include the remaining email content */}
        </div>
    );
};

export default SummaryEmail;

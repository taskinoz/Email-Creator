import React, { useState } from 'react';
import { statusOptions } from './Status';
import TicketInput from './Ticket';
import Ticket from './Ticket';
import Goals from './Goals';

const SummaryEmail = ({
    tickets,
    bauTickets,
    goals,
    sprint,
}) => {

    const mustHaveTickets = tickets.filter((ticket) => ticket.type === "mustHave");
    const niceToHaveTickets = tickets.filter((ticket) => ticket.type === "niceToHave");
    const highPriorityTickets = bauTickets.filter((ticket) => ticket.type === "mustHave");

    const mustHaveSuccess = mustHaveTickets.filter((ticket) => ticket.status === "success");
    const niceToHaveSuccess = niceToHaveTickets.filter((ticket) => ticket.status === "success");
    const highPrioritySuccess = highPriorityTickets.filter((ticket) => ticket.status === "success");

    const mustHaveQA = mustHaveTickets.filter((ticket) => ticket.status === "qaapproved");
    const niceToHaveQA = niceToHaveTickets.filter((ticket) => ticket.status === "qaapproved");

    return (
        <div>
            <p>This is a wrap of Sprint {sprint} for our Code Runners.</p>
            <p style={{textDecoration:"underline"}}>How we did:</p>
            {goals.map((goal, index) => ( 
                <Goals key={goal.goal+index} goal={goal.goal} reason={goal.reason} />
            ))}

            <ul>
                <li>However, we have:</li>
                <ul>
                    <li>Completed {mustHaveSuccess.length} out of {mustHaveTickets.length} Must Have items {mustHaveQA.length > 0 && <>(with {mustHaveQA.length} in QA)</>}</li>
                    <li>Completed {niceToHaveSuccess.length} out of {niceToHaveTickets.length} Nice To Have items {niceToHaveQA.length > 0 && <>(with {niceToHaveQA.length} in QA)</>}</li>
                    <li>Completed {highPrioritySuccess.length} out of {highPriorityTickets.length} High priority items added during the sprint</li>
                </ul>
            </ul>
            <p style={{textDecoration:"underline"}}>Details Below:</p>
            <ul>
                <li><strong>EPIC - Business As Usual</strong></li>
                <ul>
                    {tickets.map((ticket) => <Ticket ticket={ticket} />)}
                </ul>
                <li><strong>High Priority Items</strong></li>
                <ul>
                    {bauTickets.map((ticket) => <Ticket ticket={ticket} />)}
                </ul>
            </ul>
            <p style={{textDecoration:"underline"}}>What we have done:</p>
            <ul>
                <li>We have retrospected on this sprint and learnt the lessons we needed to learn to shoot for better next time!</li>
                <li>We have documented our learnings so we don't repeat them</li>
                <li>We have extracted a few key action items which we are acting upon</li>
            </ul>
            <p>Well done Code Runners!</p>
            <p>Thanks all</p>
        </div>
    );
};

export default SummaryEmail;

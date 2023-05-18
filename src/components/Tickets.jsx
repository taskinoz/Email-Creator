import { statusOptions } from "./Status";

const TicketInput = ({ title, tickets, updateTicket }) => {
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {tickets.map((ticket) => (
                    <li key={ticket.id}>
                        <span>{ticket.description}</span>
                        <select
                            value={ticket.status}
                            onChange={(e) => updateTicket(ticket.id, 'status', e.target.value)}
                        >
                            <option value="">Select Status</option>
                            {statusOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TicketInput;

const Ticket = ({ ticket, updateTicket }) => {
    return (
        <li>
            <span>{ticket.description}</span>
            <select
                value={ticket.status}
                onChange={(e) => updateTicket(ticket.id, 'status', e.target.value)}
            >
                <option value="">Select Status</option>
                {statusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </li>
    );
}
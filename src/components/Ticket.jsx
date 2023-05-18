import { statusOptions } from "./Status";

const Ticket = ({ ticket }) => {
    return (
        <li>
            <span>{ticket?.description}</span>
            <select
                value={ticket?.status}
                onChange={(e) => updateTicket(ticket?.id, 'status', e.target.value)}
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

export default Ticket;
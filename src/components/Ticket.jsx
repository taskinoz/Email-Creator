import { statusOptions } from "./Status";

const Ticket = ({
    ticket,
    mustHave,
}) => {
    let status = statusOptions.find((option) => option.value === ticket.status)
    return (
        <li key={ticket.id}>
            <span style={{background:mustHave?"green":"blue"}}>{mustHave?"[Must Have]":"[Nice to Have]"}</span> <span style={{textDecoration:status.value==="success"?"line-through":"none"}}>{ticket.description}</span> {status.emojii} <span style={{background:status.color}}>{status.name.toUpperCase()}</span>
        </li>
    );
}

export default Ticket;
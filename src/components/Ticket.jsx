import { statusOptions } from "./Status";

const Ticket = ({
    ticket,
}) => {
    let status = statusOptions.find((option) => option.value === ticket.status)
    let mustHave = ticket.type === "mustHave";
    return (
        <li key={ticket.id}>
            <span style={{background:mustHave?"#0f0":"#0ff",color:'#000'}}><strong>{mustHave?"[Must Have]":"[Nice to Have]"}</strong></span> <span style={{textDecoration:status.value==="success"?"line-through":"none"}}>{ticket.description}</span> {status.emojii} <span style={{background:status.color,color:'#fff'}}><strong>{status.name.toUpperCase()}</strong></span>
        </li>
    );
}

export default Ticket;
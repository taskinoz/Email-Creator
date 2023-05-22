import { useState } from "react";
import { statusOptions } from "./Status";

const TicketInput = ({
    addTicket,
}) => {
    const [ticket, setTicket] = useState({});
    return (
        <div>
            <select value={ticket?.type??""} onChange={(e) => {
                let t = { ...ticket };
                t.type = e.target.value;
                setTicket(t)
            }}>
                <option>Select Type</option>
                <option value="mustHave">Must Have</option>
                <option value="niceToHave">Nice to Have</option>
            </select>
            <input
                type="text"
                placeholder="[SP-123] Fix some stuff"
                value={ticket?.description??""}
                onChange={(e) => {
                    let t = {...ticket};
                    t.description = e.target.value;
                    setTicket(t)
                }}
            />
            <select value={ticket?.status??""} onChange={(e) => {
                let t = { ...ticket };
                t.status = e.target.value;
                setTicket(t)
            }}>
                <option>Select Status</option>
                {statusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name.toUpperCase()}
                    </option>
                ))}
            </select>
            <button onClick={() => {
                addTicket(ticket);
                setTicket({});
            }}>Add Ticket</button>
        </div>
    );
};

export default TicketInput;
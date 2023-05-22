import { useState } from "react";

const GoalsInput = ({ addGoal }) => {
    const [goal, setGoal] = useState({});

    const updateGoal = (newGoal) => {
        setGoal({...goal, ...newGoal});
    }

    return (
        <div>
            <select value={goal?.status??""} onChange={(e) => updateGoal({status: e.target.value})}>
                <option>Select Status</option>
                <option value="succeeded">Succeeded</option>
                <option value="not succeeded">Not Succeeded</option>
            </select>
            <input type="text" placeholder="Sprint Goal" value={goal?.goal??""} onChange={(e) => updateGoal({goal: e.target.value})} />
            <input type="text" placeholder="Sprint Reason" value={goal?.reason??""} onChange={(e) => updateGoal({reason: e.target.value})} />
            <button onClick={() => {
                addGoal(goal);
                setGoal({});
            }}>Add Goal</button>
        </div>
    );
}

export default GoalsInput;
const Goals = ({
    goal,
    reason,
    status,
}) => {
    return (
        <ul>
            <li>Relative to our Sprint Goal <strong>"{goal}"</strong>, we have {status} this sprint. 🏆 </li>
            <ul>
                <li>Success being defined as "{reason}"</li>
            </ul>
        </ul>
    )
}

export default Goals;
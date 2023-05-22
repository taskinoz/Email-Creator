const Goals = ({
    goal,
    reason,
}) => {
    return (
        <ul>
            <li>Relative to our Sprint Goal <strong>"{goal}"</strong>, we have succeeded this sprint. 🏆 </li>
            <ul>
                <li>Success being defined as "{reason}"</li>
            </ul>
        </ul>
    )
}

export default Goals;
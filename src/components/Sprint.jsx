const Sprint = ({
    setSprintNumber,
    sprint,
}) => {
    return (
        <div>
            <input
                type="number"
                placeholder="Sprint Number"
                value={sprint}
                onChange={(e) => setSprintNumber(e.target.value)}
            />
        </div>
    )
}

export default Sprint;
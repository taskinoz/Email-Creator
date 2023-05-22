const Sprint = ({
    sprint,
    setSprint,
}) => {
    return (
        <div>
            <input
                type="number"
                placeholder="Sprint Number"
                value={sprint}
                onChange={(e) => setSprint(e.target.value)}
            />
        </div>
    )
}

export default Sprint;
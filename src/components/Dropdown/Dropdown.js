import './Dropdown.css'

const Dropdown = ({label, value, required, itens, onChange}) => {
    return (
        <div className='dropdown'>
            <label>{label}</label>            
            <select onChange={event => onChange(event.target.value)} required={required} value={value}>
                <option value=""></option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown
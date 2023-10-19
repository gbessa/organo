import './TextField.css'

const TextField = (props) => {

    const formatedPlaceholder = `${props.placeholder}...`

    const onType = (event) => {
        props.onChange(event.target.value)
    }
    
    return(
        <div className='text-field'>
            <label>{props.label}</label>
            <input value={props.value} onChange={onType} required={props.required} placeholder={formatedPlaceholder}/>
        </div>
    )
}

export default TextField
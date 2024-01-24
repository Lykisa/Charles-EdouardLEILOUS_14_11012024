import PropTypes from 'prop-types';

export default function Input({id, type, name, label, options, required}) {

    if (type == 'select') {
        return(
            <>
            <label>{label}</label>
            <select id={id} required={required}>
                {options.map((v, i) => <option key={i} value={v}>{v}</option>)}
            </select>
            </>
        )
    }

    return (
        <>
            <label>{label}</label>
            <input id={id} type= {type} name={name} label={label} value={options} required={required}/>
        </>
    )
}

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.any,
    required: PropTypes.string
}
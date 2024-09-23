/**
 * 
 * @param {string} placeholder 
 * @param {string} value 
 * @param {function} onChange 
 * @returns 
 */

export function Input ({label, placeholder, value, onChange}) {
    return <div>
        <input 
            type="text" 
            className="form-control" 
            value={value} 
            placeholder={placeholder} 
            label={label}
            onChange={ (e) => onChange(e.target.value) } 
        />
    </div>
}
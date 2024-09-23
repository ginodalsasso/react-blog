/**
 * 
 * @param children
 * @param {"primary" | "secondary" | "danger" } variant
 * @returns {JSX.Element}
 * @constructor
 */

export function Button({variant = 'primary', ...props}) {
    const newProps = {
        ...props,
        className: `btn btn-${variant}`
    }

    if(props.href) { // si on a un href
        return (
            <a {...newProps} />
        )
    }
    return (
        < button {...newProps} />
    )
}
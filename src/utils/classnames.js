export function activeClassIf (condition, className) { // la condition puis la classe par defaut
    if(!condition) {
        return className
    }
    if(!className) {
        return 'active'
    }
    return `active ${className}`
}
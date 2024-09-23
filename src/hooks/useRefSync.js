import { useRef } from 'react'

export function useRefSync (data) { 
    const dataRef = useRef(data) // on crée une ref pour stocker les données
    dataRef.current = data // on met à jour les données
    return dataRef // on retourne la ref
}
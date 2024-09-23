import {useEffect, useRef, useState} from "react";
import {useRefSync} from "./useRefSync";


/**
 * @param {string} url
 * @param {FetchEventInit} options
 */

export function useFetch (url, options) {
    const [loading, setLoading] = useState(true) 
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const optionsRef = useRefSync(options) // on stocke les options dans une ref

    useEffect(() => {
        fetch(url, {
            ...options, // permet de passer des options supplémentaires
            headers: {
                Accept: 'application/json; charset=UTF-8', 
                ...optionsRef.current?.headers // on récupère les headers
            }
        }).then(r => r.json()) // on parse la réponse en JSON
        .then(data => { // on récupère les données
            setData(data) // on les stocke dans le state
        }).catch((e) => {  // en cas d'erreur
            setError(e)
        }).finally(() => { // une fois la requête terminée
            setLoading(false) // on arrête le chargement
        })
    }, [url]) // on surveille l'URL et les options;

    return {
        loading, data, error, setData // on retourne les données
    }
}
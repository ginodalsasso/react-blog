import { useState, useEffect } from 'react';

export function useHashNavigation() {

    const [hash, setHash] = useState(window.location.hash); // Initialiser avec le hash actuel

    useEffect(() => {
        const handleHashChange = () => { // Fonction pour mettre à jour le hash
            setHash(window.location.hash);
        };

        // Écoute le changement de hash
        window.addEventListener('hashchange', handleHashChange);

        // Nettoyage lors du démontage
        return () => {
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, []);

    const cleanedHash = hash.replace('#', '').toLowerCase(); // Nettoyer le hash

    return { 
        page: cleanedHash ? cleanedHash.split(':')[0]: 'home',
        param: cleanedHash.split(':')[1] 
    }; // Retourner la page et le paramètre
}
import { useFetch } from "../hooks/useFetch.js"
import { Spinner } from "../components/Spinner.jsx"
import { Alert } from "../components/Alert.jsx"
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";


export function Single ({postId}) {

    const {data: post, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`); // on récupère les données de l'article

    useDocumentTitle(post?.title || 'Chargement...')
    
    if(loading) { // si le chargement est en cours
        return <Spinner />
    }

    if(error) { // si une erreur survient
        return <Alert type="danger">{error.toString()}</Alert>
    }
    return <>
        <h1 className="mb-3">{post.title}</h1>
        <img src={`https://picsum.photos/id/${post.id}/800/600`} alt="" className="img-fluid img-thumbnail my-3"/>
        <p>{post.body}</p>
        <p>
            <a href={`#post:${post.id + 1} `}>Article suivant</a>
        </p>

    </>
}
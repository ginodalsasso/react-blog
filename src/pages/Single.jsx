import { useFetch } from "../hooks/useFetch.js";
import { Spinner } from "../components/Spinner.jsx";
import { Alert } from "../components/Alert.jsx";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";
import { useToggle } from "../hooks/useToggle.js";
import { Button } from "../components/Button.jsx";
import { Modal } from "../components/Modal.jsx";
import { EditPostModal } from "./EditPostModal.jsx";

export function Single({ postId }) {
    const {
        data: post,
        loading,
        error,
        setData,
    } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`); // on récupère les données de l'article

    useDocumentTitle(post?.title || "Chargement...");
    const [isEditing, toggleEditing] = useToggle(false);

    if (loading) {
        // si le chargement est en cours
        return <Spinner />;
    }

    if (error) {
        // si une erreur survient
        return <Alert type="danger">{error.toString()}</Alert>;
    }

    const handleSave = (data) => { // fonction pour sauvegarder les données
        setData({
            ...post, // on garde les données existantes
            ...data, // on ajoute les nouvelles données
        })
        toggleEditing(); // on ferme la modale
    }


    return (
        <>
            <h1 className="mb-3">{post.title}</h1>
            <img
                src={`https://picsum.photos/id/${post.id}/800/600`}
                alt=""
                className="img-fluid img-thumbnail my-3"
            />
            <p>{post.body}</p>
            {isEditing && <EditPostModal 
                post={post} 
                onClose={toggleEditing} 
                onSave={handleSave}
            />}
            <Button variant="secondary" onClick={toggleEditing}>
                Editer l'article
            </Button>
            <p>
                <a href={`#post:${post.id + 1} `}>Article suivant</a>
            </p>
        </>
    );
}

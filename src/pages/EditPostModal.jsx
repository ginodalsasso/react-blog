import { Modal } from "../components/Modal";
import { Input } from "../components/forms/Input";
import { Button } from "../components/Button";
import { Alert } from "../components/Alert";
import { useState } from "react";

export function EditPostModal({ post, onClose, onSave }) {
    const [error, setError] = useState(null); // on crée un état pour gérer les erreurs
    const [loading, setLoading] = useState(false); //

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        const data = new FormData(e.target); // on crée un objet FormData à partir du formulaire
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: "PUT",
            body: data,
        })
            .then((r) => r.json()) // on parse la réponse en JSON
            .then((r) => {
                onSave(Object.fromEntries(data.entries())); // on appelle la fonction onSave avec les données du formulaire
            })
            .catch((error) => setError(error)) // on attrape les erreurs
            .finally(() => setLoading(false)); // on arrête le chargement
    };

    return (
        <Modal onClose={onClose}>
            <h1>Editer l'article</h1>
            {error && <Alert type="danger">{error.toString()}</Alert>}
            <form action="" onSubmit={handleSubmit} className="vstack gap-3">
                <Input name="title" label="Titre" defaultValue={post.title} />
                <Input
                    name="body"
                    label="Contenu"
                    type="textarea"
                    defaultValue={post.body}
                />
                <div className="hstack gap-2 justify-content-end ">
                    <Button
                        disabled={loading}
                        type="button"
                        variant="secondary"
                        onClick={onClose}
                    >
                        Annuler
                    </Button>
                    <Button disabled={loading} type="submit">
                        Enregistrer
                    </Button>
                </div>
            </form>
        </Modal>
    );
}

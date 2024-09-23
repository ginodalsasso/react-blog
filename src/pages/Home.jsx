import { useDocumentTitle } from "../hooks/useDocumentTitle.js"
import { useFetch } from "../hooks/useFetch.js"
import { Spinner } from "../components/Spinner.jsx"
import { Alert } from "../components/Alert.jsx"

export function Home () {

    useDocumentTitle('Mon blog')
    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    

    return <>
        <h1 className="mb-3">Mon blog</h1>
        {loading && <Spinner />}
        {error && <Alert type="danger">{error.toString()}</Alert>}
        {data && <div className="row gap-4">
            {data.map((post) => (<div key={post.id}> 
                {post.title}

            </div>))}
        </div> }
    </>

}
import { useHashNavigation } from './hooks/useHashNavigation.js';
import {Home} from './pages/Home.jsx';
import {Contact} from './pages/Contact.jsx';
import {Single} from './pages/Single.jsx';
import { NotFound } from './pages/NotFound.jsx';
import {Header} from './components/Header.jsx';

function App() {

    const {page} = useHashNavigation()
    const pageContent = getPageContent(page)

    return (
        <>
        <Header page={page} />
            <div className="container my-3">
                {pageContent}
            </div>
        </>
    ) 
}

function getPageContent (page) {
    if (page === 'home') {
        return <Home />
    }
    if (page === 'contact') {
        return <Contact />
    }
    if (page === 'post') {
        return <Single />
    }
    return <NotFound page={page} />
}
export default App

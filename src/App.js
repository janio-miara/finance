import GlobalStyles from './styles/reset'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from 'react-router-dom'
import ListUsers from './components/UsersList'
import Layout from './components/Layout'
import Providers from './context'
import UserTask from './pages/userTaks'

function App() {
    return (
        <Router>
            <GlobalStyles />
            <Providers>
                <Switch>
                    <Layout>
                        <Route exact path="/">
                            <ListUsers />
                        </Route>
                        <Route path="/tasks/:id">
                            <UserTask />
                        </Route>
                    </Layout>
                </Switch>
            </Providers>
        </Router>
    )
}

export default App

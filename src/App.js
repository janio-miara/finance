import GlobalStyles from './styles/reset'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ListUsers from './components/UsersList'
import Layout from './components/Layout'
import Providers from './context'

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
                        <Route path="/task">
                            <div>Task</div>
                        </Route>
                    </Layout>
                </Switch>
            </Providers>
        </Router>
    )
}

export default App

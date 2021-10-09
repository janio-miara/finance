import { UsersProvider } from './userContext'
import { TaskProvider } from './taskContext'
const Providers = ({ children }) => (
    <UsersProvider>
        <TaskProvider>{children}</TaskProvider>
    </UsersProvider>
)
export default Providers

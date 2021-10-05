import GlobalStyles from './styles/reset'
import Input from './components/input'
import { FaUser } from 'react-icons/fa'

function App() {
    return (
        <>
            <GlobalStyles />
            <div style={{ margin: 100 }}>
                <Input />
                <Input icon={<FaUser />} />
            </div>
        </>
    )
}

export default App

import GlobalStyles from './styles/reset'
import Input from './components/input'
import { FaUser } from 'react-icons/fa'
import Modal from './components/Modal'
import { useState } from 'react'
import Button from './components/Button'
import ListUsers from './components/ListUsers'

function App() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <GlobalStyles />
            <div style={{ margin: 100 }}>
                <Button onClick={() => setOpen(true)}>Cadastrar Usuario</Button>
                <Modal
                    open={open}
                    close={() => setOpen(false)}
                    title="Cadastrar Usuario"
                >
                    <Input icon={<FaUser />} />
                </Modal>
                <ListUsers />
            </div>
        </>
    )
}

export default App

import React from 'react'
import ButonRadius from '../ButtonRadius'
import { FaTrash } from 'react-icons/fa'
import { Container } from './styles'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'
import { useTask } from '../../context/taskContext'

const CardTaskList = ({ task }) => {
    return (
        <Container>
            <div className={'description'}>
                {task.id === 1 ? (
                    <>
                        <RiCheckboxBlankCircleLine />
                        <p>{task.description}</p>
                    </>
                ) : (
                    <div className={'done'}>
                        <RiCheckboxCircleFill />
                        <p>{task.description}</p>
                    </div>
                )}
            </div>
            <div className={'action'}>
                <ButonRadius
                    icon={<FaTrash />}
                    variant={'error'}
                    outline
                    onClick={() => console.log()}
                />
            </div>
        </Container>
    )
}

export default CardTaskList

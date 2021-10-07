import React from 'react'
import ReactDOM from 'react-dom'
import * as Style from './styles'
import Button from '../Button'
import PropTypes from 'prop-types'

export const Modal = ({
    actionClick,
    textAction,
    open,
    title,
    close,
    children,
    ...props
}) => {
    return ReactDOM.createPortal(
        <>
            {open && (
                <Style.FullScreen>
                    <Style.Container {...props}>
                        <header>
                            <div className="logo">{title}</div>
                            <button className="close" onClick={close}>
                                x
                            </button>
                        </header>
                        <div className="body">{children}</div>
                        <footer>
                            {textAction && (
                                <Button color="primary" onClick={actionClick}>
                                    {textAction}
                                </Button>
                            )}
                            <Button onClick={close} outline>
                                Fechar
                            </Button>
                        </footer>
                    </Style.Container>
                </Style.FullScreen>
            )}
        </>,
        document.body
    )
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.any,
    open: PropTypes.bool,
    title: PropTypes.string,
    close: PropTypes.func,
    actionClick: PropTypes.func,
}

export default Modal

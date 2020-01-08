import React from 'react'
import Modal from 'react-modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFile} from '@fortawesome/free-regular-svg-icons';


import styles from './TrackItem.module.css'

Modal.setAppElement('#root');

export default class TrackItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({
            modalIsOpen: true
        });
        document.body.classList.add('modal-opened');
    }

    afterOpenModal() {

    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        })
    }

    render() {

        const modal = this.state.modalIsOpen
            ? <Modal
                className={styles.modal}
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                shouldCloseOnOverlayClick={true}
                contentLabel="Example Modal"
            >
                <button className={styles.closeBtn} onClick={this.closeModal}>kill</button>
                <div className={styles.modalContent}>
                    <h4
                        className={styles.modalTitle}
                        dangerouslySetInnerHTML={{__html: this.props.track.song}}
                    />
                    <div
                        className={styles.modalBody}
                        dangerouslySetInnerHTML={{__html: this.props.track.lyrics}}
                    />
                </div>
            </Modal>
            : null

        return (
            <li className={styles.item}>
                <div className={styles.track}>
                    <h5 className={styles.trackTitle}>{this.props.track.song}</h5>
                    <button className={styles.openBtn} onClick={this.openModal}>
                        <FontAwesomeIcon icon={faFile}/>
                    </button>
                    {modal}</div>
            </li>
        )
    }

}
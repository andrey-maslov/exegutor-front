import React from 'react'
import Modal from 'react-modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';


import styles from './TrackItem.module.css'

Modal.setAppElement('#root');

export default class TrackItem extends React.Component {

    constructor(props){
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
        })
    }

    afterOpenModal() {

    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        })
    }

    render(){
        return (
            <li className={styles.track}>
                <h5 className={styles.trackTitle}>{this.props.track.song}</h5>
                <button className={styles.openBtn} onClick={this.openModal}>
                    <FontAwesomeIcon icon={faFile} />
                </button>
                <Modal
                    className={styles.modal}
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    shouldCloseOnOverlayClick={true}
                    contentLabel="Example Modal"
                >
                    <button className={styles.closeBtn} onClick={this.closeModal}>close</button>
                    <div className={styles.modalContent}>
                        <h4 dangerouslySetInnerHTML={{__html: this.props.track.song}}/>
                        <div dangerouslySetInnerHTML={{__html: this.props.track.lyrics}}/>
                    </div>
                </Modal>
            </li>
        )
    }

}
import React, {useState} from 'react';
import Carousel, {Modal, ModalGateway} from 'react-images';
import s from './shows-item.module.scss';
import 'moment/locale/ru';

const moment = require('moment');

export default (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    moment.locale('ru');
    const date = moment(props.show.date);

    return (
        <li className={s.item}>
            <div className={s.header}>
                <img
                    className={s.thumb}
                    src={props.show.thumb}
                    alt=""
                    onClick={() => setModalIsOpen(true)}
                />
                <div className={s.headerContent}>
                    <div className={s.date}>{date.format('D MMMM')}</div>
                    <div className={s.title}>{props.show.place}</div>
                </div>
            </div>
            <div className={s.body}>
                <h3 className={s.title}>{props.show.title}</h3>
            </div>
            <div className={s.links}>
                <a className={s.link} href={props.show.link}>Билеты</a>
            </div>
            <ModalGateway>
                {modalIsOpen ? (
                    <Modal onClose={() => setModalIsOpen(false)}>
                        <Carousel
                            views={ [{src: props.show.image_large}] }
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </li>
    )
}
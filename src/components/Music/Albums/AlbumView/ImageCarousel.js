import React, {useState} from 'react';
import Slider from "react-slick";
import Carousel, {Modal, ModalGateway} from 'react-images';

const ImageCarousel = (props) => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [imgIndex, setImgIndex] = useState(0)

    const imagesMarkup = props.images.map((image, index) => {
        return (
            <img
                onClick = {() => {toggleLightbox(index)}}
                src={image.image.sizes.medium}
                alt={image.image.alt}
                key={image.image.id}/>
        )
    });

    const toggleLightbox = (selectedIndex: number) => {
        setModalIsOpen(true);
        setImgIndex(selectedIndex);
    }

    const images = props.images.map((item) => {
        return { src: item.image.sizes.large }
    })

    return (
        <div>

            <ModalGateway>
                {modalIsOpen ? (
                    <Modal onClose={() => setModalIsOpen(false)}>
                        <Carousel
                            views={ images }
                            currentIndex={imgIndex}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>

            <Slider {...settings}>
                {imagesMarkup}
            </Slider>
        </div>
    );

}

export default ImageCarousel;
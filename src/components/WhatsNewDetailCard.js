import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const WhatsNewDetailCard = ({ setModalVisible, modalData, baseUrl }) => {
    return (
        <div className="whstpopu">
            <div className="whstpopu1" onClick={() => { setModalVisible(modalVisible => !modalVisible) }}>
                <span className="icon flaticon-cancel-music" >
                    <FontAwesomeIcon icon={faX} />
                </span>
            </div>
            <div className="whstpopu2">
                <h2>{modalData?.header}</h2>
                <h5>{modalData?.date}</h5>
                <div className=" owdtdds products-style-2 nav-style-2">
                    <div className="item">
                        <div className="lightbox-image" data-fancybox="gallery">
                            <img src={baseUrl + modalData?.media} className='w-100' />
                        </div>
                    </div>
                </div>
                <p>{modalData?.description}</p>
            </div>
        </div>
    )
}

export default WhatsNewDetailCard
import React, { useEffect } from 'react'
import { popup } from '../services/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const PopUp = ({ popUp, baseUrl }) => {

    console.log(`popUp==>`, popUp);

    const hidePopUp = () => {
        let popUp = document.getElementById('popUp');
        sessionStorage.setItem('firstTime', true)
        popUp.classList.add('d-none')
    }

    useEffect(() => {
        let firstTime = sessionStorage.getItem('firstTime');
        let popUp = document.getElementById('popUp');
        if (firstTime) {
            popUp.classList.add('d-none')
        }
    }, []);

    return (
        <div className="popupimg " id='popUp'>
            <div className="popupimgu">
                <img src={baseUrl + popUp?.image} className="w100" />
                <div className="popupimgcl" onClick={hidePopUp}>
                    <span className="icon flaticon-cancel-music" >
                        <FontAwesomeIcon size="xs" className='fab' icon={faXmark} />
                    </span>
                </div>
            </div>
        </div>

    )
}

export default PopUp
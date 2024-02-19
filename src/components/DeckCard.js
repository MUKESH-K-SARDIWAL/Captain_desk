
import React, { memo } from 'react'

const DeckCard = memo(({ list, handleClick, baseUrl,idx }) => {
   
    return (
        <div className="row" onClick={() => { handleClick(list) }}>
            <div className="col-lg-6 col-md-6 col-sm-12 wtstimgmb">
                <div className="wtstimg">
                    <img src={baseUrl + list?.media} className="wtsttxbt1" />
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="wtsttx">
                    <h2>{list?.header}</h2>
                    <h5>{list?.date}</h5>
                    <p>{list?.description}</p>
                    <button className="wtsttxbt1" onClick={() => { handleClick(list) }}>Know more <span className="fa fa-angle-double-right" /></button>
                </div>
            </div>
        </div>
    )
})



export default DeckCard
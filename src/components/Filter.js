
import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const Filter = memo((props) => {
    return (
        <section className="about-section secexpmn bgdep2">
            <div className="auto-container">
                <div className="mnubt">
                    <ul>
                        <li><Link to={'/Drinks'}>Drinks</Link></li>
                        <li><Link to={'/Foods'}>Foods</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    )
})


export default Filter
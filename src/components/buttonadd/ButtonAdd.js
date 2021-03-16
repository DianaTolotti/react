import React from 'react'
import {Link} from 'react-router-dom'

import './ButtonAdd.css'

const ButtonAdd = () => (
    <div className="divButtonOrange">
        <Link to="/add" className="buttonOrange">Novo Lead</Link>
    </div>
)

export default ButtonAdd

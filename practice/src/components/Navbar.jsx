import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <header>
            <span className="name"><a href='#'>{props.title}</a></span>
            <nav className="navigation">
                <ul className="list">
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>{props.ab}</a></li>
                    <li><a href='#'>Services</a></li>
                </ul>
                <form action="#">
                    <input type="text" name="name" id="search" placeholder='Type Here To Seatch' />
                    <button type="submit">Search</button>
                </form>
            </nav>
        </header>
    )
}
//Used to check what the datatype of prop send to a component is. For example if you send title as string then it will give you an error. In other words it is ued to validate the props sent
Navbar.prototype = {
    title: PropTypes.number.isRequired,
    ab: PropTypes.string
}

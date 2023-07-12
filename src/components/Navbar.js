import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <nav className="bg-body-tertiary navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand">Horizon News</a>
                    <form className="d-flex" role="search">
                        <input className="form-control my-3 mx-2" type="search" placeholder="Search" aria-label="Search" />
                        <button  type="submit">Search</button>
                    </form>
                </div>

            </nav >
        )
    }
}

export default Navbar

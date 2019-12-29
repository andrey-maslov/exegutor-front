import React from 'react'

import footerLogo from './../../img/exegutor.png'

export default (props) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={footerLogo} className="footer-logo" alt="exegutor logotype"/>
                        </div>
                        <div className="col-lg-4">
                            Some text about site
                        </div>
                        <div className="col-lg-4">
                            Third footer widget
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
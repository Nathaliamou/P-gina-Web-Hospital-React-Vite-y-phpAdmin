import React from 'react';
import Menu from "./menu";

export default function header() {
  return (
    <>
            {/* ======= Top Bar ======= -->*/}
        <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                        <div className="contact-info d-flex align-items-center">
                            <i className="bi bi-envelope"></i> <a href="mailto:contact@example.com">contact@example.com</a>
                            <i className="bi bi-phone"></i> +1 5589 55488 55
                        </div>
                        <div className="d-none d-lg-flex social-links align-items-center">
                            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                    <header id="header" className="fixed-top">
                        <div className="container d-flex align-items-center">
                        <h1 className="logo me-auto"><a href="index.html">Medilab</a></h1>
                        <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a>
                        <Menu/>
                    </div>
             </header>
        </>
    )
}
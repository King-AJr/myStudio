import React from 'react'
import facebook from '../assets/img/logos/facebook.svg'
import google from '../assets/img/logos/google.svg'
import ibm from '../assets/img/logos/ibm.svg'
import microsoft from '../assets/img/logos/microsoft.svg'


function Clients() {
  return (
    <div>
        <div className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={microsoft} alt="..." aria-label="Microsoft Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={google} alt="..." aria-label="Google Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={facebook} alt="..." aria-label="Facebook Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={ibm} alt="..." aria-label="IBM Logo" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clients

import React from 'react'

const ContactInfo = () => {
    return (
        <div className="Contact-Info">
            <h3 className="title">Contact Info</h3>
            <div style={{ padding: '10px' }}>
                <p><b style={{ color: 'gray' }}>Address:</b><br />
                    East Coast Railway Shramik Congress,

                    "Shashi Bhusan Bhavan",
                    CEG Prem Office,
                    Behind DRM office,
                    Waltair Division,

                    Near Rajabhasha Bhavan,
                    Visakhapatnam,
                    Andhra Pradesh,
                    PIN-530004,
                </p>
                <p>
                    <b style={{ color: 'gray' }}>Phone:</b>  044-26701425 <br />
                    <b style={{ color: 'gray' }}>Railway Phone:</b>  044-26701425
                </p>
                <p>
                    <b style={{ color: 'gray' }}>Email:</b>  ecorsc@gmail.com
                </p>
            </div>
        </div>
    )
}

export default ContactInfo
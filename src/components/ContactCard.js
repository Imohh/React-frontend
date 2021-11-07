import React from 'react'

function ContactCard(props) {
    console.log(props)
    return (
        <div>
            <div className="contact-card">
                <img src={props.contact.imgUrl} />
                <h3>{props.contact.name}</h3>
                <p>{props.contact.phone}</p>
                <p>{props.contact.email}</p>
            </div>


            {/* <div className="contact-card">
                <img src="https://imohcodes.com/assets/img/header2.jp"/>
                <h3>Mrs Nneka</h3>
                <p>Phone: 081238723654</p>
                <p>Email: nneka@gmail.com</p>
            </div>

            <div className="contact-card">
                <img src="https://imohcodes.com/assets/img/header2.jp"/>
                <h3>Mr Ayodeji</h3>
                <p>Phone: 090836654849</p>
                <p>Email: ayodeji@yahoo.com</p>
            </div>
            
            <div className="contact-card">
                <img src="https://imohcodes.com/assets/img/header2.jpg"/>
                <h3>Mr Balogun</h3>
                <p>Phone: 091847628472</p>
                <p>Email: balogun@gmail.com</p>
            </div> */}
        </div>
    )
}

export default ContactCard
import React from 'react'
import SocialNetworks from './SocialNetworks';

const Footer = (props) => {
    return (
        <>
             <SocialNetworks />
        <h5>created with ♥ by {props.name} with <a targer="_blank" href="https://www.getpapercss.com/">PaperCSS</a></h5>
      
        </>
    )
}

export default Footer

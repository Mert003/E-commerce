import React from 'react';
import {AiFillInstagram, AiFillTwitterCircle , AiOutlineSearch} from "react-icons/ai";
import {BsPinterest} from "react-icons/bs";
import {RiVisaLine ,RiMastercardFill } from "react-icons/ri";
import {GrAmex} from "react-icons/gr";
import "./Footer.css";

const Footer = () =>{
    return(
        <div className='FooterContainer'>

           {/* First Row */}
            <div className='FooterTop'>

                <div className='FooterTopMenu'>
                    <h6>MENU</h6>
                    <ul>
                        <li>CORPARATE</li>
                        <li>WEDDINGS</li>
                        <li>SLOP PERFECT</li>
                        <li>CAREERS</li>
                        <li>FAQS</li>
                        <li>TERMS AND CONDITIONS</li>
                    </ul>
                </div>

                <div className='FooterTopContact'>
                    <h6>CONTACT US</h6>
                    <p>
                    FIRST CANADIAN PLACE
                    <br />
                    416.367.1200
                    </p>

                    <p>
                    BROOKFIELD PLACE
                    <br />
                    416.367.4400
                    </p>
                    <p>
                    MANULIFE CENTER
                    <br />
                    416.395.1817
                    </p>
                    
                </div>

                <div className='FooterTopSocial'>
                    <h6>SOCIALS</h6>
                    <ul>
                        <li><AiFillInstagram size={"1.5rem"}/> </li>  
                        <li><BsPinterest size={"1.5rem"}/></li>
                        <li><AiFillTwitterCircle size={"1.5rem"}/></li>                       
                    </ul>
                </div>

            </div>


             {/* Second Row */}
            <div className='FooterSearchBar'>
                <form>
                <input type="text" placeholder='TYPE YOUR SEARCH' />
                <AiOutlineSearch size={"1.1rem"}/>
                </form>
            </div>

          

            {/* Third Row */}
            <div className='FooterPaymentOptions'>
                <h6>PAYMENT OPTIONS</h6>
                <ul>
                    <li><RiVisaLine size={"1.5rem"}/></li>
                    <li><GrAmex size={"1.5rem"}/></li>
                    <li><RiMastercardFill size={"1.5rem"}/></li>
                </ul>
            </div>

            {/* Fourth Row */}
            <div className='FooterTermConditions'>
                <p>Terms and Conditions<br/> 
                 2023 SLOP FLOWERS</p>
            </div>

        </div>
    )
};

export default Footer;
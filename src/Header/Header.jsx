import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
       <div className="header1">
        <div className="headerinfo1">
            <p>Phone: +01 256 25 235 </p>
            <p>email: info@eiser.com </p>
        </div>
        <div className="headerinfo2">
            <ul>
                <li><Link to={""}>GIFT CARD</Link></li>
                <li><Link to={""}>TRACK ORDER</Link></li>
                <li><Link to={""}>CONTACT US</Link></li>
            </ul>
        </div>   
    </div>

    <div className="header2">

        <div className="logo">
           <Link to={""}>
           <img src="https://themewagon.github.io/eiser/img/logo.png" alt="" />
           </Link>
        </div>

        <div className="nav1">
            <ul>
                <li><Link to={""}>HOME</Link></li>
                <li>
                    <div className="dropdown">
                        <Link to={""}>SHOP</Link>
                        <div class="dropdown-content">
                            <Link to={"/ShopCategory"} className='dropdown-item'>SHOP CATEGORY</Link>
                            <Link to={"/ProductDetails"} className='dropdown-item'>PRODUCT DETAILS</Link>
                            <Link to={"/checkout"} className='dropdown-item'>PRODUCT CHECKOUT</Link>
                            <Link to={"/cart"} className='dropdown-item'>SHOPPING CART</Link>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="dropdown">
                        <a href="">BLOG</a>
                        <div class="dropdown-content">
                        <Link to={""} className='dropdown-item'>BLOG</Link>
                        <Link to={""} className='dropdown-item'>BLOG DETAILS</Link>
                         </div>
                    </div>
                </li>

                <li>
                    <div class="dropdown">
                        <a href="">PAGES</a>
                        <div class="dropdown-content">
                        <Link to={""} className='dropdown-item'>TRACKING</Link>
                        <Link to={""} className='dropdown-item'>ELEMENT</Link>
                         </div>
                    </div>
                </li>
                <li><Link to={"/Contact"}>CONTACT</Link></li>
            </ul>
        </div>
        <div className="nav2">
            <ul>
                <li><Link to={"/Apifetch"}><i className="fa-solid fa-magnifying-glass"></i></Link></li>
                <li><i className="fa-solid fa-cart-shopping"></i></li>
                <li><Link to={"/Signup"}><i className="fa-solid fa-user"></i></Link></li>
                <li><i className="fa-sharp-duotone fa-solid fa-heart"></i></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Header;

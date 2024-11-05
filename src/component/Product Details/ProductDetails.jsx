import React from 'react'
import './ProductDetails.css'
import { Link } from 'react-router-dom'

function ProductDetails() {
  return (
    <>
        <div class="product-details-box">
        <div class="product-details-tag">
            <h1>Product Details</h1>
            <p>Very us move be blessed multiply night</p>
           </div>
           <div class="product-details-tag2">
            <a href="index.html">Home /</a><a href=""> Product Details</a>
           </div>
    </div>
    <div class="container">
        <div class="img-box">
            <img src="https://themewagon.github.io/eiser/img/product/single-product/s-product-1.jpg" alt=""/>
        </div>
        <div class="text">
            <h3>Faded SkyBlu Denim Jeans</h3>
            <h3 className='Price'>$149.99</h3><br/>
            <p>Category   : Household</p>
            <p>Availibility    : In Stock</p>
            <hr/>
            <br/>
            <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter.
            </p>
            <p>Quantity: <input type="number"/></p>
            <Link to = "/cart"><button>ADD TO CART</button></Link>
        </div>
    </div>
    <div class="container3">
        <div class="navbar">
            <button>Description</button>
            <button>Specification</button>
            <button>Comments</button>
            <button>Reviews</button>
        </div>
        <div class="container3-text">
            <p>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
            It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more andmore recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death ofspouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one wouldsuddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that ismore efficient for one person creating less</p>
        </div>
    </div>
    </>
  )
}

export default ProductDetails

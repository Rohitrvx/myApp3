import React from 'react'
import InspiredProduct from './InspiredProduct';
import featured_data from './Featured_product';
import { Link } from 'react-router-dom'


function Mid() {
  console.log(featured_data)
  return (
    
    <>
    
      
      <div className="banner">
        <div className="banner-text">
          <h3>MEN COLLECTION</h3>
          <h1><span>Show</span>
            Your
            <br />
            Personal
            <span>Style</span>
          </h1>
          <h4>Fowl saw dry which a above together place.</h4>
          <button>VIEW COLLECTION</button>
        </div>
      </div>

      {/* <!-- ---------------------- --> */}

      <div className="banner-box">
        <div className="banner-box1">
          <i className="fa-solid fa-sack-dollar"></i><br /><br />
          <h4>MONEY BACK GURANTEE</h4><br />
          <p>Shall open divide a one</p>
        </div>
        <div className="banner-box2">
          <i className="fa-solid fa-truck-fast"></i><br /><br />
          <h3>FREE DELIVERY</h3><br />
          <p>Shall open divide a one</p>
        </div>
        <div className="banner-box3">
          <i className="fa-solid fa-headset"></i><br /><br />
          <h3>ALWAYS SUPPORT</h3><br/>
            <p>Shall open divide a one</p>
        </div>
        <div className="banner-box4">
          <i className="fa-solid fa-file-invoice-dollar"></i><br /><br />
          <h3>SECURE PAYMENT</h3><br/>
            <p>Shall open divide a one</p>
        </div>
      </div>
      {/* <!-- ------------------------------- --> */}

      <div className="featured-product">
      
        <h2>FEATURED PRODUCT</h2>
        <p>Bring called seed  first of  third give itself now ment</p>
        <div className="container">
          <div className="feature-box1">
            <div className="box-image">
              <img src="https://themewagon.github.io/eiser/img/product/feature-product/f-p-1.jpg" alt="" />
            </div>
            <div className="box-text1">
              <p><a href="index.html">Latest men's sneaker</a></p>
              <p>$25.00 </p>
            </div>
          </div>

          <div className="feature-box2">
            <div className="box-image2">
              <img src="https://themewagon.github.io/eiser/img/product/feature-product/f-p-2.jpg" alt="" />
            </div>
            <div className="box-text2">
              <p><a href="index.html">RED WOMEN PURSES</a></p>
              <p>$25.00 </p>
            </div>
          </div>
          <div className="feature-box3">
            <div className="box-image3">
              <img src="https://themewagon.github.io/eiser/img/product/feature-product/f-p-3.jpg" alt="" />
            </div>
            <div className="box-text3">
              <p><a href="index.html">MEN STYLISH SMART WATCH</a></p>
              <p>$25.00 </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ----------------------- --> */}
      <div className="container2">
        <div className="container2-text">
          <p>ALL MEN's COLLECTION</p>
          <h1>50% OFF</h1>
          <button>DISCOVER NOW</button>
          <p>Limited Time  Offer</p>
        </div>
      </div>

      {/* <!-- ---------------------------------- --> */}

      <div className="new-product">
        <h2>NEW PRODUCTS</h2><br />
        <hr /><br />
        <p>Bring called seed first of third give itself now ment</p><br /><br /><br />
        <div className="product-img">
          <div className="product-img1">
            <p>COLLECTION of 2019</p>
            <h1>MEN'S SUMMER T-SHIRT</h1>
            <img src="https://themewagon.github.io/eiser/img/product/new-product/new-product1.png" alt="" />
            <p className="rate">$120.70</p>
            <Link to={"./cart"} ><button>ADD TO CART</button></Link>
          </div>
          <div className="product-col1">
            <div className="product-img2">
              <div className="product-img2-img">
                <img src="https://themewagon.github.io/eiser/img/product/new-product/n1.jpg" alt="" />
              </div>
              <div className="product-img2-text">
                <p>NIKE LATEST SNEAKER</p>
                <p>$25.00</p>
              </div>
            </div>

            <div className="product-img2">
              <div className="product-img2-img">
                <img src="https://themewagon.github.io/eiser/img/product/new-product/n3.jpg" alt="" />
              </div>
              <div className="product-img2-text">
                <p>MEN'S DENIM JEANS</p>
                <p>$25.00</p>
              </div>
            </div>
          </div>

          <div className="product-col2">
            <div className="product-img2">
              <div className="product-img2-img">
                <img src="https://themewagon.github.io/eiser/img/product/new-product/n2.jpg" alt="" />
              </div>
              <div className="product-img2-text">
                <p>QUARTS HAND WATCH</p>
                <p>$25.00</p>
              </div>
            </div>

            <div className="product-img2">
              <div className="product-img2-img">
                <img src="https://themewagon.github.io/eiser/img/product/new-product/n4.jpg" alt="" />
              </div>
              <div className="product-img2-text">
                <p>ADDIDAS SPORTS SHOES</p>
                <p>$25.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ------------------------------- --> */}
      <InspiredProduct/>
      {/* <div className="inspired-product">
        <h2>INSPIRED PRODUCT</h2><br />
        <hr /><br />
        <p>Bring called seed first of third give itself now ment</p>
        <div className="inspired-product-row1">

          <div className="product-img2">
            <div className="product-img2-img">
              <img src="https://themewagon.github.io/eiser/img/product/new-product/n4.jpg" alt="" />
            </div>
            <div className="product-img2-text">
              <p>ADDIDAS SPORTS SHOES</p>
              <p>$25.00</p>
            </div>
          </div>

          <div className="product-img2">
            <div className="product-img2-img">
              <img src="https://themewagon.github.io/eiser/img/product/new-product/n4.jpg" alt="" />
            </div>
            <div className="product-img2-text">
              <p>ADDIDAS SPORTS SHOES</p>
              <p>$25.00</p>
            </div>
          </div>

          <div className="product-img2">
            <div className="product-img2-img">
              <img src="https://themewagon.github.io/eiser/img/product/new-product/n4.jpg" alt="" />
            </div>
            <div className="product-img2-text">
              <p>ADDIDAS SPORTS SHOES</p>
              <p>$25.00</p>
            </div>
          </div>

          <div className="product-img2">
            <div className="product-img2-img">
              <img src="https://themewagon.github.io/eiser/img/product/new-product/n4.jpg" alt="" />
            </div>
            <div className="product-img2-text">
              <p>ADDIDAS SPORTS SHOES</p>
              <p>$25.00</p>
            </div>
          </div>

        </div>
        <div className="inspired-product-row2">

          <div className="product-img2">
            <div className="product-img2-img">
              <img src="https://themewagon.github.io/eiser/img/product/new-product/n4.jpg" alt="" />
            </div>
            <div className="product-img2-text">
              <p>ADDIDAS SPORTS SHOES</p>
              <p>$25.00</p>
            </div>
          </div>

          <div className="product-img2">
            <div className="product-img2-img">
              <img src="https://themewagon.github.io/eiser/img/product/new-product/n4.jpg" alt="" />
            </div>
            <div className="product-img2-text">
              <p>ADDIDAS SPORTS SHOES</p>
              <p>$25.00</p>
            </div>
          </div>

          <div className="product-img2">
            <div className="product-img2-img">
              <img src="https://themewagon.github.io/eiser/img/product/new-product/n4.jpg" alt="" />
            </div>
            <div className="product-img2-text">
              <p>ADDIDAS SPORTS SHOES</p>
              <p>$25.00</p>
            </div>
          </div>

          <div className="product-img2">
            <div className="product-img2-img">
              <img src="https://themewagon.github.io/eiser/img/product/new-product/n4.jpg" alt="" />
            </div>
            <div className="product-img2-text">
              <p>ADDIDAS SPORTS SHOES</p>
              <p>$25.00</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <!-- ------------------------------------ --> */}

      <div className="blog">
        <div className="blog-title">
          <h2>LATEST BLOG</h2><br/>
            <hr/><br/>
              <p>Bring called seed first of third give itself now ment</p>
            </div>

              <div className="blog-box">
                <div className="blog-box1">
                  <div className="blog-box-img">
                    <img src="https://themewagon.github.io/eiser/img/b1.jpg" alt="" /><br /><br />
                  </div>

                  <div className="blog-box-text">
                    <div className="comment">
                      <a href="index.html">By Admin</a>
                      <a href=""><i className="fa-regular fa-comment"></i>2 Comments</a>
                    </div>
                    <a href="index.html"> <h2>Ford clever bed stops your sleeping partner hogging the whole</h2></a>
                    <p>Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth.</p><br />
                    <a href="">Learn More -</a>
                  </div>
                </div>
                <div className="blog-box1">
                  <div className="blog-box-img">
                    <img src="https://themewagon.github.io/eiser/img/b2.jpg" alt="" /><br /><br />
                  </div>

                  <div className="blog-box-text">
                    <div className="comment">
                      <a href="index.html">By Admin</a>
                      <a href=""><i className="fa-regular fa-comment"></i>2 Comments</a>
                    </div>
                    <a href="index.html"> <h2>Ford clever bed stops your sleeping partner hogging the whole</h2></a>
                    <p>Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth.</p><br />
                    <a href="">Learn More -</a>
                  </div>
                </div>
                <div className="blog-box1">
                  <div className="blog-box-img">
                    <img src="https://themewagon.github.io/eiser/img/b3.jpg" alt="" /><br /><br />
                  </div>

                  <div className="blog-box-text">
                    <div className="comment">
                      <a href="index.html">By Admin</a>
                      <a href=""><i className="fa-regular fa-comment"></i>2 Comments</a>
                    </div>
                    <a href="index.html"> <h2>Ford clever bed stops your sleeping partner hogging the whole</h2></a>
                    <p>Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth.</p><br />
                    <a href="">Learn More -</a>
                  </div>
                </div>
              </div>
            </div>
           
          </>

        )
}

export default Mid;

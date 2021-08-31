import React from 'react'

export default function header() {
    return (
        <>
        <section >
        <div class="top">
        <div className="lefttop">
          <div class="logo"></div>
             <h1 class="toph1">
             Book Exchange
             </h1>
             <h2 class="toph2">
             COME EXCHANGE YOUR BOOKS
             </h2>
             <button class="btn1">Register Now </button>
             <button class="btn2">Learn More</button>
        </div>   
        
        <div class="righttop">
            <div className="right1">
                <button>Sign in</button>
                <button>Sign up</button>
            </div>
            <div className="right2">
                <h1>Looking for a book?</h1>
                <input type="text" placeholder="Search by author, name, genre.."></input>
                <h2>Browse all books → <div className="img"></div></h2>
                
                
                
            </div>
        </div> 
        </div>   
    </section>



    <section class="welcome">
        <div class="left">
           <h2 class="wlcmh2">WELCOME</h2>
           <h1 class="wlcmh1">GRAB A BOOK</h1>
           <h2 class="wlcmh3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tincidunt vitae semper quis. Pharetra convallis posuere morbi leo urna molestie at. Nibh tortor id aliquet lectus proin. Mauris sit amet massa vitae. Sed odio morbi quis commodo odio aenean sed adipiscing. Amet porttitor eget dolor morbi non arcu risus. Egestas dui id ornare arcu. Amet est placerat in egestas erat imperdiet sed euismod nisi. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Urna nunc id cursus metus aliquam. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. In dictum non consectetur a. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas.</p>
        </div>
        <div className="right"></div>
        
    </section>


    <section class="febook">
        <h1 class="fbh1">OUR  FEATURED  BOOKS</h1>
        <p class="fbh2">The Summit offers a range of sessions that provide educators the opportunity to interact and learn from each other.</p>
        <div className="items">
          <div class="box1"><h3>NON FICTION</h3></div>
          <div class="box2"><h3>FICTION</h3></div>
          <div class="box3"><h3>ACADEMICS</h3></div>
        </div>
    </section>


    <section class="bottom">
        <div class="container">
            <h1>How do I get <br /> started?</h1>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lore</p>
        <button>Register Now</button>
    </section>
    </>
    )
}

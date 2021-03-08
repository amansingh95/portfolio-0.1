import React from 'react'

const AboutUs = (props) => {
    return (
        <div>
            <div className="col-12 col">
            <span>
              <img src="./aman.jpg" height="300px" width="300px" className="float-left" alt="You here" />
              <h2>I'm {props.name}</h2>
              <p>MERN STACK Developer.</p>
              <article className="article">
                <h3>About me</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec lorem non mi faucibus auctor a sed arcu.
                Vestibulum id sapien vitae odio molestie ultricies eu sed augue. Donec id mauris eget odio tincidunt vulputate.
                Sed diam libero, accumsan pulvinar lobortis ac, rhoncus ac purus. Duis accumsan fringilla purus, quis consequat nisi ultrices id.</p>
              </article>
            </span>
          </div>
        </div>
    )
}

export default AboutUs

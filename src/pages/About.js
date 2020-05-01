import React from 'react';

import profilePic from '../assets/images/profile-pic.jpg';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Who am I ?</h2>
        <p>私がどのような人間なのかを知っていただくためのページです。</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h2>About me</h2>
          <p>
            <span className="image left">
              <img src={profilePic} alt="" />
            </span>
            Morbi mattis mi consectetur tortor elementum, varius pellentesque
            velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac
            scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis
            lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo.
            Maecenas sagittis felis ac sagittis semper. Curabitur purus leo,
            tempus sed finibus eget, fringilla quis risus. Maecenas et lorem
            quis sem varius sagittis et a est. Maecenas iaculis iaculis sem.
            Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo.
            Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci
            fringilla tincidunt. Aliquam eleifend ligula non velit accumsan
            cursus. Etiam ut gravida sapien.
          </p>

          <p>
            Vestibulum ultrices risus velit, sit amet blandit massa auctor sit
            amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis
            id vel diam. Praesent sit amet posuere risus, eu faucibus lectus.
            Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam.
            Proin nec dui cursus, posuere dui eget interdum.
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;

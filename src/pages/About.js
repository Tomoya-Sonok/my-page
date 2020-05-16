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
            広島県出身の駆け出しWebエンジニア。
            13歳からずっと英語オタクで、洋画や洋楽をこよなく愛する。
            大学3年次にロサンゼルスの日系コンサル企業にてインターンシップを経験し、ビジネスにも興味をもつ（主にマーケティング）。
            大好きな英語を使いながら0から1を創り出せるプログラミングに魅力を感じ、2020年1月からTECH::CAMPにて学習開始。
            スクールではサーバーサイドとしてRuby
            onRailsを用いた個人・チーム開発、
            独学では主にフロントサイドとしてReact/Gatsby.jsのようなモダンなJavaScriptライブラリを学習。
          </p>
          <p>
            Vestibulum ultrices risus velit, sit amet blandit massa auctor sit
            amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis
            id vel diam. Praesent sit amet posuere risus, eu faucibus lectus.
            Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam.
            Proin nec dui cursus, posuere dui eget interdum. ブログは
            <a href="https://techguy10308blog.netlify.app" target="__blank">
              こちら
            </a>
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;

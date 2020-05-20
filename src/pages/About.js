import React from 'react';

import profilePic from '../assets/images/profile-pic.jpg';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Who am I ?</h2>
        <p>自己紹介ページへようこそ。ブログは下のボタンから。</p>
        <a
          href="https://techguy10308blog.netlify.app"
          target="__blank"
          className="button primary icon solid fa-newspaper"
        >
          My blog
        </a>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h2>About me</h2>
          <p>
            <span className="image left">
              <img src={profilePic} alt="" />
            </span>
            広島県出身の駆け出しWebエンジニア。
            13歳からずっと英語オタクで、洋画や海外ドラマをこよなく愛する。
            大学3年次にロサンゼルスの日系コンサル企業にてインターンシップを経験し、国際ビジネスやマーケティングに興味をもつ。
            大好きな英語を使いながら0から1を創り出せるプログラミングに惹き込まれ、2020年1月からTECH::CAMPにて学習開始。
            Ruby on
            Rails中心のカリキュラム以外にも、ReactなどのモダンなJavaScriptライブラリやDockerを独学で習得して同年3月に卒業。
            現在は、東京のITベンチャーでPythonを用いたバックエンド開発やネットワーク・インフラの構築を行っている。
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;

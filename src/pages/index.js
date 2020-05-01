import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import { Link } from 'gatsby';

import thinkyImg from '../assets/images/thinky.jpg';
import ootdImg from '../assets/images/ootd.jpg';
import comingSoon from '../assets/images/comingSoon.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <ul className="icons">
              {config.socialLinks.map(social => {
                const { style, icon, name, url } = social;
                return (
                  <li key={url}>
                    <a href={url} className={`icon ${style} ${icon}`}>
                      <span className="label">{name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
        <Link to="/About" className="button primary icon solid fa-user">
          Who am I?
        </Link>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>Projects</h2>
          <p>
            主にバックエンドはRuby on
            Rails、フロントエンドはReactで開発しています。
          </p>
        </header>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={thinkyImg} alt="thinky-img" />
        </div>
        <div className="content">
          <h2>Thinky （開発中）</h2>
          <p>
            あらゆるものに対して「Why?」をぶつけて思考することで、考える力を養うことが目的のアプリ。
            自分一人でじっくり考えてもよし、他のユーザーの考えから新たな視座を得て思考の幅を拡げることも可能。
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={ootdImg} alt="ootd-img" />
        </div>
        <div className="content">
          <h2>OOTD</h2>
          <p>
            自分が撮ったコーデ写真を投稿・確認・編集・削除でき、ボタン１つでランダム表示して毎日の服選びを簡単にしてくれるアプリ。
            カテゴリ別表示でその日の気分ごとにコーデ一覧を視覚的に整理できるので、意思決定をよりスピーディーにしてくれる。
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={comingSoon} alt="coming-soon" />
        </div>
        <div className="content">
          <h2>（Coming soon...）</h2>
          <p>　</p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>What I do</h2>
          <p>
            テキストが入りますテキストが入りますテキストが入りますテキストが入ります
            テキストが入りますテキストが入ります
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-code">
            <h3>Front-end</h3>
            <p>
              HTML / CSS / JavaScript （jQuery）
              を用いた基本的なコーディングはもちろん、
              ReactやGatsby、その他npmパッケージを利用したSPAフロント実装もできます。
            </p>
          </li>
          <li className="icon solid fa-server">
            <h3>Back-end</h3>
            <p>
              Ruby on Railsによるアプリ開発や、RailsでAPIのみを開発し、
              React等で実装したSPAを組み合わせることで、フロントサイドとサーバーサイドを切り分けて開発することができます。
            </p>
          </li>
          <li className="icon solid fa-language">
            <h3>Translation</h3>
            <p>
              英検準1級、TOEIC880点を取得済み。大学在学中に約半年間コンサル会社の
              インターンシップに参加し、英語を用いた資料作成や翻訳業務を経験。
            </p>
          </li>
          <li className="icon fa-newspaper">
            <h3>Blog</h3>
            <p>
              2020年5月にブログを開設。エンジニアとして働く上で学んだことや考えたことを
              日本語と英語でアウトプットするための技術系ブログ。右上のメニューからアクセスできます。
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section className="contactForm" name="contact">
      <h4>Form</h4>
      <form method="post" action="#">
        <div className="row gtr-uniform">
          <div className="col-6 col-12-xsmall">
            <input
              type="text"
              name="demo-name"
              id="demo-name"
              defaultValue=""
              placeholder="Name"
            />
          </div>
          <div className="col-6 col-12-xsmall">
            <input
              type="email"
              name="demo-email"
              id="demo-email"
              defaultValue=""
              placeholder="Email"
            />
          </div>

          <div className="col-12">
            <textarea
              name="demo-message"
              id="demo-message"
              placeholder="Enter your message"
              rows="6"
            ></textarea>
          </div>
          <div className="col-12">
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="primary" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </section>
  </Layout>
);

export default IndexPage;

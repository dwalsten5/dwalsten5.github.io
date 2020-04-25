import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout.jsx';

/* Manually import each individual image for now. Eventually these
will be tied to a database of some sort */
import kibuye from '../../assets/images/Kibuye_low_res.jpg';
import pic01 from '../../assets/images/pic01.jpg';
import pic02 from '../../assets/images/pic02.jpg';
import pic03 from '../../assets/images/pic03.jpg';
import pic04 from '../../assets/images/pic04.jpg';
import pic05 from '../../assets/images/pic05.jpg';
import pic06 from '../../assets/images/pic06.jpg';

const Home = () => (
  <Layout>
    { /** Update the html <head> element */ }
    <Helmet>
      <title>Doran Walsten</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    </Helmet>
    <header id="header">
      <Link to="/#" className="logo">Doran Walsten</Link>
      <ul className="icons">
        <li>
          <a
            href="https://www.linkedin.com/in/doran-walsten-ba9714a5"
            className="icon fa-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
    </header>

    { /* Banner */ }
    <section id="banner">
      <div className="content">
        <header>
          <h1>{'Hi, I\'m Doran Walsten'}</h1>
          <p>A Foolish Mortal</p>
        </header>
        <p>{'Welcome to my personal website. I am not really sure what my goal for this is yet, but that\'s part of the fun! At the moment, I am a Midwest transplant in Los Angeles trying to figure out what to do with my life and enjoy the journey along the way.'}</p>
      </div>
      <div className="content">
        <div className="row aln-center m0">
          <div>
            <span className="image" style={{ width: '75%', margin: '0 auto 32px auto' }}>
              <img src={kibuye} alt="" />
            </span>
            <h5 className="align-center">
              <a
                href="https://en.wikipedia.org/wiki/Kibuye,_Rwanda"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kibuye, Rwanda
              </a>
            </h5>
          </div>
        </div>
      </div>
    </section>

    { /* Section */ }
    <section>
      <header className="major">
        <h2>Erat lacinia</h2>
      </header>
      <div className="features">
        <article>
          <span className="icon fa-diamond" />
          <div className="content">
            <h3>Portitor ullamcorper</h3>
            <p>
              Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
              Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
            </p>
          </div>
        </article>
        <article>
          <span className="icon fa-paper-plane" />
          <div className="content">
            <h3>Sapien veroeros</h3>
            <p>
              Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
              Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
            </p>
          </div>
        </article>
        <article>
          <span className="icon fa-rocket" />
          <div className="content">
            <h3>Quam lorem ipsum</h3>
            <p>
              Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
              Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
            </p>
          </div>
        </article>
        <article>
          <span className="icon fa-signal" />
          <div className="content">
            <h3>Sed magna finibus</h3>
            <p>
              Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
              Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
            </p>
          </div>
        </article>
      </div>
    </section>

    { /* Section */ }
    <section>
      <header className="major">
        <h2>Ipsum sed dolor</h2>
      </header>
      <div className="posts">
        <article>
          <a href="/#" className="image" aria-label="Link"><img src={pic01} alt="" /></a>
          <h3>Interdum aenean</h3>
          <p>
            Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
            Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
          </p>
          <ul className="actions">
            <li><a href="/#" className="button">More</a></li>
          </ul>
        </article>
        <article>
          <a href="/#" className="image" aria-label="Link"><img src={pic02} alt="" /></a>
          <h3>Nulla amet dolore</h3>
          <p>
            Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
            Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
          </p>
          <ul className="actions">
            <li><a href="/#" className="button">More</a></li>
          </ul>
        </article>
        <article>
          <a href="/#" className="image" aria-label="Link"><img src={pic03} alt="" /></a>
          <h3>Tempus ullamcorper</h3>
          <p>
            Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
            Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
          </p>
          <ul className="actions">
            <li><a href="/#" className="button">More</a></li>
          </ul>
        </article>
        <article>
          <a href="/#" className="image" aria-label="Link"><img src={pic04} alt="" /></a>
          <h3>Sed etiam facilis</h3>
          <p>
            Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
            Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
          </p>
          <ul className="actions">
            <li><a href="/#" className="button">More</a></li>
          </ul>
        </article>
        <article>
          <a href="/#" className="image" aria-label="Link"><img src={pic05} alt="" /></a>
          <h3>Feugiat lorem aenean</h3>
          <p>
            Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
            Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
          </p>
          <ul className="actions">
            <li><a href="/#" className="button">More</a></li>
          </ul>
        </article>
        <article>
          <a href="/#" className="image" aria-label="Link"><img src={pic06} alt="" /></a>
          <h3>Amet varius aliquam</h3>
          <p>
            Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
            Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
          </p>
          <ul className="actions">
            <li><a href="/#" className="button">More</a></li>
          </ul>
        </article>
      </div>
    </section>
  </Layout>
);

export default Home;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import pic07 from 'assets/images/pic07.jpg';
import pic08 from 'assets/images/pic08.jpg';
import pic09 from 'assets/images/pic09.jpg';

const Sidebar = ({ routes }) => (
  <div id="sidebar">
    <div className="inner">
      <nav id="menu">
        <header className="major">
          <h2>Menu</h2>
        </header>
        <ul>
          {routes.map(({ title, slug }) => <li key={slug}><Link to={slug}>{title}</Link></li>)}
        </ul>
      </nav>
      { /** Post Highilights */ }
      <section>
        <header className="major">
          <h2>Ante interdum</h2>
        </header>
        <div className="mini-posts">
          <article>
            <a href="/#" className="image" aria-label="Link"><img src={pic07} alt="" /></a>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
          </article>
          <article>
            <a href="/#" className="image" aria-label="Link"><img src={pic08} alt="" /></a>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
          </article>
          <article>
            <a href="/#" className="image" aria-label="Link"><img src={pic09} alt="" /></a>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
          </article>
        </div>
        <ul className="actions">
          <li><a href="/#" className="button" aria-label="Link">More</a></li>
        </ul>
      </section>

      { /** Footer with copyright, credits */ }
      <footer id="footer">
        <p className="copyright">
          &copy; Doran Walsten. All rights reserved. Demo Images:
          <a href="https://unsplash.com">Unsplash</a>
          . Design:
          <a href="https://html5up.net">HTML5 UP</a>
          .
        </p>
      </footer>
    </div>
  </div>
);

Sidebar.propTypes = {
  /** List of available routes */
  routes: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default Sidebar;

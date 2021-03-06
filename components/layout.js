import Link from 'next/link'
import Head from 'next/head'
import ActiveLink from '../components/active-link'
import SocialMedia from '../components/social-media'

const Layout = ({ children, title = 'Home' }) => <div>
  <Head>
    <title>{title} - Welcome to beldur.de</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="stylesheet" href="static/css/main.css" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
      crossOrigin="anonymous"
    />
  </Head>

  <section id="sidebar">
    <div className="inner">
      <nav>
        <ul>
          <li>
            <ActiveLink href="/">
              <a>Home</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/expertise">
              <a>Expertise</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/books">
              <a>My Book List</a>
            </ActiveLink>
          </li>
          {/* <li>
            <ActiveLink href="/go">
              <a>GO (围棋)</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/china">
              <a>China (中国)</a>
            </ActiveLink>
          </li> */}
        </ul>
      </nav>
      <SocialMedia />
    </div>
  </section>

  <div id="wrapper">{children}</div>

  <footer id="footer" className="wrapper style1-alt">
    <div className="inner">
      <ul className="menu">
        <li>&copy; Alexander L&uuml;cking. All rights reserved.</li>
        <li>
          <SocialMedia />
        </li>
      </ul>
    </div>
  </footer>
</div>;

export default Layout;

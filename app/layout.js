import ActiveLink from '../components/active-link'
import SocialMedia from '../components/social-media'

import '../public/static/css/main.css'

export const metadata = {
  title: {
    template: '%s - Welcome to beldur.de',
  },
  creator: 'Alexander Lücking',
}

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossOrigin="anonymous"
        precedence="default"
      />
      <body>
        <div>
          <section id="sidebar">
            <div className="inner">
              <nav>
                <ul>
                  <li>
                    <ActiveLink href="/">Home</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/expertise">Expertise</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/books">My Book List</ActiveLink>
                  </li>
                  <li style={{ display: 'none' }}>
                    <ActiveLink href="/go">GO (围棋)</ActiveLink>
                  </li>
                  <li style={{ display: 'none' }}>
                    <ActiveLink href="/china">China (中国)</ActiveLink>
                  </li>
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
        </div>
      </body>
    </html>
  )
}

export default Layout

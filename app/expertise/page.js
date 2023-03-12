import Gopher from '../../components/gopher'

export const metadata = {
  title: 'Expertise',
}

const Expertise = () => (
  <>
    <section id="expertise" className="wrapper fullscreen style1">
      <div className="inner">
        <h2>Expertise</h2>
        <p>
          I started programming when I was around 10 years old on an 386 PC with
          QBasic.
          <br />
          Nowadays I'm working as a Senior Software Engineer at{' '}
          <a href="https://www.pixum.de">Pixum</a>.
        </p>
        <p>My main focus lies in Frontend Development.</p>
        <div className="features">
          <section>
            <span className="fab icon major fa-js" />
            <h3>Modern Web Development</h3>
            <ul>
              <li>12 years of professional experience in Javascript</li>
              <li>Deep knowledge in HTML and Browser API's</li>
              <li>CSS, SASS</li>
              <li>HTTP and friends</li>
              <li>Web performance optimizations</li>
              <li>Server Side JS (nodejs)</li>
            </ul>
          </section>
          <section>
            <span className="fab icon major fa-react" />
            <h3>React & Ecosystem</h3>
            <p>Deep knowledge in the React Ecosystem including</p>
            <ul>
              <li>State Management (Redux)</li>
              <li>Side Effect handling (Redux Saga)</li>
              <li>Bundling (Webpack)</li>
              <li>CSS in JS (Styled Components)</li>
              <li>Type System (Flow)</li>
              <li>many more...</li>
            </ul>
          </section>
          <section>
            <span className="icon major">
              <Gopher style={{ marginTop: '0.5em' }} />
            </span>
            <h3>GO & PHP</h3>
            <ul>
              <li>
                Build several open source libraries in GO
                <ul>
                  <li>
                    <a href="https://github.com/beldur/kraken-go-api-client">
                      Kraken GO API Client
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/beldur/kube2consul">
                      kube2consul
                    </a>
                  </li>
                </ul>
              </li>
              <li>18 years of experience in writing PHP</li>
            </ul>
          </section>
          <section>
            <span className="fas icon major fa-chess-knight" />
            <h3>Up to Date with Industry Trends</h3>
            <ul>
              <li>
                Constantly reading and learning about new trends in the industry
                (
                <a href="https://stackoverflow.com/users/story/166186#form-section-Readings">
                  book list
                </a>
                ) including:
                <ul>
                  <li>
                    Cloud Native Ecosystem (Kubernetes, Microservices, Google
                    Cloud)
                  </li>
                  <li>Project management (Lean, Agile, Scrum, Kanban)</li>
                  <li>Company Culture (Dev Ops Culture, Leading Change)</li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  </>
)

export default Expertise

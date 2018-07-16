import Link from 'next/link'
import Layout from '../components/layout'

export default () => (
  <Layout title="China (中国)">
    <section id="china" className="wrapper fullscreen style2">
      <div className="inner">
        <h1>China (中国)</h1>
        <p>
          Privately I like to play the game of{' '}
          <Link href="/go">
            <a>GO (围棋)</a>
          </Link>{' '}
          and the piano. Once per year I visit{' '}
          <Link href="/china">
            <a>China (中国)</a>
          </Link>{' '}
          with my family.
        </p>
      </div>
    </section>
  </Layout>
)

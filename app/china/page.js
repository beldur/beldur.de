import Link from 'next/link'

export const metadata = {
  title: 'China (中国)',
}

const China = () => (
  <>
    <section id="china" className="wrapper fullscreen style2">
      <div className="inner">
        <h1>China (中国)</h1>
        <p>
          Privately I like to play the game of <Link href="/go">GO (围棋)</Link>{' '}
          and the piano. Once per year I visit{' '}
          <Link href="/china">China (中国)</Link> with my family.
        </p>
      </div>
    </section>
  </>
)

export default China

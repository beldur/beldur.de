import Link from 'next/link'
import Layout from '../components/layout'

export default () => (
  <Layout title="Book list">
    <section id="book-list" className="wrapper fullscreen">
      <div className="inner">
        <h2>My personal book list</h2>
        <p>
          I learn a lot from reading books.
          <br />
          This is a list of things I have read over the years.
        </p>

        <dl>
          <dt>An Elegant Puzzle - Systems of Engineering Management</dt>
          <dd>
            Very dense with a lot of practical examples, guides and experience.
            Highly recommended!
          </dd>

          <dt>Reinventing Organisations</dt>
          <dd>Mindblowing book about the future of organisations</dd>

          <dt>
            The Manager's Path: A Guide for Tech Leaders Navigating Growth and
            Change by Camille Fourniere
          </dt>
          <dd>
            Amazing book about one career path in software. Very hands on and
            "close to the metal".
          </dd>

          <dt>Scrum Body of Knowledge by SCRUMstudy™</dt>
          <dd>
            Get up to speed to all the basics of SCRUM. Also prepared me for for
            the Professional Scrum Master Certification.
          </dd>

          <dt>
            The DevOps Handbook: How to Create World-Class Agility, Reliability,
            and Security in Technology Organizations by Gene Kim, Patrick Debois
          </dt>
          <dd>
            How to enhance a company's value stream by digitally transform
            Operations, adopting the DevOps model.
          </dd>

          <dt>
            The Clean Coder: A Code of Conduct for Professional Programmers by
            Robert C. Martin
          </dt>
          <dd>
            A lot of tips for good personality traits that shape a good
            programmer
          </dd>

          <dt>
            Site Reliability Engineering: How Google Runs Production Systems
          </dt>
          <dd>
            Many best practises and a rare look into how Google runs inside.
          </dd>

          <dt>Building Microservices by Sam Newman</dt>
          <dd>
            Helped me to get my mindset into what it means to run a microservice
            architecture.
          </dd>

          <dt>
            The Lean Startup: How Today's Entrepreneurs Use Continuous
            Innovation to Create Radically Successful Businesse by Eric Ries
          </dt>
          <dd>How to reduce waste with prototyping and fast feedback loops</dd>

          <dt>The Art of UNIX Programming by Eric S. Raymond</dt>
          <dd>The amazing parts of the UNIX philosophy and ecosystem.</dd>

          <dt>
            Peopleware: Productive Projects and Teams (3rd Edition) by Tom
            DeMarco, Tim Lister
          </dt>
          <dd>Amazing book about the human side of software development</dd>

          <dt>
            Clean Code: A Handbook of Agile Software Craftsmanship by Robert C.
            Martin
          </dt>
          <dd>
            All the fundamentals about clean code. Must read for everybody who
            writes software.
          </dd>

          <dt>
            High Performance JavaScript (Build Faster Web Application
            Interfaces) by Nicholas C. Zakas
          </dt>
          <dd>
            How to micro optimize your javascript code. Today I'm thinking in
            another direction:
            <br />
            ,,Clean is better than clever" (Rob Pike) and ,,Premature
            optimization is the root of all evil" (Donald Knuth)
          </dd>

          <dt>JavaScript Patterns by Stoyan Stefanov</dt>
          <dd>
            This book helped a lot to get a grasp on large scale javascript
            development
          </dd>

          <dt>
            The Passionate Programmer: Creating a Remarkable Career in Software
            Development by Chad Fowler
          </dt>
          <dd>
            This book helped me to understand software development as a
            professional profession and not as a hobby
          </dd>

          <dt>JavaScript: The Good Parts by Douglas Crockford</dt>
          <dd>
            After reading this book in 2008, I couldn't share the widely held
            hate on JavaScript anymore.
          </dd>

          <dt>
            Pro Silverlight 2 in C# 2008 (Windows.Net) by Matthew MacDonald
          </dt>

          <dt>
            Windows Presentation Foundation Unleashed (WPF) by Adam Nathan
          </dt>
          <dd>
            This book inspired me to write an article about how to draw a GO
            board game in WPF.
          </dd>

          <dt>Learning WCF: A Hands-on Guide by Michele Leroux Bustamante</dt>
        </dl>
      </div>
    </section>
  </Layout>
)

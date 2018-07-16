import Link from 'next/link'
import { withRouter } from 'next/router'
import { Children } from 'react'

export default withRouter(({ router, children, ...props }) => (
  <Link {...props}>
    {React.cloneElement(Children.only(children), {
      className:
        `/${router.pathname.split('/')[1]}` === props.href ? `active` : null,
    })}
  </Link>
))

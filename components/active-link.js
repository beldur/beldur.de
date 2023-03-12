'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default ({ children, ...props }) => {
  const pathname = usePathname()

  return (
    <Link
      className={`/${pathname.split('/')[1]}` === props.href ? `active` : null}
      {...props}
    >
      {children}
    </Link>
  )
}

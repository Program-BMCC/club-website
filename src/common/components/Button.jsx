import Link from 'next/link'
import clsx from 'clsx'

const styles = {
  primary:
    'rounded-md bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500',
  secondary:
    'rounded-md bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400',
}

export const Button = ({ variant = 'primary', className, href, ...props }) => {
  className = clsx(styles[variant], className)

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}

export const ButtonIcon = ({ variant = 'primary', className, ...props }) => {
  className = clsx(
    'inline-flex items-center rounded-md border border-transparent',
    className
  )

  return <Button variant={variant} className={className} {...props} />
}

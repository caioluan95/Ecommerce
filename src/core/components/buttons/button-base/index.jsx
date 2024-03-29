export default function Button({children, className, type, ...props}) {
  return (
    <button className={className} type={type} {...props}>{children}</button>
  )
}
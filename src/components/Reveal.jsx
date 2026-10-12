import useReveal from '../hooks/useReveal'

// Any element with scroll-reveal. `as` picks the tag, className always gets "rv".
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`${className} rv`.trim()} {...rest}>
      {children}
    </Tag>
  )
}

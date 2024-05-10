declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'

// declare module '*.svg' {
//   export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
//   const src: string
//   export default src
// }

// declare module '*.svg' {
//   const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
//   export default ReactComponent
// }

declare module '*.svg' {
  import type { ReactElement, SVGProps } from 'react'
  const content: (props: SVGProps<SVGElement>) => ReactElement
  export default content
}

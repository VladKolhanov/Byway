import './global.css'
import {
  image,
  input,
  label,
  svg,
  svg_test,
  svg_wrapper,
  wrapper,
} from '@/app.module.css'
import Test from '@/Test'
import someImg from '@public/assets/rectangle.jpg'
import SomeSvg from '@public/assets/telescope.svg'

export const App = () => {
  if (true) {
  }
  return (
    <div className={wrapper}>
      <form action="/" method="get">
        <Test />
        <label className={label}>
          Label 1
          <input type="text" className={input} />
        </label>
        <label>
          Label 2
          <input type="text" />
        </label>
        <img src={someImg} alt="alt" />
        <SomeSvg width={40} height={40} className={svg_test} />
        <div className={image}></div>
        <div className={svg_wrapper}>
          <div className={svg}></div>
        </div>
      </form>
    </div>
  )
}

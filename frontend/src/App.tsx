import './global.css'
import { wrapper, input, label, image } from '@/app.module.css'
import Test from '@/Test'
import someImg from '@public/assets/rectangle.jpg'
// import SomeSvg from '@public/assets/telescope.svg'

//TODO: svg loader
//TODO: minimize assets
//TODO: eslint

export const App = () => {
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
        {/*<img src={SomeSvg} alt="svg" />*/}
        {/*<SomeSvg />*/}
        <div className={image}></div>
        {/*<div className={svg}></div>*/}
      </form>
    </div>
  )
}

import './global.css'
import Test from '@/components/Test'
import someImg from '@public/assets/rectangle.jpg'
import SomeSvg from '@public/assets/telescope.svg'

export const App = () => {
  return (
    <div>
      <form action="/" method="get">
        <Test />
        <label>
          Label 1
          <input type="text" />
        </label>
        <label>
          Label 2
          <input type="text" />
        </label>
        <img src={someImg} alt="alt" />
        <SomeSvg width={40} height={40} />
        <div></div>
        <div>
          <div></div>
        </div>
      </form>
    </div>
  )
}

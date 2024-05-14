import MySvg from '@public/assets/telescope.svg'
import myImg from '@public/assets/rectangle.jpg'
import { wrapper } from '@/components/test.module.css'

console.log(wrapper)
const Test = () => {
  return (
    <>
      <img src={myImg} alt="" />
      <MySvg />
      <div className={wrapper}>Hello from Test</div>
    </>
  )
}

export default Test

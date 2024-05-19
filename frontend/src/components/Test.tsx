import s from '@/components/Test.module.css'
import MySvg from '@public/assets/telescope.svg'
import myImg from '@public/assets/rectangle.jpg'

const Test = () => {
  return (
    <div>
      <MySvg />
      <img src={myImg} alt="ds" />
      <button className={s.button}>Click me</button>
    </div>
  )
}

export default Test

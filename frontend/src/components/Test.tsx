import MySvg from '@public/assets/telescope.svg'
import myImg from '@public/assets/rectangle.jpg'
import s from '@/components/Test.module.css'

console.log(s)

const Test = () => {
  return (
    <>
      <img src={myImg} alt="" />
      <MySvg />
      <div className={s.wrapper}>Hello from Test</div>
    </>
  )
}

export default Test

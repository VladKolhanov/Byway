import '@/styles/global.css'
import { useTheme } from '@/utils/hooks'
import { ThemeToggle } from '@/components/ui'

export const App = () => {
  const { theme, changeTheme } = useTheme()

  return (
    <div>
      <h1>Hello</h1>
      <p>{theme}</p>
      <ThemeToggle onClick={changeTheme} />
    </div>
  )
}

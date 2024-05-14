import { App } from '@/App'
import { render, screen } from '@testing-library/react'

describe('app', () => {
  test('should render correctly', () => {
    render(<App />)

    screen.debug()
  })
})

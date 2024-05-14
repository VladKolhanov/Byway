import Test from '@/components/Test'
import { render, screen } from '@testing-library/react'

describe('app', () => {
  test('should render correctly', () => {
    render(<Test />)

    expect(2 + 2).toBe(4)

    screen.debug()
  })
})

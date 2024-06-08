import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within, expect } from '@storybook/test'

import { ThemeToggle } from './ThemeToggle'
import { Themes } from '@/utils/constants'

const meta = {
  component: ThemeToggle,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeToggle>

export default meta

type Story = StoryObj<typeof ThemeToggle>

export const Default: Story = {}

export const ToggleTheme: Story = {
  play: async ({ canvasElement }) => {
    const htmlElement = document.documentElement
    const isDarkTheme = htmlElement.getAttribute('data-theme') === Themes.DARK
    const isLightTheme = htmlElement.getAttribute('data-theme') === Themes.LIGHT

    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    await userEvent.click(button, { delay: 400 })

    if (isDarkTheme) {
      expect(htmlElement).toHaveAttribute('data-theme', Themes.LIGHT)
    }

    if (isLightTheme) {
      expect(htmlElement).toHaveAttribute('data-theme', Themes.DARK)
    }
  },
}

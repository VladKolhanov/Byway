import { ReactElement } from 'react'
import { RenderOptions, render } from '@testing-library/react'
import { Themes } from '../constants'
import { getProvidersWrapper } from './getProvidersWrapper'

type RenderOptionsWithoutWrapper = Omit<RenderOptions, 'wrapper'>

interface RenderWithProviders extends RenderOptionsWithoutWrapper {
  theme?: Themes | undefined
}

export const renderWithProviders = (
  ui: ReactElement,
  { theme = Themes.LIGHT, ...options }: RenderWithProviders = {},
) => {
  return render(ui, {
    wrapper: getProvidersWrapper(theme),
    ...options,
  })
}

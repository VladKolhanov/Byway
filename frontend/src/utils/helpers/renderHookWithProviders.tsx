import { RenderHookOptions, renderHook } from '@testing-library/react'
import { Themes } from '../constants'
import { getProvidersWrapper } from './getProvidersWrapper'

type RenderHookOptionsWithoutWrapper<P> = Omit<RenderHookOptions<P>, 'wrapper'>

interface RenderHookWithProviders<P>
  extends RenderHookOptionsWithoutWrapper<P> {
  theme?: Themes
}

export const renderHookWithProviders = <P,>(
  hook: (initialProps: P) => any,
  { theme = Themes.LIGHT, ...options }: RenderHookWithProviders<P> = {},
) => {
  return renderHook<P, any>(hook, {
    wrapper: getProvidersWrapper(theme),
    ...options,
  })
}

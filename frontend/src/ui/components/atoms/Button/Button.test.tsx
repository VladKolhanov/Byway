import { render, screen } from '@testing-library/react';

import { renderWithProviders } from '@/utils/helpers';

import { Button } from './Button';

describe('Button', () => {
  test('Should correctly render component with label', () => {
    render(<Button label="Test" />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  test('Should correctly render \'a\' element if provided variant="link"', () => {
    renderWithProviders(<Button label="Test" href="/test" />);

    const button = screen.getByRole('link');

    expect(button).toBeInTheDocument();
  });

  test('Should render component with default classes if arguments not provided', () => {
    const expectClass = 'button button_size_md button_variant_primary-6';

    render(<Button label="Test" />);

    const button = screen.getByRole('button');

    expect(button).toHaveClass(expectClass);
  });

  test('Should render component with custom classes if arguments provided', () => {
    const expectClass = 'button button_size_xsm button_variant_ghost-2';

    render(<Button label="Test" size="xsm" variant="ghost-2" />);

    const button = screen.getByRole('button');

    expect(button).toHaveClass(expectClass);
  });

  test('Should render component with props', () => {
    render(<Button label="Test" aria-label="Test label" />);

    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-label', 'Test label');
  });

  test('Should render button component with icon', () => {
    const { container } = render(<Button label="Test" iconStart="ADD_IMAGE" />);

    const button = screen.getByRole('button');
    const icon = container.querySelector('svg');

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});

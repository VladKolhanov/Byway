import { render } from '@testing-library/react';

import { Icons } from '@/utils/constants';

import { Icon } from './Icon';

describe('Icon', () => {
  test('Should renders correctly', () => {
    const { container } = render(<Icon icon={Icons.AWARD} />);

    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('Should sets the href attribute correctly', () => {
    const { container } = render(<Icon icon={Icons.AWARD} />);

    const icon = container.querySelector('use');

    expect(icon).toHaveAttribute('href', `mocked-svg-url#award`);
  });

  test('Should applies the className prop correctly', () => {
    const { container } = render(
      <Icon icon={Icons.AWARD} className="testClass" />,
    );

    expect(container.querySelector('svg')).toHaveClass('testClass');
  });

  test('Should passes additional props to the svg element', () => {
    const { container } = render(
      <Icon icon={Icons.AWARD} aria-label="someProps" />,
    );

    expect(container.querySelector('svg')).toHaveAttribute(
      'aria-label',
      'someProps',
    );
  });
});

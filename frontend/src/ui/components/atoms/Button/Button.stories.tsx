import type { Meta, StoryObj } from '@storybook/react';

import { Icons } from '@/utils/constants';

import { Button } from './Button';

const meta = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    className: { control: 'object' },
    href: { control: 'text' },

    iconEnd: {
      control: 'select',
      options: [undefined, ...Object.values(Icons)],
    },
    iconStart: {
      control: 'select',
      options: [undefined, ...Object.values(Icons)],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  name: 'Primary variant',
  args: {
    label: 'Save Image',
    variant: 'primary',
    colorScheme: 'black',
  },
};

export const PrimaryWithIcon: Story = {
  name: 'Primary variant with icon',
  args: {
    label: 'Send Message',
    variant: 'primary',
    colorScheme: 'blue',
    iconEnd: Icons.MAIL,
  },
};

export const Outline: Story = {
  name: 'Outline variant',
  args: {
    label: 'Upload Image',
    variant: 'outline-1',
  },
};

export const OutlineWithIcon: Story = {
  name: 'Outline variant with icon',
  args: { label: 'Filter', variant: 'outline-1', iconStart: Icons.FILTER },
};

export const Outline2: Story = {
  name: 'Outline-2 variant',
  args: {
    label: 'Log In',
    variant: 'outline-2',
    size: 'sm',
  },
};

export const Ghost1: Story = {
  name: 'Ghost-1 variant',
  args: { label: 'Delete', variant: 'ghost-1' },
};

export const Ghost2: Story = {
  name: 'Ghost-2 variant',
  args: { label: 'Block', variant: 'ghost-2' },
};

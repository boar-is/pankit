import { type InputType } from '@storybook/csf'

export const keysInlineRadioArg = (obj: object) =>
  ({
    options: Object.keys(obj),
    control: {
      type: 'inline-radio',
    },
  }) satisfies InputType

import { uuid } from '~/util/core/string';
import { OptionTypes } from '~/admin/constants';
import { PartTypeValues } from '~/admin/options/type-options';

export const whiteBodyText = [
  {
    id: uuid(),
    attributes: {},
    parts: [
      {
        type: OptionTypes.TEXT,
        id: uuid(),
        text: 'You Need This',
        typeramp: 'body',
        textColor: 'white',
      },
    ],
  },
  {
    id: uuid(),
    attributes: {},
    parts: [
      {
        type: OptionTypes.TEXT,
        id: uuid(),
        text: 'This text has some more detail about how awesome the product is',
        typeramp: 'body',
        textSize: 'md',
        textColor: 'white',
        textWeight: 'normal',
      },
    ],
  },
];

export const blueBodyText = [
  {
    id: uuid(),
    attributes: {},
    parts: [
      {
        type: OptionTypes.TEXT,
        id: uuid(),
        text: 'You Need This',
        typeramp: 'body',
        textColor: 'secondaryBlue',
      },
    ],
  },
  {
    id: uuid(),
    attributes: {},
    parts: [
      {
        type: OptionTypes.TEXT,
        id: uuid(),
        text: 'This text has some more detail about how awesome the product is',
        typeramp: 'body',
        textSize: 'md',
        textColor: 'secondaryBlue',
        textWeight: 'normal',
      },
    ],
  },
];

export const whiteSectionHeader = [
  {
    id: uuid(),
    attributes: {},
    parts: [
      {
        type: PartTypeValues.TEXT.value,
        id: uuid(),
        text: 'Section Header',
        typeramp: 'display',
        textColor: 'white',
      },
    ],
  },
  {
    id: uuid(),
    attributes: {},
    parts: [
      {
        type: PartTypeValues.TEXT.value,
        id: uuid(),
        text:
          'This is a section description. Description of things below goes here.',
        typeramp: 'body',
        textSize: 'md',
        textColor: 'white',
        textWeight: 'normal',
      },
      {
        type: PartTypeValues.LINK.value,
        id: uuid(),
        text: 'View Details',
        linkTheme: 'primary',
        color: 'white',
        href: `/?=${uuid()}`,
      },
    ],
  },
  {
    id: uuid(),
    attributes: {},
    parts: [
      {
        type: PartTypeValues.BUTTON.value,
        id: uuid(),
        text: 'Shop Now',
        buttonTheme: 'primary',
      },
    ],
  },
];

export const blackSectionHeaderWithButton = [
  {
    id: uuid(),
    attributes: {},
    parts: [
      {
        type: PartTypeValues.TEXT.value,
        id: uuid(),
        text: 'Section Header',
        typeramp: 'display',
        textColor: 'black',
        textSize: 'sm',
      },
    ],
  },
  {
    id: uuid(),
    attributes: {},
    parts: [
      {
        type: PartTypeValues.TEXT.value,
        id: uuid(),
        text:
          'This is a section description. Description of things below goes here.',
        typeramp: 'body',
        textSize: 'md',
        textColor: 'black',
        textWeight: 'normal',
      },
      {
        type: PartTypeValues.LINK.value,
        id: uuid(),
        text: 'View Details',
        linkTheme: 'primary',
        color: 'white',
        href: `/?=${uuid()}`,
      },
    ],
  },
  {
    id: uuid(),
    attributes: {},
    parts: [
      {
        type: PartTypeValues.BUTTON.value,
        id: uuid(),
        text: 'Shop Now',
        buttonTheme: 'primary',
      },
    ],
  },
];

export const whiteSectionHeaderWithButton = [
  {
    id: uuid(),
    attributes: {},
    parts: [
      {
        type: PartTypeValues.TEXT.value,
        id: uuid(),
        text: 'Section Header',
        typeramp: 'display',
        textColor: 'white',
      },
    ],
  },
  {
    id: uuid(),
    attributes: {},
    parts: [
      {
        type: PartTypeValues.TEXT.value,
        id: uuid(),
        text:
          'This is a section description. Description of things below goes here.',
        typeramp: 'body',
        textSize: 'md',
        textColor: 'white',
        textWeight: 'normal',
      },
      {
        type: PartTypeValues.LINK.value,
        id: uuid(),
        text: 'View Details',
        linkTheme: 'primary',
        color: 'white',
        href: `/?=${uuid()}`,
      },
    ],
  },
  {
    id: uuid(),
    attributes: {},
    parts: [
      {
        type: PartTypeValues.BUTTON.value,
        id: uuid(),
        text: 'Shop Now',
        buttonTheme: 'primary',
      },
    ],
  },
];

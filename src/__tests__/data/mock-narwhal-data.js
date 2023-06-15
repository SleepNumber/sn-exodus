import { uuid } from '~/util/core/string';

export const whiteBodyText = [
  {
    id: uuid(),
    attributes: {},
    parts: [
      {
        type: 'text',
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
        type: 'text',
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
        type: 'text',
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
        type: 'text',
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
        type: 'text',
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
        type: 'text',
        id: uuid(),
        text: 'This is a section description. Description of things below goes here.',
        typeramp: 'body',
        textSize: 'md',
        textColor: 'white',
        textWeight: 'normal',
      },
      {
        type: 'link',
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
        type: 'button',
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
        type: 'text',
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
        type: 'text',
        id: uuid(),
        text: 'This is a section description. Description of things below goes here.',
        typeramp: 'body',
        textSize: 'md',
        textColor: 'black',
        textWeight: 'normal',
      },
      {
        type: 'link',
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
        type: 'button',
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
        type: 'text',
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
        type: 'text',
        id: uuid(),
        text: 'This is a section description. Description of things below goes here.',
        typeramp: 'body',
        textSize: 'md',
        textColor: 'white',
        textWeight: 'normal',
      },
      {
        type: 'link',
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
        type: 'button',
        id: uuid(),
        text: 'Shop Now',
        buttonTheme: 'primary',
      },
    ],
  },
];

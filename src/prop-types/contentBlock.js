import { shape, string, number, any, arrayOf } from 'prop-types';

const contentBlockType = shape({
  id: string.isRequired,
  type: string.isRequired,
  area: string.isRequired,
  container_width: string,
  data: any,
  name: string,
  position: number,
  segments: arrayOf(shape({ name: string.isRequired })),
  excluded_segments: arrayOf(shape({ name: string.isRequired })),
});

export default contentBlockType;

import OrderWithBothUPSAndHDItems from './OrderWithBothUPSAndHDItems';
import OrderWithOnlyHDItems from './OrderWithOnlyHDItems';
import OrderWithOnlyUPSItems from './OrderWithOnlyUPSItems';

// this will be used to test the parentId combination logic
const testParentCombinationItems = OrderWithBothUPSAndHDItems.non_ups_items;

const simpleUPSItem = OrderWithBothUPSAndHDItems.ups_items[0];

// eslint-disable-next-line import/prefer-default-export
export {
  testParentCombinationItems,
  simpleUPSItem,
  OrderWithBothUPSAndHDItems,
  OrderWithOnlyHDItems,
  OrderWithOnlyUPSItems,
};

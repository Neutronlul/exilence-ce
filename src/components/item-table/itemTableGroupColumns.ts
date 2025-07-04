import { Column } from 'react-table';
import {
  itemCorrupted,
  itemIcon,
  itemIlvlTier,
  itemLinks,
  itemName,
  itemQuantity,
  itemValue,
  sparkLine,
} from '../columns/Columns';

const itemTableGroupColumns: Column<object>[] = [
  itemIcon({
    accessor: 'icon',
    header: 'Icon',
  }),
  itemName({
    accessor: 'name',
    header: 'Name',
  }),
  itemIlvlTier({
    accessor: (row: any) => (row.tier > 0 ? row.tier : row.ilvl),
    header: 'Ilvl / Tier',
  }),
  itemCorrupted({
    accessor: 'corrupted',
    header: 'Corrupted',
  }),
  itemLinks({
    accessor: 'links',
    header: 'Links',
  }),
  {
    Header: 'Quality',
    accessor: 'quality',
    align: 'right',
    maxWidth: 60,
  },
  {
    Header: 'Level',
    accessor: 'level',
    align: 'right',
    maxWidth: 60,
  },
  itemQuantity({
    header: 'Quantity',
    accessor: 'stackSize',
  }),
  sparkLine({
    accessor: 'sparkLine.totalChange',
    header: 'Price last 7 days',
  }),
  itemValue({
    accessor: 'calculated',
    header: 'Price',
  }),
  itemValue({
    accessor: 'total',
    header: 'Total value',
  }),
  itemValue({
    header: 'Cumulative',
    cumulative: true,
  }),
];

export default itemTableGroupColumns;

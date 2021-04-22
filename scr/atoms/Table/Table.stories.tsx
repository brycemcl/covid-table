import Table from '.'

export default {
  title: 'atoms/Table',
  component: Table,
}
const Template = (args) => <Table {...args} />

export const standard = Template.bind({})
standard.args = {
  columns: [
    {
      Header: 'Name',
      columns: [
        {
          Header: 'First Name',
          accessor: 'firstName',
        },
        {
          Header: 'Last Name',
          accessor: 'lastName',
        },
      ],
    },
    {
      Header: 'Info',
      columns: [
        {
          Header: 'Age',
          accessor: 'age',
        },
        {
          Header: 'Visits',
          accessor: 'visits',
        },
        {
          Header: 'Status',
          accessor: 'status',
        },
        {
          Header: 'Profile Progress',
          accessor: 'progress',
        },
      ],
    },
  ],
  data: [
    {
      firstName: 'crack',
      lastName: 'shade',
      age: 11,
      visits: 0,
      progress: 2,
      status: 'complicated',
    },
    {
      firstName: 'rod',
      lastName: 'rabbits',
      age: 27,
      visits: 68,
      progress: 54,
      status: 'single',
    },
    {
      firstName: 'affair',
      lastName: 'bit',
      age: 15,
      visits: 77,
      progress: 25,
      status: 'single',
    },
    {
      firstName: 'fight',
      lastName: 'king',
      age: 5,
      visits: 14,
      progress: 72,
      status: 'complicated',
    },
    {
      firstName: 'tongue',
      lastName: 'children',
      age: 10,
      visits: 21,
      progress: 78,
      status: 'complicated',
    },
    {
      firstName: 'bit',
      lastName: 'polish',
      age: 14,
      visits: 96,
      progress: 85,
      status: 'complicated',
    },
    {
      firstName: 'writer',
      lastName: 'recommendation',
      age: 21,
      visits: 86,
      progress: 45,
      status: 'single',
    },
    {
      firstName: 'inspector',
      lastName: 'expert',
      age: 20,
      visits: 12,
      progress: 41,
      status: 'single',
    },
    {
      firstName: 'inspection',
      lastName: 'night',
      age: 5,
      visits: 85,
      progress: 93,
      status: 'single',
    },
    {
      firstName: 'rings',
      lastName: 'edge',
      age: 2,
      visits: 31,
      progress: 48,
      status: 'complicated',
    },
    {
      firstName: 'quantity',
      lastName: 'regret',
      age: 0,
      visits: 31,
      progress: 7,
      status: 'single',
    },
    {
      firstName: 'country',
      lastName: 'plantation',
      age: 18,
      visits: 19,
      progress: 16,
      status: 'relationship',
    },
    {
      firstName: 'game',
      lastName: 'heart',
      age: 25,
      visits: 30,
      progress: 25,
      status: 'relationship',
    },
    {
      firstName: 'harbor',
      lastName: 'soup',
      age: 9,
      visits: 38,
      progress: 74,
      status: 'single',
    },
    {
      firstName: 'departure',
      lastName: 'country',
      age: 29,
      visits: 74,
      progress: 29,
      status: 'relationship',
    },
    {
      firstName: 'pickle',
      lastName: 'law',
      age: 17,
      visits: 61,
      progress: 63,
      status: 'complicated',
    },
    {
      firstName: 'north',
      lastName: 'media',
      age: 25,
      visits: 81,
      progress: 49,
      status: 'complicated',
    },
    {
      firstName: 'heart',
      lastName: 'degree',
      age: 21,
      visits: 63,
      progress: 85,
      status: 'single',
    },
    {
      firstName: 'childhood',
      lastName: 'servant',
      age: 13,
      visits: 67,
      progress: 29,
      status: 'complicated',
    },
    {
      firstName: 'version',
      lastName: 'note',
      age: 8,
      visits: 36,
      progress: 13,
      status: 'relationship',
    },
  ],
}
export {}

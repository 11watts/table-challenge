import React from 'react';
import PropTypes from 'prop-types';
import {
  Column,
  Cell,
  Table,
  SelectionModes,
  ColumnHeaderCell
} from '@blueprintjs/table';
import { Menu, MenuItem } from '@blueprintjs/core';
import '../../node_modules/@blueprintjs/table/lib/css/table.css';

class PersonTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { people: props.people };
  }

  sort(key, asc) {
    const people = this.state.people.sort((a, b) => {
      if ((asc && a[key] > b[key]) || (!asc && a[key] < b[key])) return 1;
      else return -1;
    });

    console.log(people);
    this.setState({ people });
  }

  renderMenu(key) {
    return (
      <Menu>
        <MenuItem
          icon="sort-asc"
          onClick={() => this.sort(key, true)}
          text="Sort Asc"
        />
        <MenuItem
          icon="sort-desc"
          onClick={() => this.sort(key, false)}
          text="Sort Desc"
        />
      </Menu>
    );
  }

  render() {
    const { people } = this.state;
    return (
      <Table
        numRows={people.length}
        selectionModes={SelectionModes.COLUMNS_ONLY}
      >
        <Column
          columnHeaderCellRenderer={() => (
            <ColumnHeaderCell
              name="First Name"
              menuRenderer={() => this.renderMenu('firstname')}
            />
          )}
          cellRenderer={i => <Cell>{people[i].firstname}</Cell>}
        />
        <Column
          columnHeaderCellRenderer={() => (
            <ColumnHeaderCell
              name="Last Name"
              menuRenderer={() => this.renderMenu('lastname')}
            />
          )}
          cellRenderer={i => <Cell>{people[i].lastname}</Cell>}
        />
        <Column
          columnHeaderCellRenderer={() => (
            <ColumnHeaderCell
              name="Age"
              menuRenderer={() => this.renderMenu('age')}
            />
          )}
          cellRenderer={i => <Cell>{people[i].age}</Cell>}
        />
      </Table>
    );
  }
}

PersonTable.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired
    })
  ).isRequired
};

export default PersonTable;

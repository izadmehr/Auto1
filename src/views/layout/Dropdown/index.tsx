import React, { Component, MouseEvent } from 'react';
import Immutable from 'seamless-immutable';

import {
  DropdownItem,
  DropDownItems,
  DropdownTitle,
  DropdownToggle,
  MenuContainer
} from './Styles';
import { CaretDown } from '../../../assets/SvgIcons/CaretDown';
import { colors } from '../../../utils/theme';
import { CaretUp } from '../../../assets/SvgIcons/CaretUp';

interface Item {
  label: string;
  value: string;
}
interface Props {
  items: Immutable.Immutable<Item[]>;
  title: string;
  selectItem: (selected: string) => void;
  selectedItem: string;
  defaultItem: string;
}
interface States {
  showMenu: boolean;
}

interface Item {
  label: string;
  value: string;
}

export class Dropdown extends Component<Props, States> {
  state = {
    showMenu: false
  };

  static defaultProps = {
    items: []
  };

  showMenu = (event: MouseEvent): void => {
    event.preventDefault();

    this.setState({ showMenu: true }, (): void => {
      document.addEventListener('click', this.closeMenu);
    });
  };

  closeMenu = (): void => {
    this.setState({ showMenu: false }, (): void => {
      document.removeEventListener('click', this.closeMenu);
    });
  };

  onSelect = (selectedItem: string): void =>
    this.props.selectItem(selectedItem);

  renderRow = (item: Item): JSX.Element => (
    <DropdownItem
      key={item.label}
      type="button"
      onClick={(): void => this.props.selectItem(item.value)}
    >
      {item.label}
    </DropdownItem>
  );

  render(): JSX.Element {
    const { showMenu } = this.state;
    const { items, title, selectedItem, defaultItem } = this.props;

    return (
      <MenuContainer>
        <DropdownTitle>{title}</DropdownTitle>
        <DropdownToggle type="button" onClick={this.showMenu}>
          {selectedItem || defaultItem}
          {showMenu ? (
            <CaretUp fill={colors.lightGray} size={12} />
          ) : (
            <CaretDown fill={colors.lightGray} size={12} />
          )}
        </DropdownToggle>

        {showMenu && (
          <DropDownItems className="menu">
            {this.renderRow({ label: defaultItem, value: '' })}
            {items.map((item: Item): JSX.Element => this.renderRow(item))}
          </DropDownItems>
        )}
      </MenuContainer>
    );
  }
}

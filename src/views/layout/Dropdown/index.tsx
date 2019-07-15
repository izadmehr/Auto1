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
  dropdownLabel: string;
}
interface States {
  showMenu: boolean;
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

  render(): JSX.Element {
    const { showMenu } = this.state;
    const { items, title, dropdownLabel } = this.props;

    return (
      <MenuContainer>
        <DropdownTitle>{title}</DropdownTitle>
        <DropdownToggle type="button" onClick={this.showMenu}>
          {dropdownLabel}
          {showMenu ? (
            <CaretUp fill={colors.lightGray} size={12} />
          ) : (
            <CaretDown fill={colors.lightGray} size={12} />
          )}
        </DropdownToggle>

        {showMenu ? (
          <DropDownItems className="menu">
            {items.map(
              (item: Item): JSX.Element => (
                <DropdownItem
                  key={item.value}
                  type="button"
                  onClick={(): void => this.props.selectItem(item.value)}
                >
                  {item.label}
                </DropdownItem>
              )
            )}
          </DropDownItems>
        ) : null}
      </MenuContainer>
    );
  }
}

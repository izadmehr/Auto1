import React, { Component, MouseEvent } from 'react';

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
  items: Item[];
  title: string;
  selectItem: (selected: string) => void;
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
    const { items, title } = this.props;

    return (
      <MenuContainer>
        <DropdownTitle>{title}</DropdownTitle>
        <DropdownToggle type="button" onClick={this.showMenu}>
          Show menu
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

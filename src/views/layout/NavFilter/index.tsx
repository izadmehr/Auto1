import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FilterButton, NavFiltersContainer } from './Styles';
import { Dropdown } from '../Dropdown';
import { RootState } from '../../../stores';
import colorsActions, {
  ColorsSelectors,
  ColorsType
} from '../../../stores/colors';

interface Props {
  colors: ColorsType;
  getColors: () => void;
  selectColor: (color: string) => void;
  selectedColor: string;
}

export class NavFilter extends Component<Props> {
  componentDidMount(): void {
    this.props.getColors();
  }

  render(): JSX.Element {
    return (
      <NavFiltersContainer>
        <Dropdown
          items={this.props.colors}
          title="Color"
          selectItem={this.props.selectColor}
          dropdownLabel={this.props.selectedColor || 'All car colors'}
        />

        <FilterButton>Filter</FilterButton>
      </NavFiltersContainer>
    );
  }
}

const mapStateToProps = (
  state: RootState
): { colors: ColorsType; selectedColor: string } => ({
  colors: ColorsSelectors.getData(state),
  selectedColor: ColorsSelectors.getSelectedColor(state)
});

const dispatchProps = {
  getColors: colorsActions.getColorsRequest,
  selectColor: colorsActions.selectColor
};

export const NavFilterContainer = connect(
  mapStateToProps,
  dispatchProps
)(NavFilter);

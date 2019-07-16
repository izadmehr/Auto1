import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FilterButton, NavFiltersContainer } from './Styles';
import { Dropdown } from '../Dropdown';
import { RootState } from '../../../stores';
import colorsActions, {
  ColorsSelectors,
  ColorsType
} from '../../../stores/colors';
import manufacturersActions, {
  ManufacturersSelectors,
  ManufacturersType
} from '../../../stores/manufacturers';
import carsActions from '../../../stores/cars';

interface Props {
  colors: ColorsType;
  getColors: () => void;
  selectColor: (color: string) => void;
  selectedColor: string;
  manufacturers: ManufacturersType;
  selectedManufacturer: string;
  getManufacturers: () => void;
  selectManufacturer: (color: string) => void;
  getCars: () => void;
}

export class NavFilter extends Component<Props> {
  componentDidMount(): void {
    this.props.getColors();
    this.props.getManufacturers();
  }

  filter = (): void => this.props.getCars();

  render(): JSX.Element {
    return (
      <NavFiltersContainer>
        <Dropdown
          items={this.props.colors}
          title="Color"
          selectItem={this.props.selectColor}
          selectedItem={this.props.selectedColor}
          defaultItem="All car colors"
        />
        <Dropdown
          items={this.props.manufacturers}
          title="Manufacture"
          selectItem={this.props.selectManufacturer}
          selectedItem={this.props.selectedManufacturer}
          defaultItem="All Manufacturers"
        />
        <FilterButton type="button" onClick={this.filter}>
          Filter
        </FilterButton>
      </NavFiltersContainer>
    );
  }
}

const mapStateToProps = (
  state: RootState
): {
  colors: ColorsType;
  selectedColor: string;
  manufacturers: ManufacturersType;
  selectedManufacturer: string;
} => ({
  colors: ColorsSelectors.getData(state),
  selectedColor: ColorsSelectors.getSelectedColor(state),
  manufacturers: ManufacturersSelectors.getData(state),
  selectedManufacturer: ManufacturersSelectors.getSelectedManufacturer(state)
});

const dispatchProps = {
  getColors: colorsActions.getColorsRequest,
  selectColor: colorsActions.selectColor,
  getManufacturers: manufacturersActions.getManufacturersRequest,
  selectManufacturer: manufacturersActions.selectManufacturer,
  getCars: carsActions.getCarsRequest
};

export const NavFilterContainer = connect(
  mapStateToProps,
  dispatchProps
)(NavFilter);

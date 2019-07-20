import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { NavFiltersContainer } from './Styles';
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
import { Button } from '../../../components/Button';

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
  push: (url: string) => void;
}
interface States {
  selectedColor: string;
  selectedManufacturer: string;
}

export class NavFilter extends Component<Props, States> {
  state = {
    selectedColor: '',
    selectedManufacturer: ''
  };

  componentDidMount(): void {
    this.props.getColors();
    this.props.getManufacturers();
  }

  filter = (): void => {
    this.props.push(
      `?color=${this.state.selectedColor}&manufacturer=${this.state.selectedManufacturer}`
    );
    this.props.getCars();
  };

  selectColor = (selectedColor: string): void => {
    this.props.selectColor(selectedColor);
    this.setState({ selectedColor });
  };

  selectManufacturer = (selectedManufacturer: string): void => {
    this.props.selectManufacturer(selectedManufacturer);

    this.setState({ selectedManufacturer });
  };

  render(): JSX.Element {
    return (
      <NavFiltersContainer>
        <Dropdown
          items={this.props.colors}
          title="Color"
          selectItem={this.selectColor}
          selectedItem={this.props.selectedColor}
          defaultItem="All car colors"
        />
        <Dropdown
          items={this.props.manufacturers}
          title="Manufacturer"
          selectItem={this.selectManufacturer}
          selectedItem={this.props.selectedManufacturer}
          defaultItem="All Manufacturers"
        />
        <Button type="button" onClick={this.filter}>
          Filter
        </Button>
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
  getCars: carsActions.getCarsRequest,
  push
};

export const NavFilterContainer = connect(
  mapStateToProps,
  dispatchProps
)(NavFilter);

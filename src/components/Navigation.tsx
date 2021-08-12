import { Grid, GridRow, GridColumn, Menu, MenuItem } from "semantic-ui-react";

function Navigation({ children }: { children: JSX.Element }): JSX.Element {
  return (
    <Grid padded="vertically">
      <GridRow stretched>
        <GridColumn width={16}>
          <Menu fixed="top">
            <MenuItem as="a" header>
              <div>Pokemons</div>
            </MenuItem>
            <MenuItem position="right"></MenuItem>
          </Menu>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn width={16}>{children}</GridColumn>
      </GridRow>
    </Grid>
  );
}

export default Navigation;

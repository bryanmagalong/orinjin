/* eslint-disable max-len */
import { connect } from 'react-redux';
import HomeConnected from '../components/Home/HomeConnected';
import { getCategoriesList } from '../actions/categories';
import { getServicesList, setSelectedList, getServicesListByPostalCode } from '../actions/service';
import { filterByCategory } from '../actions/filters';
import { getServicesWithSlug } from '../reducers/services';
import { getCategoriesOptions } from '../reducers/categories';

const mapStateToProps = (state) => ({
  infos: { ...state.user.infos },
  // if service by category list is empty -> get unfiltered list, else -> get filtered list by category
  services: state.services.listFiltered.length === 0 ? getServicesWithSlug(state.services.list) : getServicesWithSlug(state.services.listFiltered),
  // if services by postal code list is empty -> get unfiltered list, else -> get filtered list by category
  servicesPostalcode: state.services.listPostalCodeFiltered.length === 0 ? getServicesWithSlug(state.services.listPostalCode) : getServicesWithSlug(state.services.listPostalCodeFiltered),
  servicesResults: state.services.listFiltered.length,
  servicesPostalCodeResults: state.services.listPostalCodeFiltered.length,
  selectedList: state.services.selectedList,
  categories: getCategoriesOptions(state.categories),
});

const mapDispatchToProps = (dispatch) => ({
  getServicesList: () => dispatch(getServicesList()),
  setSelectedList: (payload) => dispatch(setSelectedList(payload)),
  getServicesListByPostalCode: (payload) => dispatch(getServicesListByPostalCode(payload)),
  getCategoriesList: () => dispatch(getCategoriesList()),
  filterByCategory: (payload) => dispatch(filterByCategory(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeConnected);

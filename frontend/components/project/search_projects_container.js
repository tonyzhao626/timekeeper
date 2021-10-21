import { connect } from 'react-redux';
import SearchProjects from './search_projects';
import { searchProjects } from '../../actions/projects_actions';
import _ from 'lodash';

const mapStateToProps = state => ({
  projects: state.projects,
  searchResults: state.searchResults
});

const mapDispatchToProps = dispatch => ({
  searchProjects: _.debounce(search => dispatch(searchProjects(search)), 150)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchProjects);

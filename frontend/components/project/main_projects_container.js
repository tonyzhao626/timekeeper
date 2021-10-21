import MainProjects from './main_projects';
import { connect } from 'react-redux';
import { requestProjects,
         requestProject } from '../../actions/projects_actions';
import { receiveErrors, clearErrors } from '../../actions/errors_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  projects: state.projects
});

const mapDispatchToProps = dispatch => ({
  requestProjects: () => dispatch(requestProjects()),
  requestProject: id => dispatch(requestProject(id)),
  clearErrors: () => dispatch(clearErrors()),
  receiveErrors: () => dispatch(receiveErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainProjects);

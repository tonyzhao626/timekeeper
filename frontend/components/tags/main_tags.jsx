import React from 'react';
import NavigationContainer from '../navigation/navigation_container';
import TagFormContainer from './tag_form_container';
import TagsListContainer from './tags_list_container';
import { values } from 'lodash';

class MainTags extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTags();
    this.props.requestProjects();
  }

  render() {
    return(
      <div className="main-page">
        <div className="main-page-navbar">
          <NavigationContainer currentUser={this.props.currentUser} />
        </div>

        <div className="main-page-body">
          <div className="tags-page-headings">
            <div className="tags-headings">
              <div className="main-tags-title">
                Tags
              </div>
            </div>
          </div>
          <div className="tags-page-body">
            <div className="tag-form">
              <TagFormContainer />
            </div>
            <div className="tags-list">
              <TagsListContainer tags={this.props.tags}
                                 projects={this.props.projects} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainTags;

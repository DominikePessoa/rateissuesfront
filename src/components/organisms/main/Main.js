import React from 'react'
import IssuesList from 'components/molecules/issues_list/IssuesList'
import IssuesTabs from 'components/molecules/issues_tabs/IssuesTabs'
import Tab from 'components/atoms/tab/Tab'
import Github from 'github-api'
import GithubQueryBuilder from '../../helpers/GithubQueryBuilder'
import Settings from 'components/atoms/settings/Settings'
import Filters from 'components/molecules/filters/Filters'
import classNames from 'classnames'
import _ from 'lodash'

require('./stylesheets/main.scss')

class Main extends React.Component {
  constructor (props) {
    super(props)
    // TODO associate creation of query with tab passing the value on the constructor
    this.state = {
      issues: [],
      activeTab: 'hot',
      githubQuery: new GithubQueryBuilder(),
      currentComponent: 'IssuesList'
    }
  }
  setGithubQuery (tab) {
    this.state.githubQuery.applyFilter(tab)
  }
  componentDidMount () {
    this.requestGithub()
  }
  changeTab (tab) {
    this.setState({activeTab: tab})
    this.state.githubQuery.applyFilter(tab)
    this.requestGithub()
  }
  requestGithub () {
    let github = new Github({})
    let search = github.getSearch(this.state.githubQuery.getQuery())

    search.issues(null, (err, issues) => {
      this.setState({
        issues: issues.items
      })
    })
  }
  currentComponentClass (component) {
    let componentClass = classNames({
      'component': true,
      'active': this.state.currentComponent === component
    })
    return componentClass
  }
  changeCurrentComponent (component) {
    this.setState({currentComponent: component})
  }
  render () {
    return (
      <div className='main-component column'>
        <div className={ this.currentComponentClass('IssuesList') }>
          <IssuesTabs className='issues-tabs-component'>
            <header>
              <h4>{ _.capitalize(this.state.activeTab) } Issues</h4>
            </header>
            <div className='row tabs'>
              <Tab name='hot'
                onClick={ this.changeTab.bind(this) }
                activeTab={ this.state.activeTab } />
              <Tab name='trending'
                onClick={ this.changeTab.bind(this) }
                activeTab={ this.state.activeTab } />
              <Tab name='fresh'
                onClick={ this.changeTab.bind(this) }
                activeTab={ this.state.activeTab } />
            </div>
            <Settings changeComponentTo='Filters'
              onClick={ this.changeCurrentComponent.bind(this) }>
            </Settings>
          </IssuesTabs>
          <IssuesList issues={ this.state.issues }
            activeTab={ this.state.activeTab } />
        </div>
        <div className={ this.currentComponentClass('Filters') }>
          <Filters changeComponentTo='IssuesList'
            onClick={ this.changeCurrentComponent.bind(this) }>
          </Filters>
        </div>
      </div>
    )
  }
}

Main.displayName = 'OrganismMain'

// Uncomment properties you need
// Main.propTypes = {};
// Main.defaultProps = {};

export default Main

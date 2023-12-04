import {Component} from 'react'
import Loader from 'react-loader-spinner'
import RepositoryItem from '../RepositoryItem'
import LanguageFilterItem from '../LanguageFilterItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GitHubPopularRepos extends Component {
  state = {
    selectedLanguage: languageFiltersData[0].id,
    reposList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getGitHubRepos()
  }

  activeLanguage = id => {
    const activeLanguageElement = languageFiltersData.find(
      item => item.id === id,
    )

    this.setState(
      {selectedLanguage: activeLanguageElement.id},
      this.getGitHubRepos,
    )
  }

  getGitHubRepos = async () => {
    const {selectedLanguage} = this.state
    this.setState({isLoading: true})
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${selectedLanguage}`

    const response = await fetch(apiUrl)

    const data = await response.json()

    const respositoryList = data.popular_repos.map(eachRepo => ({
      avatarUrl: eachRepo.avatar_url,
      name: eachRepo.name,
      id: eachRepo.id,
      forksCount: eachRepo.forks_count,
      starsCount: eachRepo.stars_count,
      issuesCount: eachRepo.issues_count,
    }))

    this.setState({reposList: respositoryList, isLoading: false})
  }

  render() {
    const {selectedLanguage, reposList, isLoading} = this.state
    return (
      <nav className="nav-container">
        <h1 className="main-heading">Popular</h1>

        <ul className="languages-container">
          {languageFiltersData.map(filterLanguage => (
            <LanguageFilterItem
              key={filterLanguage.id}
              filteredLanguage={filterLanguage}
              activeLanguage={this.activeLanguage}
              isActive={filterLanguage.id === selectedLanguage}
            />
          ))}
        </ul>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="list-container">
            {reposList.map(eachRepo => (
              <RepositoryItem key={eachRepo.id} repoDetails={eachRepo} />
            ))}
          </ul>
        )}
      </nav>
    )
  }
}

export default GitHubPopularRepos

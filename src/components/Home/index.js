import {Component} from 'react'
import {v4} from 'uuid'

import TagButton from '../TagButton'
import MyTasks from '../MyTasks'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class Home extends Component {
  state = {
    myTasksList: [],
    activeOptionId: tagsList[0].optionId,
    task: '',
    activeTag: '',
  }

  onChangeTagsOption = event => {
    this.setState({activeOptionId: event.target.value})
  }

  onChangeTask = event => {
    this.setState({task: event.target.value})
  }

  onChangeTags = tagId => {
    this.setState({activeTag: tagId})
  }

  addTask = () => {
    const {activeOptionId, task} = this.state
    const index = tagsList.findIndex(each => each.optionId === activeOptionId)
    const tagName = tagsList[index].displayText
    const newTask = {task, tagName, id: v4()}
    this.setState(prevState => ({
      myTasksList: [...prevState.myTasksList, newTask],
    }))
  }

  render() {
    const {myTasksList, activeOptionId, task, activeTag} = this.state
    const searchResults = myTasksList.filter(eachSearch =>
      eachSearch.name.toLowerCase().includes(activeTag.toLowerCase()),
    )
    const showTasks = searchResults.length === 0
    return (
      <div>
        <div>
          <h1>Create a task</h1>
          <label>
            Task
            <input
              type="text"
              placeholder="Enter the task here"
              value={task}
              onChange={this.onChangeTask}
            />
          </label>
          <select
            className="select"
            value={activeOptionId}
            onChange={this.onChangeTagsOption}
          >
            {tagsList.map(eachTag => (
              <option
                key={eachTag.optionId}
                value={eachTag.optionId}
                className="select-option"
              >
                {eachTag.displayText}
              </option>
            ))}
          </select>
          <button type="button" onClick={this.addTask}>
            Add Task
          </button>
        </div>
        <div>
          <h1>Tags</h1>
          <ul>
            {tagsList.map(tag => (
              <TagButton
                tag={tag}
                key={tag.optionId}
                onChangeTags={this.onChangeTags}
              />
            ))}
          </ul>
          <h1>Tasks</h1>
          <div>
            {showTasks ? (
              <p>no tasks</p>
            ) : (
              <ul>
                {searchResults.map(eachTask => (
                  <MyTasks eachTask={eachTask} key={eachTask.id} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home

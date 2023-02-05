const MyTasks = props => {
  const {eachTask} = props
  const {task, tagName} = eachTask

  return (
    <li>
      <p>{task}</p>
      <p>{tagName}</p>
    </li>
  )
}

export default MyTasks

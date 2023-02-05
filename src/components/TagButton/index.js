const TagButton = props => {
  const {tag, onChangeTags} = props
  const {displayText} = tag
  const onClickBtn = () => {
    onChangeTags(displayText)
  }

  return (
    <li>
      <button type="button" onClick={onClickBtn}>
        {displayText}
      </button>
    </li>
  )
}

export default TagButton

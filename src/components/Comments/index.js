import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [commentsList, setCommentsList] = useState([])
  const onChangeName = event => {
    setName(event.target.value)
  }

  const onchangeCommentTextInput = event => {
    setCommentText(event.target.value)
  }
  const onAddCommit = event => {
    event.preventDefault()

    const newComment = {id: uuidv4(), name, commentText}
    setName('')
    setCommentText('')
    setCommentsList(prevCommentsList => [...prevCommentsList, newComment])
  }
  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddCommit}>
        <NameInput
          onChange={onChangeName}
          value={name}
          type="text"
          placeholder="Your name"
        />
        <CommentTextInput
          onChange={onchangeCommentTextInput}
          value={commentText}
          placeholder="Your comment"
          rows="6"
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>

      <CommentsList>
        {commentsList.map(each => (
          <CommentItem commentDetails={each} key={each.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}
export default Comments

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todo from './Todo'

describe('Todo', () => {
  const todo = {
    _id: '1',
    text: 'Test todo',
    done: false
  }
  const deleteTodo = vi.fn()
  const completeTodo = vi.fn()

  test('renders Todo', () => {
    render(
      <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    )
    const todoElement = screen.getByText('Test todo')
    expect(todoElement).toBeDefined()
  })

  test('delete Todo', async () => {
    render(
      <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    )
    const user = userEvent.setup()
    const deleteButton = screen.getByText('Delete')
    await user.click(deleteButton)
    expect(deleteTodo.mock.calls).toHaveLength(1)
  })

  test('can be set as done', async () => {
    render(
      <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    )
    const user = userEvent.setup()
    const button = screen.getByText('Set as done')
    await user.click(button)
    expect(completeTodo.mock.calls).toHaveLength(1)
  })
})
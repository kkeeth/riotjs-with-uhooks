export default [
  {
    path: '/',
    label: 'Home',
    componentName: 'home',
    props: {},
  },
  {
    path: '/todo',
    label: 'ToDo',
    componentName: 'todo',
    props: {
      initialTodoList: [
        { id: 1, title: 'task1', done: false },
        { id: 2, title: 'task2', done: true },
        { id: 3, title: 'task3', done: false },
      ],
      initialNextId: 4,
    },
  },
]

Проведи рефакторинг кода задания [Книга контактов](https://github.com/dimon-mirchuk/goit-react-hw-03-phonebook) используя React-хуки.

Выполни рефакторинг кода приложения «[Книга контактов](https://github.com/dimon-mirchuk/goit-react-hw-04-hooks-phonebook)» добавив управление
состоянием при помощи библиотеки [Redux Toolkit](https://redux-toolkit.js.org/).

Пусть Redux-состояние выглядит следующим образом.

```bash
{
  contacts: {
    items: [],
    filter: ''
  }
}
```

- Создай хранилище с `configureStore()`
- Создай действия сохранения и удаления контакта, а также обновления фильтра.
  Используй функцию `createAction()`.
- Создай редюсеры контактов и фильтра. Используй функцию `createReducer()` или
  `createSlice()`.
- Свяжи React-компоненты с Redux-логикой при помощи хуков бибилиотеки
  [react-redux](https://react-redux.js.org/).

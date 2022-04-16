import { install } from 'riot'
import * as uhooks from 'uhooks'

export default () => {
  // install global modules
  install((component) => {
    component.useState = uhooks.useState
  })
}

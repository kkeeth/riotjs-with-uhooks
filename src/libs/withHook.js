import * as uhooks from 'uhooks'

export const withHook = (setup) => {
  return {
    onBeforeMount() {
      this.isUpdated = false
      uhooks.hooked(() => {
        Object.assign(this, setup(this.props, this.state))
        if (this.isUpdated) {
          this.update()
        }
      })()
      this.isUpdated = true
    },
  }
}

import * as uhooks from 'uhooks'

export const todoPage = (setup, components) => {
  return {
    onBeforeMount() {
      this.isUpdated = false
      this.hook = uhooks.hooked(() => {
        Object.assign(this, setup(this.props, this.state))
        if (this.isUpdated) {
          this.update()
        }
      })
      this.hook()
      this.isUpdated = true
    },
    onBeforeUpdate() {
      this.isUpdated = false
      this.hook()
      this.isUpdated = true
    },
    components: {
      ...components,
    },
  }
}

export const todoFormComponent = (setup, components) => {
  return {
    onBeforeMount() {
      this.isUpdated = false
      this.hook = uhooks.hooked(() => {
        Object.assign(this, setup(this.props))
        if (this.isUpdated) {
          this.update()
        }
      })
      this.hook()
      this.isUpdated = true
    },
    onBeforeUpdate() {
      this.isUpdated = false
      this.hook()
      this.isUpdated = true
    },
    components: {
      ...components,
    },
  }
}

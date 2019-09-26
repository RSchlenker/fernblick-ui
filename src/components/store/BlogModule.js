import Strapi from 'strapi-sdk-javascript/build/main'

const state = {
  blogs: [],
  activeBlog: {},
  errorWhileLoadingBlog: false
}

const strapi = new Strapi('http://strapi.schlenker.io')

const mutations = {
  setBlogs (state, blogs) {
    state.blogs = state.blogs.concat(blogs)
    state.blogs = state.blogs.concat(blogs)
    state.blogs = state.blogs.concat(blogs)
  },
  setActiveBlog (state, blog) {
    state.activeBlog = blog
  },
  setErrorWhileLoadingBlog (state, errorOccurred) {
    state.errorWhileLoadingBlog = errorOccurred
  }
}

const getters = {
  blogs: state => {
    return state.blogs
  },
  activeBlog: state => {
    return state.activeBlog
  },
  errorWhileLoadingBlog: state => {
    return state.errorWhileLoadingBlog
  }
}

const actions = {
  loadBlogs ({commit, state}) {
    if (state.blogs.length > 0) {
      return
    }
    strapi.getEntries('blogs').then((blogs) => {
      commit('setBlogs', blogs)
    })
  },
  loadBlog ({commit, state}, blogId) {
    commit('setErrorWhileLoadingBlog', false)
    if (state.activeBlog.id === blogId) {
      return
    }
    if (state.blogs.length > 0) {
      const requestedBlog = state.blogs.find(blog => {
        return blog.id === blogId
      })
      commit('setActiveBlog', requestedBlog)
    }
    if (!(state.activeBlog.id === blogId)) {
      strapi.getEntry('blogs', blogId).then((blog) => {
        commit('setActiveBlog', blog)
      }).catch(() => {
        commit('setErrorWhileLoadingBlog', true)
      })
    }
  }
}

export default {
  actions,
  getters,
  mutations,
  state
}

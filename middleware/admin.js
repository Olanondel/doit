export default function({ store, redirect, route }) {
  const isAdmin = (store.state.auth.loggedIn && store.state.auth.user.localId === 'fWupd31qDVeIWDoEyYtQpWJhuRq2')
  const urlRequiresAuth = /^\/admin(\/|$)/.test(route.fullPath)

  if (urlRequiresAuth && !isAdmin) {
    return redirect('/')
  }

  return Promise.resolve
}

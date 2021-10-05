
importScripts(
  'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyDa-YwgWTp2GDyVYEfv-XLb62100_HoEvU","authDomain":"nuxt-fire-demo.firebaseapp.com","projectId":"nuxt-fire-demo","storageBucket":"nuxt-fire-demo.appspot.com","messagingSenderId":"807370470428","appId":"1:807370470428:web:26da98c86c3fd352","measurementId":"G-XT6PVC1D4X"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

// Setup event listeners for actions provided in the config:
self.addEventListener('notificationclick', function(e) {
  const actions = [{"action":"goToLupasGithub","url":"https:\u002F\u002Fgithub.com\u002Flupas"},{"action":"goToModuleGithub","url":"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Ffirebase-module"}]
  const action = actions.find(x => x.action === e.action)
  const notification = e.notification

  if (!action) return

  if (action.url) {
    clients.openWindow(action.url)
    notification.close()
  }
})

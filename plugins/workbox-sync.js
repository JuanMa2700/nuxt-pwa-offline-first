// BackgroundSync Plugin creation for our service worker registration
const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin(
  'queueName',
  {
    maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
  }
)

// Registering our BackgroundSync service worker
// configured to store failed PUT requests for given route
// in this case, our mock server url
workbox.routing.registerRoute(
  /https:\/\/c89adbb9-e00c-461a-a46b-24411f352568\.mock\.pstmn\.io\/user/,
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  'PUT'
)

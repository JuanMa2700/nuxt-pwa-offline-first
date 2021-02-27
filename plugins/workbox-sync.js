const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin(
  'queueName',
  {
    maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
  }
)

workbox.routing.registerRoute(
  /https:\/\/c89adbb9-e00c-461a-a46b-24411f352568\.mock\.pstmn\.io\/user/,
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  'PUT'
)

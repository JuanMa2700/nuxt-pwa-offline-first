// Custom class to manage interaction
// with indexed db
// See official doc here
// https://developer.mozilla.org/es/docs/Web/API/IndexedDB_API/Using_IndexedDB

class ReqDB {
  static get DB_NAME() {
    return 'workbox-background-sync'
  }

  static get REQUESTS_STORE_NAME() {
    return 'requests'
  }

  // Conection to indexed db
  connect() {
    return new Promise((resolve, reject) => {
      if (this.db) {
        resolve(this)
        return
      }
      const req = indexedDB.open(ReqDB.DB_NAME)

      req.onupgradeneeded = (event) => {
        const db = event.target.result
        db.createObjectStore(ReqDB.REQUESTS_STORE_NAME, {
          keyPath: 'id',
          autoIncrement: true,
        })
      }

      req.onsuccess = (event) => {
        this.db = event.target.result
        resolve(this)
      }
    })
  }

  // Fetch our registers on indexed db for
  // pending requests registered through
  // workbox backgroundSync service worker
  getAll() {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(['requests'], 'readonly')
      const store = tx.objectStore('requests')
      store.getAll().onsuccess = (event) => {
        resolve(event.target.result)
      }
    })
  }
}

export default new ReqDB()

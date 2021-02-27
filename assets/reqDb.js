class ReqDB {
  static get DB_NAME() {
    return 'workbox-background-sync'
  }

  static get REQUESTS_STORE_NAME() {
    return 'requests'
  }

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

  getTransaction(stores, readWrite = 'readwrite') {
    return this.db.transaction(stores, readWrite)
  }

  getRequestsStore() {
    return this.getTransaction([ReqDB.REQUESTS_STORE_NAME]).objectStore(
      ReqDB.REQUESTS_STORE_NAME
    )
  }

  getAll() {
    return new Promise((resolve, reject) => {
      const requests = []
      const store = this.getRequestsStore()
      store.openCursor().onsuccess = (event) => {
        const cursor = event.target.result
        if (cursor) {
          requests.push(cursor.value)
          cursor.continue()
        }
        resolve(requests)
      }
      store.openCursor().onerror = (e) => {
        reject(e)
      }
    })
  }
}

export default new ReqDB()

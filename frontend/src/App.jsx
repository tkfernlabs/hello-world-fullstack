import { useState, useEffect } from 'react'
import axios from 'axios'

const API_BASE_URL = 'https://backend-morphvm-tuxens9g.http.cloud.morph.so'

function App() {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [dbStatus, setDbStatus] = useState(null)
  const [helloData, setHelloData] = useState(null)

  // Fetch initial data
  useEffect(() => {
    fetchHelloData()
    fetchDbStatus()
    fetchMessages()
  }, [])

  const fetchHelloData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/hello`)
      setHelloData(response.data)
    } catch (error) {
      console.error('Error fetching hello data:', error)
    }
  }

  const fetchDbStatus = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/db-status`)
      setDbStatus(response.data)
    } catch (error) {
      console.error('Error fetching DB status:', error)
    }
  }

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/messages`)
      setMessages(response.data)
    } catch (error) {
      console.error('Error fetching messages:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    setLoading(true)
    try {
      await axios.post(`${API_BASE_URL}/api/messages`, {
        content: newMessage
      })
      setNewMessage('')
      await fetchMessages() // Refresh messages
    } catch (error) {
      console.error('Error posting message:', error)
      alert('Failed to post message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🌍 Hello World Application
          </h1>
          <p className="text-gray-600">Full-stack application with React + Node.js + PostgreSQL</p>
        </header>

        {/* API Status Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Hello API Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-3 text-gray-700">📡 Backend API Status</h2>
            {helloData ? (
              <div className="space-y-2">
                <p className="text-green-600 font-medium">✅ Connected</p>
                <p className="text-sm text-gray-600">{helloData.message}</p>
                <p className="text-xs text-gray-500">Environment: {helloData.environment}</p>
                <p className="text-xs text-gray-500">Time: {new Date(helloData.timestamp).toLocaleString()}</p>
              </div>
            ) : (
              <p className="text-yellow-600">⏳ Connecting to backend...</p>
            )}
          </div>

          {/* Database Status Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-3 text-gray-700">🗄️ Database Status</h2>
            {dbStatus ? (
              <div className="space-y-2">
                <p className="text-green-600 font-medium">✅ {dbStatus.status}</p>
                <p className="text-sm text-gray-600">{dbStatus.message}</p>
                <p className="text-xs text-gray-500">Database: {dbStatus.database}</p>
                <p className="text-xs text-gray-500">Version: PostgreSQL {dbStatus.version}</p>
              </div>
            ) : (
              <p className="text-yellow-600">⏳ Checking database connection...</p>
            )}
          </div>
        </div>

        {/* Message Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">✉️ Post a Message</h2>
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Enter your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !newMessage.trim()}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Posting...' : 'Post Message'}
            </button>
          </form>
        </div>

        {/* Messages List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-700">💬 Recent Messages</h2>
            <button
              onClick={fetchMessages}
              className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              🔄 Refresh
            </button>
          </div>
          
          {messages.length > 0 ? (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {messages.map((message) => (
                <div key={message.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <p className="text-gray-800 mb-2">{message.content}</p>
                  <p className="text-xs text-gray-500">
                    Posted: {new Date(message.created_at).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No messages yet. Be the first to post!</p>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center mt-10 text-gray-600">
          <p>Backend API: <a href={API_BASE_URL} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{API_BASE_URL}</a></p>
          <p className="mt-2">Built with ❤️ using React, Node.js, Express, and PostgreSQL (Neon)</p>
        </footer>
      </div>
    </div>
  )
}

export default App

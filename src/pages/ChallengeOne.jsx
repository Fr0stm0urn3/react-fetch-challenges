import { useState, useEffect } from "react"

const ChallengeOne = () => {
  const [type, setType] = useState("users")
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = `https://jsonplaceholder.typicode.com/${type}`
      try {
        const res = await fetch(API_URL)

        if (res.status !== 200) {
          throw new Error("Something went wrong. Please Reload The Page.")
        }

        const data = await res.json()
        setItems(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [type])

  if (loading) {
    return (
      <h2 className="text-4xl flex justify-center items-center min-h-screen">
        Loading...
      </h2>
    )
  }

  return (
    <div className="mt-10">
      <div className="flex m-6 gap-5">
        <button
          className={`w-full border-none rounded-md text-xl py-2 hover:bg-opacity-70 duration-200 ${
            type === "users" ? "bg-black text-white scale-110" : "text-black bg-gray-200"
          }`}
          onClick={() => setType("users")}
        >
          users
        </button>
        <button
          className={`w-full border-none rounded-md text-xl py-2 hover:bg-opacity-70 duration-200 ${
            type === "posts" ? "bg-black text-white scale-110" : "text-black bg-gray-200"
          }`}
          onClick={() => setType("posts")}
        >
          posts
        </button>
        <button
          className={`w-full border-none rounded-md text-xl py-2 hover:bg-opacity-70 duration-200 ${
            type === "comments"
              ? "bg-black text-white scale-110"
              : "text-black bg-gray-200"
          }`}
          onClick={() => setType("comments")}
        >
          comments
        </button>
      </div>
      <ul>
        {items &&
          items.length &&
          items.map((item) => (
            <li className="max-w-2xl mx-auto" key={item.id}>
              <span className="text-2xl text-purple-800 mr-3">{item.id}.</span>
              {JSON.stringify(item)}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ChallengeOne

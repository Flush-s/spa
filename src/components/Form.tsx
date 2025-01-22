import React, { useState, useEffect } from "react"

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const feedback = {
      ...formData,
      timestamp: new Date().toISOString(),
    }

    const existingFeedbacks = JSON.parse(localStorage.getItem("feedbacks") || "[]")
    const updatedFeedbacks = [...existingFeedbacks, feedback]
    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks))

    setStatus({ success: true, message: "Отзыв успешно сохранен" })
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 3000)
      return () => clearTimeout(timer)
    }
  }, [status])

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-[#e1ece5] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-3xl font-medium mb-6 text-center text-[#2c2d35]">Обратная связь</h2>
        <div className="mb-4">
          <label className="block text-[#86918a] text-lg font-medium mb-2" htmlFor="name">
            Имя
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#2c2d35] leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Ваше имя"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#86918a] text-lg font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#2c2d35] leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="your@email.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#86918a] text-lg font-medium mb-2" htmlFor="subject">
            Тема
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#2c2d35] leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            placeholder="Тема сообщения"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-[#86918a] text-lg font-medium mb-2" htmlFor="message">
            Сообщение
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#2c2d35] leading-tight focus:outline-none focus:shadow-outline h-32"
            id="message"
            placeholder="Ваше сообщение"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-[#598d66] hover:bg-[#4a7d56] text-white font-medium text-xl py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
            type="submit"
          >
            Отправить
          </button>
        </div>
        {status && (
          <div className={`mt-4 text-center ${status.success ? "text-[#598d66]" : "text-red-600"}`}>
            {status.message}
          </div>
        )}
      </form>
    </div>
  )
}


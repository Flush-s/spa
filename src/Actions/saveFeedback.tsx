"use server"

import fs from "fs/promises"
import path from "path"

export async function saveFeedback(formData: FormData) {
  const feedback = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    timestamp: new Date().toISOString(),
  }

  const filePath = path.join(process.cwd(), "data", "feedback.json")

  try {
    let feedbacks = []
    try {
      const fileContent = await fs.readFile(filePath, "utf8")
      feedbacks = JSON.parse(fileContent)
    } catch (error) {
      // Если файл не существует или пуст, начинаем с пустого массива
    }

    feedbacks.push(feedback)

    await fs.writeFile(filePath, JSON.stringify(feedbacks, null, 2))

    return { success: true, message: "Отзыв успешно сохранен" }
  } catch (error) {
    console.error("Ошибка при сохранении отзыва:", error)
    return { success: false, message: "Ошибка при сохранении отзыва" }
  }
}


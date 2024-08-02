const TelegramBot = require('node-telegram-bot-api')
const express = require('express')
require('dotenv').config()

const token = '7208284250:AAFhQUUxxhprgy6tS_APHbi5s-Za3tHdbz4'
const webAppUrl = 'https://calculator-wepapp.vercel.app/'

const bot = new TelegramBot(token, { polling: true })

const app = express()
const port = process.env.PORT || 4000

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id

    bot.sendMessage(chatId, 'Здравствуй , Дорогой друг 🤝. Я добавила для тебя удобный калькулятор расчета стоимости цены на игру. Выбери игру и посмотри ценник. Данный калькулятор не распространяется на подписки.', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Подписка Украина', url: 'https://t.me/Ladyshiva2077/106' },
                    { text: 'Подписка Турция', url: 'https://t.me/Ladyshiva2077/41' }
                ],
                [
                    { text: 'Отзывы', url: 'https://t.me/Ladyshiva2077/40' },
                    { text: 'Оформить', url: 'https://t.me/s/LadyShiva90' }
                ]
            ]
        }
    })
})

app.listen(port, () => {
    console.log(`🖥️ Сервер запущен на порту ${port}`)
})

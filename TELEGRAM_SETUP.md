
# Telegram Bot Setup Guide

## Creating Your Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Send `/newbot` to create a new bot
3. Follow the prompts to set a name and username for your bot
4. Copy the API token provided by BotFather

## Setting Up the Bot Token

1. In Replit, go to the Secrets tool (lock icon in the sidebar)
2. Add a new secret:
   - Key: `TELEGRAM_BOT_TOKEN`
   - Value: Your bot token from BotFather

## Using the Bot

1. Search for your bot in Telegram using the username you created
2. Send `/start` to initialize the bot
3. Send `/getpassword` to receive a one-time access password
4. Use the password on the portfolio lock page

## Password Features

- Each password is single-use only
- Passwords expire after 24 hours
- Once used, a password cannot be reused
- Request new passwords anytime via Telegram

## Testing Locally

The bot will start automatically when you run the application. Check the console for the message "Telegram bot started successfully".

If you see "TELEGRAM_BOT_TOKEN not set", make sure you've added the token to your Secrets.

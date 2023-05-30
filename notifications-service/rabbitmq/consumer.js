import amqp from 'amqplib';
import { sendNotification } from '../services/notificationService.js';

export const startConsumer = async () => {
    const connection = await amqp.connect(process.env.RABBIT_SERVER);
    const channel = await connection.createChannel();
    await channel.assertQueue('notifications');

    channel.consume('notifications', async (message) => {
        const todoBuffer = message.content; 
        const todoString = todoBuffer.toString(); 
        console.log(todoString);
        const todo = JSON.parse(todoString); 
        console.log(todo);
        // Process the Todo data and send the notification
        sendNotification(todo);

        // Acknowledge the message
        channel.ack(message);
    });
};



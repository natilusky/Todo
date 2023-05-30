import cron from 'node-cron';
import { sendNotification } from '../rabbitmq/publisher.js';
import Todo from '../models/todoModel.js';

export const startCronJob = () => {
    const cronTask = cron.schedule('*/10 * * * *', async () => {
        console.log('start CronJob...');
        try {
            const now = new Date();

            const startTime = new Date(now.getTime() - 10 * 60 * 1000); // 10 minutes ago
            const endTime = now;

            // Filter the tasks based on the deadline within the specified time range
            const todos = await Todo.find({
                deadline: {
                    $gte: startTime,
                    $lte: endTime
                }
            });
            console.log(todos);
            console.log(startTime);
            console.log(endTime);
            todos.forEach(todo => {
                // Send the notification
                sendNotification(todo);
            });

        } catch (error) {
            console.error('Error running cron job:', error);
        }
    });

    // Start the cron job
    cronTask.start();
};

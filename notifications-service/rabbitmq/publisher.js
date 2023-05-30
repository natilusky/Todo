import amqp from 'amqplib';

export const publishToQueue = async (queueName, data) => {
  let connection;
  let channel;

  try {
    connection = await amqp.connect(process.env.RABBIT_SERVER);
    channel = await connection.createChannel();
    await channel.assertQueue(queueName, { durable: true });
    channel.sendToQueue(queueName, Buffer.from(data));
  } catch (error) {
    console.error('Error publishing to queue:', error);
  } finally {
    if (channel) {
      await channel.close();
    }
    if (connection) {
      await connection.close();
    }
  }
};

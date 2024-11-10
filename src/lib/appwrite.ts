import { Account, Client } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('ibrahim-ayed-portfolio'); // Replace with your project ID

export const account = new Account(client);
// const user = await account.createJWT();

export { ID } from 'appwrite';

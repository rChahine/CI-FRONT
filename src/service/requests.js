import axios from 'axios';

export const servers = ['127.0.0.1:2345'];

export const getUsers = () =>
  new Promise((resolve) => {
    const data = [];
    servers.forEach(async (server) => {
      await axios.get(`http://${server}/users`).then((tab) => {
        data.push({ server, users: tab.data });
      });
      resolve(data);
    });
  });

export const getChatrooms = () =>
  new Promise((resolve) => {
    const data = [];
    servers.forEach(async (server) => {
      await axios.get(`http://${server}/chatrooms`).then((tab) => {
        data.push({ server, chatrooms: tab.data });
      });
      resolve(data);
    });
  });

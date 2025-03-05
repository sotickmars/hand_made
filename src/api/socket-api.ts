import { io } from 'socket.io-client';

const ws = io('http://localhost:3001');

const sendMessage = (message: MessageDataType) => {
  ws.emit('send_message', { message });
};

const receiveMessage = (callback: SubscribersType) => {
  ws.on('receive_message', callback);
};
const cleanupWS = () => {
  ws.off('receive_message');
  ws.off('send_message');
};
const disconnectWS = () => {
  ws.disconnect();
};

export const socketApi = {
  send: sendMessage,
  receive: receiveMessage,
  cleanup: cleanupWS,
  disconnect: disconnectWS,
};

type MessageDataType = {
  message: string;
};
type SubscribersType = (data: MessageDataType[]) => void;

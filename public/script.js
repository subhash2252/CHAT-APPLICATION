const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = input.value.trim();
  if (!msg) return;
  socket.emit('chat message', msg);
  input.value = '';
});

socket.on('chat message', ({ sender, text }) => {
  const div = document.createElement('div');
  div.classList.add('message');
  div.classList.add(sender);
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
});

const socket =io();

socket.on('connect',()=>{
    console.log('connected',socket.id);
})

const payload={
    mensaje:'hello world',
    uid:123,
    fecha:'Nov 22,2022'
}
socket.emit('menseja-de-cliente',
    payload,
    (data)=>{
    console.log('Respuesta a tu mensaje',data)
});

socket.on('mensaje-de-server',(payload)=>{
    console.log(payload);
})

socket.on('disconnect',()=>{
    console.log('Disconnected');
})
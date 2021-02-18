import {useEffect} from 'react';
import {io} from 'socket.io-client';
import {
    fetchChats,
    offlineFriend,
    onlineFriend,
    onlineFriends,
    receivedMessage, senderTyping,
    setSocket
} from "../../../store/actions/chat";

function useSocket (user, dispatch) {
    useEffect(() => {
        dispatch(fetchChats())
            .then(res => {

                const socket = io.connect('http://127.0.0.1:3000');

                dispatch(setSocket(socket));

                socket.emit('join', user);

                socket.on('typing', (user) => {
                    dispatch(senderTyping(user));
                });

                socket.on('friends', (friends) => {
                    dispatch(onlineFriends(friends));
                });

                socket.on('online', (user) => {
                    dispatch(onlineFriend(user));
                });

                socket.on('offline', (user) => {
                    dispatch(offlineFriend(user));
                });

                socket.on('received', (message) => {
                    dispatch(receivedMessage(message, user.id));
                });
            })
            .catch(err => console.error(err));
    }, [dispatch]);
}

export default useSocket;
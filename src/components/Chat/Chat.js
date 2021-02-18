import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import useSocket from "./hooks/socketConnect";

import Navbar from "./components/Navbar/Navbar";
import FriendList from "./components/FriendList/FriendList";
import Messager from "./components/Messager/Messenger";

import {fetchChats} from "../../store/actions/chat";

import './Chat.scss';

const Chat = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.authReducer.user);

    useSocket(user, dispatch);

    return (
        <div id='chat-container'>
            <Navbar/>
            <div id='chat-wrap'>
                <FriendList/>
                <Messager/>
            </div>
        </div>

    );
};

export default Chat;
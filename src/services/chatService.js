import API from "./api";

const ChatService = {
    fetchChats: () => {
        return API.get('/chats')
            .then(({data}) => {
                return data;
            }).catch(err => {
               return err;
            });
    }
};

export default ChatService;
import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { getDatabase, ref, push, serverTimestamp } from 'firebase/database';
import firebaseApp from '../firebaseCongif';
// import axios from 'axios';
// import {useEffect} from 'react'


const Message = ({ messageBox, toggleMessageBox }) => {
    const [messageText, setMessageText] = useState('');
    const [isSending, setIsSending] = useState(false);
    // const [allMessages, setAllMessages] = useState('')

    const submitMessage = () => {
        const db = getDatabase(firebaseApp);
        const messagesRef = ref(db, 'messages');

        setIsSending(true);

        push(messagesRef, { text: messageText, timestamp: serverTimestamp() })
            .then(() => {
                console.log("Message sent successfully!");
            })
            .catch((error) => {
                console.error("Error sending message:", error);
            })
            .finally(() => {
                setIsSending(false);
                setMessageText('');
            });
    };


    // useEffect(() => {
    //     const fetchMessages = async () => {
    //         try {
    //             const response = await axios.get(
    //                 'https://portfolio-7abcf-default-rtdb.firebaseio.com/messages.json'
    //             );
    //             const messages = response.data ? Object.values(response.data) : [];
    //             setAllMessages(messages);
    //         } catch (error) {
    //             console.error('Error fetching messages:', error);
    //         }
    //     };

    //     fetchMessages();

    // }, []);


    return (
        <>
            {messageBox ? (
                <div className='bg-white border-[1px] border-gray-200 rounded-xl shadow-xl w-1/2 h-fit p-3'>
                    <div className='w-full flex justify-end '>
                        <div className='bg-black p-1 rounded-lg hover:cursor-pointer'>
                            <IoMdClose className='text-white ' onClick={toggleMessageBox} />
                        </div>
                    </div>

                    <div>
                        <div className='flex justify-center font-inika font-semibold text-2xl'>
                            Send me an Anonymous Msg
                        </div>
                        <div className='flex justify-center text-sm text-gray-500'>
                            I won't be able to see who sent the message, and I swear 😉
                        </div>

                        <div className='mt-5 flex flex-col gap-2'>
                            <textarea
                                onChange={(e) => setMessageText(e.target.value)}
                                rows="4"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                placeholder="Write your message here..."
                            ></textarea>

                            <button
                                onClick={submitMessage}
                                disabled={isSending}
                                className={`flex gap-2 items-center justify-center bg-gray-900 text-white px-4 py-2 rounded-lg hover:cursor-pointer ${isSending ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isSending ? 'Sending...' : 'Send'}
                            </button>
                        </div>
                    </div>


                </div>
            ) : null}
        </>
    );
};

export default Message;

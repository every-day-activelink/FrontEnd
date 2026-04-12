import { motion } from "motion/react";
import { useState } from "react";
import { Send, Search, MoreVertical, Phone, Video, Image, Smile } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface ChatUser {
  id: number;
  name: string;
  image: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
}

interface Message {
  id: number;
  sender: "me" | "other";
  text: string;
  time: string;
  image?: string;
}

const mockChats: ChatUser[] = [
  {
    id: 1,
    name: "김서연",
    image: "https://images.unsplash.com/photo-1758274535784-87125dc915cc?w=400&q=80",
    lastMessage: "내일 오전 6시 서울숲에서 만나요!",
    time: "5분 전",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "박준호",
    image: "https://images.unsplash.com/photo-1774791581465-a55d8fe6b2db?w=400&q=80",
    lastMessage: "오늘 10km 완주했어요 👍",
    time: "30분 전",
    unread: 0,
    online: true,
  },
  {
    id: 3,
    name: "이민지",
    image: "https://images.unsplash.com/photo-1770269845802-99a69d9a29a9?w=400&q=80",
    lastMessage: "다음주 일정 확인 부탁드려요",
    time: "2시간 전",
    unread: 1,
    online: false,
  },
  {
    id: 4,
    name: "최동욱",
    image: "https://images.unsplash.com/photo-1762169786069-be5b81cd42b9?w=400&q=80",
    lastMessage: "같이 운동하게 되어서 기대돼요",
    time: "어제",
    unread: 0,
    online: false,
  },
  {
    id: 5,
    name: "정수아",
    image: "https://images.unsplash.com/photo-1758274525134-4b1e9cc67dbb?w=400&q=80",
    lastMessage: "요가 매트 챙겨오세요!",
    time: "어제",
    unread: 0,
    online: true,
  },
];

const mockMessages: Message[] = [
  {
    id: 1,
    sender: "other",
    text: "안녕하세요! 러닝 크루 같이 하고 싶어서 연락드렸어요",
    time: "오전 10:30",
  },
  {
    id: 2,
    sender: "me",
    text: "네 안녕하세요! 반갑습니다 😊",
    time: "오전 10:32",
  },
  {
    id: 3,
    sender: "me",
    text: "보통 어느 정도 페이스로 달리시나요?",
    time: "오전 10:32",
  },
  {
    id: 4,
    sender: "other",
    text: "저는 5km 30분 정도 페이스로 달려요",
    time: "오전 10:35",
  },
  {
    id: 5,
    sender: "other",
    text: "아직 초보라서 천천히 달리는 편이에요",
    time: "오전 10:35",
  },
  {
    id: 6,
    sender: "me",
    text: "저도 비슷한 페이스예요! 같이 달리면 좋을 것 같네요",
    time: "오전 10:37",
  },
  {
    id: 7,
    sender: "other",
    text: "내일 오전 6시 서울숲에서 만나요!",
    time: "오전 10:40",
  },
];

export default function Chat() {
  const [selectedChat, setSelectedChat] = useState<ChatUser>(mockChats[0]);
  const [messageText, setMessageText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChats = mockChats.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-screen pt-20 bg-gray-50">
      <div className="h-[calc(100vh-5rem)] max-w-7xl mx-auto px-6 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="h-full bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="flex h-full">
            {/* Chat List */}
            <div className="w-1/3 border-r border-gray-200 flex flex-col">
              {/* Search Header */}
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">메시지</h2>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="대화 검색..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              {/* Chat List */}
              <div className="flex-1 overflow-y-auto">
                {filteredChats.map((chat, index) => (
                  <motion.div
                    key={chat.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => setSelectedChat(chat)}
                    className={`flex items-center gap-4 p-4 cursor-pointer transition-colors ${
                      selectedChat.id === chat.id
                        ? "bg-emerald-50"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="relative">
                      <ImageWithFallback
                        src={chat.image}
                        alt={chat.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      {chat.online && (
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900 truncate">
                          {chat.name}
                        </h3>
                        <span className="text-xs text-gray-500">{chat.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {chat.lastMessage}
                      </p>
                    </div>

                    {chat.unread > 0 && (
                      <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
                        {chat.unread}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Chat Window */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <ImageWithFallback
                      src={selectedChat.image}
                      alt={selectedChat.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {selectedChat.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {selectedChat.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {selectedChat.online ? "온라인" : "오프라인"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Phone className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Video className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <MoreVertical className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {mockMessages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`flex ${
                      message.sender === "me" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-md ${
                        message.sender === "me" ? "order-2" : "order-1"
                      }`}
                    >
                      <div
                        className={`px-4 py-3 rounded-2xl ${
                          message.sender === "me"
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <p>{message.text}</p>
                      </div>
                      <p
                        className={`text-xs text-gray-500 mt-1 ${
                          message.sender === "me" ? "text-right" : "text-left"
                        }`}
                      >
                        {message.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex items-end gap-3">
                  <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                    <Image className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                    <Smile className="w-5 h-5 text-gray-600" />
                  </button>
                  <div className="flex-1">
                    <textarea
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      placeholder="메시지를 입력하세요..."
                      rows={1}
                      className="w-full px-4 py-3 bg-gray-100 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          if (messageText.trim()) {
                            setMessageText("");
                          }
                        }
                      }}
                    />
                  </div>
                  <button
                    className="p-3 bg-emerald-600 hover:bg-emerald-700 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!messageText.trim()}
                  >
                    <Send className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

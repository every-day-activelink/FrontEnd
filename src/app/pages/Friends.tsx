import { motion } from "motion/react";
import { useState } from "react";
import { UserPlus, UserMinus, Check, X, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface Friend {
  id: number;
  name: string;
  image: string;
  location: string;
  sport: string;
  mutualFriends: number;
  isFollowing?: boolean;
}

interface FriendRequest {
  id: number;
  name: string;
  image: string;
  location: string;
  sport: string;
  mutualFriends: number;
  time: string;
}

const mockFriends: Friend[] = [
  {
    id: 1,
    name: "김서연",
    image: "https://images.unsplash.com/photo-1758274535784-87125dc915cc?w=400&q=80",
    location: "성수동",
    sport: "요가",
    mutualFriends: 12,
    isFollowing: true,
  },
  {
    id: 2,
    name: "박준호",
    image: "https://images.unsplash.com/photo-1774791581465-a55d8fe6b2db?w=400&q=80",
    location: "연남동",
    sport: "러닝",
    mutualFriends: 8,
    isFollowing: true,
  },
  {
    id: 3,
    name: "이민지",
    image: "https://images.unsplash.com/photo-1770269845802-99a69d9a29a9?w=400&q=80",
    location: "이태원",
    sport: "러닝",
    mutualFriends: 15,
    isFollowing: true,
  },
  {
    id: 4,
    name: "최동욱",
    image: "https://images.unsplash.com/photo-1762169786069-be5b81cd42b9?w=400&q=80",
    location: "강남",
    sport: "헬스",
    mutualFriends: 5,
    isFollowing: true,
  },
  {
    id: 5,
    name: "정수아",
    image: "https://images.unsplash.com/photo-1758274525134-4b1e9cc67dbb?w=400&q=80",
    location: "홍대",
    sport: "요가",
    mutualFriends: 20,
    isFollowing: true,
  },
  {
    id: 6,
    name: "강태민",
    image: "https://images.unsplash.com/photo-1774793152833-82de76d0a594?w=400&q=80",
    location: "성수동",
    sport: "러닝",
    mutualFriends: 9,
    isFollowing: true,
  },
];

const mockRequests: FriendRequest[] = [
  {
    id: 1,
    name: "윤지혜",
    image: "https://images.unsplash.com/photo-1758274535784-87125dc915cc?w=400&q=80",
    location: "성수동",
    sport: "필라테스",
    mutualFriends: 3,
    time: "2시간 전",
  },
  {
    id: 2,
    name: "송민재",
    image: "https://images.unsplash.com/photo-1774791581465-a55d8fe6b2db?w=400&q=80",
    location: "여의도",
    sport: "러닝",
    mutualFriends: 7,
    time: "5시간 전",
  },
  {
    id: 3,
    name: "한서윤",
    image: "https://images.unsplash.com/photo-1770269845802-99a69d9a29a9?w=400&q=80",
    location: "홍대",
    sport: "클라이밍",
    mutualFriends: 2,
    time: "어제",
  },
];

const mockSuggestions: Friend[] = [
  {
    id: 7,
    name: "조유진",
    image: "https://images.unsplash.com/photo-1758274525134-4b1e9cc67dbb?w=400&q=80",
    location: "성수동",
    sport: "요가",
    mutualFriends: 18,
    isFollowing: false,
  },
  {
    id: 8,
    name: "임현우",
    image: "https://images.unsplash.com/photo-1762169786069-be5b81cd42b9?w=400&q=80",
    location: "연남동",
    sport: "러닝",
    mutualFriends: 11,
    isFollowing: false,
  },
  {
    id: 9,
    name: "백지우",
    image: "https://images.unsplash.com/photo-1770269845802-99a69d9a29a9?w=400&q=80",
    location: "강남",
    sport: "헬스",
    mutualFriends: 6,
    isFollowing: false,
  },
];

export default function Friends() {
  const [activeTab, setActiveTab] = useState<"friends" | "requests" | "suggestions">("friends");
  const [friends, setFriends] = useState(mockFriends);
  const [requests, setRequests] = useState(mockRequests);
  const [suggestions, setSuggestions] = useState(mockSuggestions);

  const handleAcceptRequest = (requestId: number) => {
    const request = requests.find((r) => r.id === requestId);
    if (request) {
      setRequests(requests.filter((r) => r.id !== requestId));
      setFriends([
        ...friends,
        { ...request, id: friends.length + 1, isFollowing: true },
      ]);
    }
  };

  const handleRejectRequest = (requestId: number) => {
    setRequests(requests.filter((r) => r.id !== requestId));
  };

  const handleFollow = (userId: number) => {
    setSuggestions(
      suggestions.map((user) =>
        user.id === userId ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
  };

  const handleUnfollow = (userId: number) => {
    setFriends(friends.filter((friend) => friend.id !== userId));
  };

  return (
    <div className="min-h-screen pt-20 pb-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">친구</h1>
          <p className="text-lg text-gray-600">
            함께 운동하는 메이트들과 연결되어 있어요
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-4 mb-8"
        >
          <button
            onClick={() => setActiveTab("friends")}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === "friends"
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            친구 ({friends.length})
          </button>
          <button
            onClick={() => setActiveTab("requests")}
            className={`px-6 py-3 rounded-full font-medium transition-all relative ${
              activeTab === "requests"
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            요청 ({requests.length})
            {requests.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {requests.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab("suggestions")}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === "suggestions"
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            추천
          </button>
        </motion.div>

        {/* Friends List */}
        {activeTab === "friends" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {friends.map((friend, index) => (
              <motion.div
                key={friend.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <ImageWithFallback
                    src={friend.image}
                    alt={friend.name}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {friend.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {friend.location} • {friend.sport}
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    공동 친구 {friend.mutualFriends}명
                  </p>

                  <div className="flex gap-2 w-full">
                    <button className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      메시지
                    </button>
                    <button
                      onClick={() => handleUnfollow(friend.id)}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <UserMinus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Friend Requests */}
        {activeTab === "requests" && (
          <div className="space-y-4">
            {requests.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-md p-12 text-center">
                <p className="text-gray-600 text-lg">새로운 친구 요청이 없습니다</p>
              </div>
            ) : (
              requests.map((request, index) => (
                <motion.div
                  key={request.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <ImageWithFallback
                      src={request.image}
                      alt={request.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {request.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {request.location} • {request.sport}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        공동 친구 {request.mutualFriends}명 • {request.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAcceptRequest(request.id)}
                      className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      수락
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleRejectRequest(request.id)}
                      className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2"
                    >
                      <X className="w-4 h-4" />
                      거절
                    </motion.button>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}

        {/* Suggestions */}
        {activeTab === "suggestions" && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                알 수도 있는 사람
              </h2>
              <p className="text-gray-600">
                같은 동네에서 활동하거나 비슷한 운동을 하는 메이트예요
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestions.map((suggestion, index) => (
                <motion.div
                  key={suggestion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col items-center text-center">
                    <ImageWithFallback
                      src={suggestion.image}
                      alt={suggestion.name}
                      className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {suggestion.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {suggestion.location} • {suggestion.sport}
                    </p>
                    <p className="text-xs text-gray-500 mb-4">
                      공동 친구 {suggestion.mutualFriends}명
                    </p>

                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleFollow(suggestion.id)}
                      className={`w-full px-4 py-2 rounded-full transition-colors flex items-center justify-center gap-2 ${
                        suggestion.isFollowing
                          ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          : "bg-emerald-600 text-white hover:bg-emerald-700"
                      }`}
                    >
                      {suggestion.isFollowing ? (
                        <>
                          <Check className="w-4 h-4" />
                          요청됨
                        </>
                      ) : (
                        <>
                          <UserPlus className="w-4 h-4" />
                          친구 추가
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

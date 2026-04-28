import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Calendar, Trophy, Heart, MessageCircle, Settings, Users, Activity } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface ActivityLog {
  id: number;
  type: string;
  description: string;
  time: string;
  image?: string;
}

const mockActivities: ActivityLog[] = [
  {
    id: 1,
    type: "운동",
    description: "성수 모닝 러닝 크루와 10km 완주",
    time: "오늘",
    image: "https://images.unsplash.com/photo-1774791581465-a55d8fe6b2db?w=400&q=80",
  },
  {
    id: 2,
    type: "친구",
    description: "김서연님과 친구가 되었습니다",
    time: "2일 전",
  },
  {
    id: 3,
    type: "그룹",
    description: "한강 선셋 러닝 그룹에 가입했습니다",
    time: "3일 전",
  },
  {
    id: 4,
    type: "운동",
    description: "연남 요가 클래스 참여",
    time: "5일 전",
    image: "https://images.unsplash.com/photo-1758274525134-4b1e9cc67dbb?w=400&q=80",
  },
  {
    id: 5,
    type: "성과",
    description: "이번 주 운동 목표 5회 달성! 🎉",
    time: "1주일 전",
  },
];

const friends = [
  {
    id: 1,
    name: "김서연",
    image: "https://images.unsplash.com/photo-1758274535784-87125dc915cc?w=400&q=80",
  },
  {
    id: 2,
    name: "박준호",
    image: "https://images.unsplash.com/photo-1774791581465-a55d8fe6b2db?w=400&q=80",
  },
  {
    id: 3,
    name: "이민지",
    image: "https://images.unsplash.com/photo-1770269845802-99a69d9a29a9?w=400&q=80",
  },
  {
    id: 4,
    name: "최동욱",
    image: "https://images.unsplash.com/photo-1762169786069-be5b81cd42b9?w=400&q=80",
  },
  {
    id: 5,
    name: "정수아",
    image: "https://images.unsplash.com/photo-1758274525134-4b1e9cc67dbb?w=400&q=80",
  },
  {
    id: 6,
    name: "강태민",
    image: "https://images.unsplash.com/photo-1774793152833-82de76d0a594?w=400&q=80",
  },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState<"activity" | "stats">("activity");

  return (
    <div className="min-h-screen pt-20 pb-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-md p-8 mb-8"
        >
          <div className="flex items-start gap-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1774791581465-a55d8fe6b2db?w=400&q=80"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />

            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    박준호
                  </h1>
                  <div className="flex items-center gap-4 text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      연남동
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      2024년 1월 가입
                    </span>
                  </div>
                </div>

                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Settings className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <p className="text-gray-700 mb-6">
                주 5회 러닝 크루! 마라톤 준비 중입니다. 함께 달려요 🏃‍♂️
              </p>

              <div className="flex gap-8 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">156</div>
                  <div className="text-sm text-gray-600">운동 횟수</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24</div>
                  <div className="text-sm text-gray-600">친구</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">8</div>
                  <div className="text-sm text-gray-600">그룹</div>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors">
                  프로필 수정
                </button>
                <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
                  공유
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">248km</div>
            <div className="text-sm text-gray-600">총 러닝 거리</div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
            <div className="text-sm text-gray-600">획득 뱃지</div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-pink-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">342</div>
            <div className="text-sm text-gray-600">받은 좋아요</div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">89</div>
            <div className="text-sm text-gray-600">게시글</div>
          </div>
        </motion.div>

        {/* Friends Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-md p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">친구</h2>
            <button className="text-emerald-600 hover:text-emerald-700 font-medium">
              모두 보기
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {friends.map((friend, index) => (
              <motion.div
                key={friend.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-center"
              >
                <ImageWithFallback
                  src={friend.image}
                  alt={friend.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-2"
                />
                <p className="text-sm font-medium text-gray-900 truncate">
                  {friend.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-4 mb-6"
        >
          <button
            onClick={() => setActiveTab("activity")}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === "activity"
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            활동
          </button>
          <button
            onClick={() => setActiveTab("stats")}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === "stats"
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            통계
          </button>
        </motion.div>

        {/* Activity Timeline */}
        {activeTab === "activity" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-md p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">최근 활동</h2>

            <div className="space-y-6">
              {mockActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex gap-4 pb-6 border-b border-gray-100 last:border-0"
                >
                  {activity.image ? (
                    <ImageWithFallback
                      src={activity.image}
                      alt={activity.type}
                      className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Activity className="w-8 h-8 text-emerald-600" />
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                        {activity.type}
                      </span>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </div>
                    <p className="text-gray-900 font-medium">
                      {activity.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Stats Details */}
        {activeTab === "stats" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                이번 달 운동 기록
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">러닝</span>
                  <div className="flex items-center gap-4">
                    <div className="w-64 h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-600 rounded-full" style={{ width: "75%" }} />
                    </div>
                    <span className="text-gray-900 font-medium w-16 text-right">15회</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700">요가</span>
                  <div className="flex items-center gap-4">
                    <div className="w-64 h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600 rounded-full" style={{ width: "40%" }} />
                    </div>
                    <span className="text-gray-900 font-medium w-16 text-right">8회</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700">헬스</span>
                  <div className="flex items-center gap-4">
                    <div className="w-64 h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: "60%" }} />
                    </div>
                    <span className="text-gray-900 font-medium w-16 text-right">12회</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">획득 뱃지</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                {["🏆", "🎯", "⭐", "💪", "🔥", "👑"].map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-2 shadow-lg">
                      {badge}
                    </div>
                    <p className="text-xs text-gray-600">뱃지 {index + 1}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

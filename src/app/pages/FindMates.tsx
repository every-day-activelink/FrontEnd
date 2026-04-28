import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Clock, User, Star, Heart, UserPlus, Check } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface Mate {
  id: number;
  name: string;
  image: string;
  location: string;
  sport: string;
  level: string;
  time: string;
  rating: number;
  bio: string;
  liked: boolean;
  following: boolean;
}

const initialMates: Mate[] = [
  {
    id: 1,
    name: "김서연",
    image: "https://images.unsplash.com/photo-1758274535784-87125dc915cc?w=400&q=80",
    location: "성수동",
    sport: "요가",
    level: "중급",
    time: "오전",
    rating: 4.9,
    bio: "요가 3년차, 함께 힐링하실 분!",
    liked: false,
    following: false,
  },
  {
    id: 2,
    name: "박준호",
    image: "https://images.unsplash.com/photo-1774791581465-a55d8fe6b2db?w=400&q=80",
    location: "연남동",
    sport: "러닝",
    level: "상급",
    time: "저녁",
    rating: 5.0,
    bio: "주 5회 러닝, 마라톤 준비 중",
    liked: true,
    following: true,
  },
  {
    id: 3,
    name: "이민지",
    image: "https://images.unsplash.com/photo-1770269845802-99a69d9a29a9?w=400&q=80",
    location: "이태원",
    sport: "러닝",
    level: "초급",
    time: "오후",
    rating: 4.8,
    bio: "러닝 시작한지 한 달, 같이 달려요",
    liked: false,
    following: false,
  },
  {
    id: 4,
    name: "최동욱",
    image: "https://images.unsplash.com/photo-1762169786069-be5b81cd42b9?w=400&q=80",
    location: "강남",
    sport: "헬스",
    level: "중급",
    time: "오전",
    rating: 4.7,
    bio: "아침 운동으로 하루를 시작해요",
    liked: false,
    following: false,
  },
  {
    id: 5,
    name: "정수아",
    image: "https://images.unsplash.com/photo-1758274525134-4b1e9cc67dbb?w=400&q=80",
    location: "홍대",
    sport: "요가",
    level: "상급",
    time: "저녁",
    rating: 5.0,
    bio: "요가 강사, 함께 성장해요",
    liked: true,
    following: false,
  },
  {
    id: 6,
    name: "강태민",
    image: "https://images.unsplash.com/photo-1774793152833-82de76d0a594?w=400&q=80",
    location: "성수동",
    sport: "러닝",
    level: "중급",
    time: "오전",
    rating: 4.6,
    bio: "새벽 러닝 크루 모집 중",
    liked: false,
    following: false,
  },
];

export default function FindMates() {
  const [mates, setMates] = useState<Mate[]>(initialMates);
  const [selectedLocation, setSelectedLocation] = useState<string>("전체");
  const [selectedSport, setSelectedSport] = useState<string>("전체");
  const [selectedTime, setSelectedTime] = useState<string>("전체");

  const locations = ["전체", "성수동", "연남동", "이태원", "강남", "홍대"];
  const sports = ["전체", "러닝", "요가", "헬스", "클라이밍", "필라테스"];
  const times = ["전체", "오전", "오후", "저녁"];

  const toggleLike = (mateId: number) => {
    setMates(
      mates.map((mate) =>
        mate.id === mateId ? { ...mate, liked: !mate.liked } : mate
      )
    );
  };

  const toggleFollow = (mateId: number) => {
    setMates(
      mates.map((mate) =>
        mate.id === mateId ? { ...mate, following: !mate.following } : mate
      )
    );
  };

  const filteredMates = mates.filter((mate) => {
    return (
      (selectedLocation === "전체" || mate.location === selectedLocation) &&
      (selectedSport === "전체" || mate.sport === selectedSport) &&
      (selectedTime === "전체" || mate.time === selectedTime)
    );
  });

  return (
    <div className="min-h-screen pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            운동 메이트 찾기
          </h1>
          <p className="text-xl text-gray-600">
            내 동네에서 함께 운동할 메이트를 만나보세요
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              동네
            </label>
            <div className="flex flex-wrap gap-3">
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => setSelectedLocation(location)}
                  className={`px-5 py-2.5 rounded-full transition-all ${
                    selectedLocation === location
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              운동 종류
            </label>
            <div className="flex flex-wrap gap-3">
              {sports.map((sport) => (
                <button
                  key={sport}
                  onClick={() => setSelectedSport(sport)}
                  className={`px-5 py-2.5 rounded-full transition-all ${
                    selectedSport === sport
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {sport}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              운동 시간
            </label>
            <div className="flex flex-wrap gap-3">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-5 py-2.5 rounded-full transition-all ${
                    selectedTime === time
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results count */}
        <div className="mb-8">
          <p className="text-gray-600">
            <span className="font-semibold text-emerald-600">
              {filteredMates.length}명
            </span>
            의 메이트를 찾았어요
          </p>
        </div>

        {/* Mate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMates.map((mate, index) => (
            <motion.div
              key={mate.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 },
              }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-600/20 transition-shadow duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={mate.image}
                    alt={mate.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-gray-900">
                      {mate.rating}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleLike(mate.id)}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Heart
                        className={`w-5 h-5 transition-colors ${
                          mate.liked
                            ? "fill-red-500 text-red-500"
                            : "text-gray-600"
                        }`}
                      />
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleFollow(mate.id)}
                      className={`px-4 h-10 backdrop-blur-sm rounded-full flex items-center justify-center gap-1.5 transition-colors ${
                        mate.following
                          ? "bg-emerald-600 text-white"
                          : "bg-white/90 text-gray-600 hover:bg-white"
                      }`}
                    >
                      {mate.following ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span className="text-sm font-medium">팔로잉</span>
                        </>
                      ) : (
                        <>
                          <UserPlus className="w-4 h-4" />
                          <span className="text-sm font-medium">팔로우</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {mate.name}
                    </h3>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                      {mate.level}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{mate.bio}</p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm">{mate.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <User className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm">{mate.sport}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm">{mate.time} 운동 선호</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors font-medium">
                    메시지 보내기
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredMates.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">
              조건에 맞는 메이트를 찾지 못했어요.
              <br />
              필터를 조정해보세요!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

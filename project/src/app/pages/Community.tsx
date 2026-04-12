import { motion } from "motion/react";
import { useState } from "react";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface Post {
  id: number;
  author: {
    name: string;
    image: string;
    location: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  time: string;
  liked: boolean;
  bookmarked: boolean;
}

const mockPosts: Post[] = [
  {
    id: 1,
    author: {
      name: "김서연",
      image: "https://images.unsplash.com/photo-1758274535784-87125dc915cc?w=400&q=80",
      location: "성수동",
    },
    content: "오늘 아침 서울숲에서 요가 🧘‍♀️ 날씨 너무 좋았어요! 함께한 메이트분들 감사합니다 💚",
    image: "https://images.unsplash.com/photo-1758274525134-4b1e9cc67dbb?w=800&q=80",
    likes: 42,
    comments: 8,
    time: "2시간 전",
    liked: false,
    bookmarked: false,
  },
  {
    id: 2,
    author: {
      name: "박준호",
      image: "https://images.unsplash.com/photo-1774791581465-a55d8fe6b2db?w=400&q=80",
      location: "연남동",
    },
    content: "드디어 10km 완주! 🏃‍♂️ 작년 이맘때는 5km도 힘들었는데... 함께 달려준 러닝 크루 덕분입니다 👏",
    image: "https://images.unsplash.com/photo-1774791581465-a55d8fe6b2db?w=800&q=80",
    likes: 89,
    comments: 15,
    time: "5시간 전",
    liked: true,
    bookmarked: true,
  },
  {
    id: 3,
    author: {
      name: "이민지",
      image: "https://images.unsplash.com/photo-1770269845802-99a69d9a29a9?w=400&q=80",
      location: "이태원",
    },
    content: "러닝 초보인데 여기 메이트분들 너무 친절하세요 😭 운동이 이렇게 재밌는 줄 몰랐어요!",
    likes: 56,
    comments: 12,
    time: "어제",
    liked: false,
    bookmarked: false,
  },
  {
    id: 4,
    author: {
      name: "정수아",
      image: "https://images.unsplash.com/photo-1758274525134-4b1e9cc67dbb?w=400&q=80",
      location: "홍대",
    },
    content: "한강 선셋 러닝 🌅 이 순간을 위해 하루를 견딥니다",
    image: "https://images.unsplash.com/photo-1772764768073-c95db4f77864?w=800&q=80",
    likes: 124,
    comments: 23,
    time: "어제",
    liked: true,
    bookmarked: false,
  },
];

export default function Community() {
  const [posts, setPosts] = useState(mockPosts);
  const [newPost, setNewPost] = useState("");

  const toggleLike = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const toggleBookmark = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, bookmarked: !post.bookmarked }
          : post
      )
    );
  };

  return (
    <div className="min-h-screen pt-20 pb-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">커뮤니티</h1>
          <p className="text-lg text-gray-600">
            운동 메이트들과 소통하고 경험을 공유하세요
          </p>
        </motion.div>

        {/* Create Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-md p-6 mb-6"
        >
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="오늘의 운동 경험을 공유해보세요..."
            className="w-full px-4 py-3 bg-gray-50 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-emerald-600"
            rows={3}
          />
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                📷 사진
              </button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                📍 위치
              </button>
            </div>
            <button
              className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!newPost.trim()}
            >
              게시
            </button>
          </div>
        </motion.div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              {/* Post Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <ImageWithFallback
                      src={post.author.image}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {post.author.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {post.author.location} • {post.time}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <MoreHorizontal className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Post Content */}
                <p className="text-gray-900 leading-relaxed">{post.content}</p>
              </div>

              {/* Post Image */}
              {post.image && (
                <div className="w-full aspect-[4/3]">
                  <ImageWithFallback
                    src={post.image}
                    alt="Post image"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Post Actions */}
              <div className="p-6 pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-6">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleLike(post.id)}
                      className="flex items-center gap-2 group"
                    >
                      <Heart
                        className={`w-6 h-6 transition-colors ${
                          post.liked
                            ? "fill-red-500 text-red-500"
                            : "text-gray-600 group-hover:text-red-500"
                        }`}
                      />
                      <span
                        className={`font-medium ${
                          post.liked ? "text-red-500" : "text-gray-600"
                        }`}
                      >
                        {post.likes}
                      </span>
                    </motion.button>

                    <button className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors">
                      <MessageCircle className="w-6 h-6" />
                      <span className="font-medium">{post.comments}</span>
                    </button>

                    <button className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors">
                      <Share2 className="w-6 h-6" />
                    </button>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleBookmark(post.id)}
                  >
                    <Bookmark
                      className={`w-6 h-6 transition-colors ${
                        post.bookmarked
                          ? "fill-emerald-600 text-emerald-600"
                          : "text-gray-600 hover:text-emerald-600"
                      }`}
                    />
                  </motion.button>
                </div>

                {/* Comment Input */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1774791581465-a55d8fe6b2db?w=400&q=80"
                    alt="Your profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <input
                    type="text"
                    placeholder="댓글 달기..."
                    className="flex-1 px-4 py-2 bg-gray-50 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8"
        >
          <button className="px-8 py-3 text-gray-600 hover:text-emerald-600 font-medium transition-colors">
            더 보기
          </button>
        </motion.div>
      </div>
    </div>
  );
}

import { Link, useLocation } from "react-router";
import { MapPin, Users, UserPlus, MessageCircle, User, Heart, Bell } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [unreadMessages] = useState(3);
  const [unreadNotifications] = useState(5);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <MapPin className="w-7 h-7 text-emerald-600" />
            <span className="text-xl font-bold text-gray-900">동네메이트</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className={`flex items-center gap-2 transition-colors ${
                isActive("/") && location.pathname === "/"
                  ? "text-emerald-600 font-medium"
                  : "text-gray-600 hover:text-emerald-600"
              }`}
            >
              홈
            </Link>
            <Link
              to="/find-mates"
              className={`flex items-center gap-2 transition-colors ${
                isActive("/find-mates")
                  ? "text-emerald-600 font-medium"
                  : "text-gray-600 hover:text-emerald-600"
              }`}
            >
              <UserPlus className="w-4 h-4" />
              메이트 찾기
            </Link>
            <Link
              to="/groups"
              className={`flex items-center gap-2 transition-colors ${
                isActive("/groups")
                  ? "text-emerald-600 font-medium"
                  : "text-gray-600 hover:text-emerald-600"
              }`}
            >
              <Users className="w-4 h-4" />
              그룹
            </Link>
            <Link
              to="/community"
              className={`flex items-center gap-2 transition-colors ${
                isActive("/community")
                  ? "text-emerald-600 font-medium"
                  : "text-gray-600 hover:text-emerald-600"
              }`}
            >
              <Heart className="w-4 h-4" />
              커뮤니티
            </Link>
            <Link
              to="/friends"
              className={`flex items-center gap-2 transition-colors ${
                isActive("/friends")
                  ? "text-emerald-600 font-medium"
                  : "text-gray-600 hover:text-emerald-600"
              }`}
            >
              <Users className="w-4 h-4" />
              친구
            </Link>

            <div className="h-6 w-px bg-gray-300" />

            <Link
              to="/chat"
              className={`relative flex items-center gap-2 transition-colors ${
                isActive("/chat")
                  ? "text-emerald-600"
                  : "text-gray-600 hover:text-emerald-600"
              }`}
            >
              <MessageCircle className="w-5 h-5" />
              {unreadMessages > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {unreadMessages}
                </span>
              )}
            </Link>

            <button className="relative text-gray-600 hover:text-emerald-600 transition-colors">
              <Bell className="w-5 h-5" />
              {unreadNotifications > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {unreadNotifications}
                </span>
              )}
            </button>

            <Link
              to="/profile"
              className={`transition-opacity ${
                isActive("/profile") ? "opacity-100" : "opacity-70 hover:opacity-100"
              }`}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

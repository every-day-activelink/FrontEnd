import { motion } from "motion/react";
import { Link } from "react-router";
import { MapPin, Users, Calendar, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  const activities = [
    {
      image: "https://images.unsplash.com/photo-1774791581465-a55d8fe6b2db?w=800&q=80",
      title: "러닝 크루",
      members: 24,
      location: "성수동",
    },
    {
      image: "https://images.unsplash.com/photo-1758274525134-4b1e9cc67dbb?w=800&q=80",
      title: "요가 클래스",
      members: 12,
      location: "연남동",
    },
    {
      image: "https://images.unsplash.com/photo-1748698534410-867798220fa8?w=800&q=80",
      title: "크로스핏",
      members: 18,
      location: "이태원",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1770269845802-99a69d9a29a9?w=1920&q=80"
            alt="People running together outdoors"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-emerald-600/20 backdrop-blur-sm rounded-full border border-emerald-400/30"
            >
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-100 text-sm">위치 기반 매칭</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              내 동네에서
              <br />
              운동 메이트 찾기
            </h1>

            <p className="text-xl text-gray-200 mb-10 max-w-lg">
              혼자가 아닌 함께, 가까운 곳에서 시작하는 건강한 습관
            </p>

            <Link
              to="/find-mates"
              className="inline-block px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors text-lg font-medium"
            >
              지금 메이트 찾기
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">우리 동네에서</h3>
              <p className="text-gray-600">
                가까운 곳에서 만나 부담 없이 시작하세요
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">다양한 운동</h3>
              <p className="text-gray-600">
                러닝, 요가, 헬스부터 클라이밍까지
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">유연한 일정</h3>
              <p className="text-gray-600">
                나에게 맞는 시간에 함께할 메이트
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Active Groups */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              지금 활동 중인 그룹
            </h2>
            <p className="text-xl text-gray-600">
              이미 많은 사람들이 함께 운동하고 있어요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <ImageWithFallback
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {activity.title}
                    </h3>
                    <div className="flex items-center gap-4 text-white/90 text-sm">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {activity.members}명
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {activity.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl font-bold text-white mb-2">1,200+</div>
              <div className="text-emerald-100 text-lg">활동 중인 메이트</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-5xl font-bold text-white mb-2">150+</div>
              <div className="text-emerald-100 text-lg">운동 그룹</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl font-bold text-white mb-2">25개</div>
              <div className="text-emerald-100 text-lg">서울 전역 동네</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            오늘부터 함께 시작하세요
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            더 이상 혼자 운동하지 마세요. 동네 메이트가 함께합니다.
          </p>
          <Link
            to="/find-mates"
            className="inline-block px-10 py-5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors text-lg font-medium"
          >
            메이트 찾으러 가기
          </Link>
        </div>
      </section>
    </div>
  );
}

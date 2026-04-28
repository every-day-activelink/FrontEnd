import { motion } from "motion/react";
import { MapPin, Users, Calendar, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface Group {
  id: number;
  name: string;
  image: string;
  location: string;
  sport: string;
  members: number;
  schedule: string;
  time: string;
  description: string;
  nextSession: string;
}

const mockGroups: Group[] = [
  {
    id: 1,
    name: "성수 모닝 러닝 크루",
    image: "https://images.unsplash.com/photo-1774791581465-a55d8fe6b2db?w=800&q=80",
    location: "성수동 서울숲",
    sport: "러닝",
    members: 24,
    schedule: "화, 목, 토",
    time: "오전 6:30",
    description: "새벽 공기를 마시며 함께 달리는 러닝 크루입니다. 초보자도 환영!",
    nextSession: "2026년 4월 15일",
  },
  {
    id: 2,
    name: "연남 요가 클래스",
    image: "https://images.unsplash.com/photo-1758274525134-4b1e9cc67dbb?w=800&q=80",
    location: "연남동 공원",
    sport: "요가",
    members: 15,
    schedule: "월, 수, 금",
    time: "오후 7:00",
    description: "퇴근 후 몸과 마음을 이완하는 힐링 요가 클래스",
    nextSession: "2026년 4월 14일",
  },
  {
    id: 3,
    name: "이태원 크로스핏",
    image: "https://images.unsplash.com/photo-1748698534410-867798220fa8?w=800&q=80",
    location: "이태원 체육관",
    sport: "크로스핏",
    members: 18,
    schedule: "월, 수, 금",
    time: "오후 8:00",
    description: "고강도 운동으로 체력과 근력을 동시에! 열정 가득한 크루",
    nextSession: "2026년 4월 14일",
  },
  {
    id: 4,
    name: "한강 선셋 러닝",
    image: "https://images.unsplash.com/photo-1772764768073-c95db4f77864?w=800&q=80",
    location: "여의도 한강공원",
    sport: "러닝",
    members: 32,
    schedule: "매일",
    time: "오후 6:00",
    description: "석양을 보며 한강을 달리는 낭만적인 러닝 그룹",
    nextSession: "2026년 4월 13일",
  },
  {
    id: 5,
    name: "강남 필라테스 그룹",
    image: "https://images.unsplash.com/photo-1758274535230-3641d0632878?w=800&q=80",
    location: "강남역 근처",
    sport: "필라테스",
    members: 12,
    schedule: "화, 목",
    time: "오전 7:00",
    description: "바른 자세와 코어 강화를 위한 필라테스 그룹",
    nextSession: "2026년 4월 15일",
  },
  {
    id: 6,
    name: "홍대 클라이밍 크루",
    image: "https://images.unsplash.com/photo-1767809673585-78513a929f99?w=800&q=80",
    location: "홍대 클라이밍장",
    sport: "클라이밍",
    members: 20,
    schedule: "수, 토",
    time: "오후 7:30",
    description: "함께 문제를 풀고 성장하는 클라이밍 커뮤니티",
    nextSession: "2026년 4월 13일",
  },
];

export default function Groups() {
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
            운동 그룹
          </h1>
          <p className="text-xl text-gray-600">
            정기적으로 만나 함께 운동하는 그룹에 참여하세요
          </p>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">{mockGroups.length}</div>
              <div className="text-emerald-100">활동 중인 그룹</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                {mockGroups.reduce((acc, group) => acc + group.members, 0)}
              </div>
              <div className="text-emerald-100">총 참여 인원</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-emerald-100">주간 운동 세션</div>
            </div>
          </div>
        </motion.div>

        {/* Groups Grid */}
        <div className="space-y-8">
          {mockGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-600/10 transition-all duration-300">
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-2/5 relative aspect-video md:aspect-auto overflow-hidden">
                    <ImageWithFallback
                      src={group.image}
                      alt={group.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-2 rounded-full font-medium">
                      {group.sport}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-3/5 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-3xl font-bold text-gray-900">
                        {group.name}
                      </h3>
                      <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                        <Users className="w-4 h-4 text-emerald-600" />
                        <span className="font-medium text-gray-900">
                          {group.members}명
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 text-lg">
                      {group.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">장소</div>
                          <div className="font-medium">{group.location}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">일정</div>
                          <div className="font-medium">{group.schedule}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                          <Clock className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">시간</div>
                          <div className="font-medium">{group.time}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">다음 세션</div>
                          <div className="font-medium">{group.nextSession}</div>
                        </div>
                      </div>
                    </div>

                    <button className="w-full px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors font-medium">
                      그룹 참여하기
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gray-50 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            원하는 그룹이 없나요?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            직접 그룹을 만들어 운동 메이트를 모집해보세요
          </p>
          <button className="px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors font-medium">
            새 그룹 만들기
          </button>
        </motion.div>
      </div>
    </div>
  );
}

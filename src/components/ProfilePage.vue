<template>
  <div class="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-x-hidden">
    <!-- Navbar -->
    <Navbar />
    
    <!-- Main Content -->
    <main class="pt-20 w-full">
      <div class="w-full px-8 sm:px-12 lg:px-16 xl:px-24 py-8">
        <!-- Profile Header -->
        <div class="bg-white rounded-xl shadow-lg mb-8 overflow-hidden w-full">
          <div class="bg-gradient-to-r from-blue-500 to-amber-400 h-32"></div>
          <div class="relative px-6 pb-6">
            <!-- Avatar -->
            <div class="absolute -top-16 left-6">
              <div class="w-32 h-32 bg-white rounded-full p-2">
                <div class="w-full h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  B
                </div>
              </div>
            </div>
            
            <!-- Profile Info -->
            <div class="pt-20">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 class="text-3xl font-bold text-gray-900">Bùi Thị Thái Bình</h1>
                  <p class="text-gray-600">21040111@vnu.edu.vn</p>
                  <p class="text-gray-500">Khoa SPTA</p>
                </div>
                <button class="mt-4 sm:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Chỉnh sửa hồ sơ
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Profile Content -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          <!-- Personal Information Card -->
          <div class="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-6">Thông tin cá nhân</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                <label class="text-sm font-bold text-gray-600 uppercase tracking-wide">Họ và tên</label>
                <p class="text-xl font-bold text-gray-900 mt-2">Bùi Thị Thái Bình</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                <label class="text-sm font-bold text-gray-600 uppercase tracking-wide">Email</label>
                <p class="text-lg font-semibold text-gray-900 mt-2">21040111@vnu.edu.vn</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-500">
                <label class="text-sm font-bold text-gray-600 uppercase tracking-wide">Điện thoại</label>
                <p class="text-lg font-semibold text-gray-900 mt-2">0987 654 321</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500">
                <label class="text-sm font-bold text-gray-600 uppercase tracking-wide">Ngày sinh</label>
                <p class="text-lg font-semibold text-gray-900 mt-2">15/03/2002</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500">
                <label class="text-sm font-bold text-gray-600 uppercase tracking-wide">Lớp</label>
                <p class="text-lg font-semibold text-gray-900 mt-2">21E1</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <label class="text-sm font-bold text-gray-600 uppercase tracking-wide">Khoa</label>
                <p class="text-lg font-semibold text-gray-900 mt-2">Khoa SPTA</p>
              </div>
            </div>
          </div>

          <!-- Project Statistics Card -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-6">Thông tin dự án</h2>
            <div class="space-y-6">
              <!-- Project Count -->
              <div class="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <div class="text-3xl font-bold text-blue-600 mb-2">{{ joinedProjectsCount }}</div>
                <div class="text-sm text-gray-600 font-medium">Dự án đã tham gia</div>
              </div>

              <!-- Certificate Count -->
              <div class="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <div class="text-3xl font-bold text-green-600 mb-2">3</div>
                <div class="text-sm text-gray-600 font-medium">Giấy chứng nhận đã nhận</div>
              </div>

              <!-- Joined Projects List -->
              <div v-if="joinedProjectsCount > 0" class="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200 p-6">
                <h3 class="text-lg font-semibold text-amber-800 mb-4 flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                  Dự án đã tham gia
                </h3>
                <div class="space-y-2">
                  <div 
                    v-for="projectSlug in joinedProjects.slice(0, 3)" 
                    :key="projectSlug"
                    class="flex items-center text-sm text-amber-700 bg-white bg-opacity-60 rounded-lg p-3"
                  >
                    <div class="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    <span>{{ getProjectTitle(projectSlug) }}</span>
                  </div>
                  <div v-if="joinedProjectsCount > 3" class="text-center">
                    <span class="text-sm text-amber-600 font-medium">+{{ joinedProjectsCount - 3 }} dự án khác</span>
                  </div>
                </div>
              </div>
              
              <div v-else class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 p-6 text-center">
                <svg class="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                <p class="text-gray-500 text-sm">Chưa tham gia dự án nào</p>
                <router-link 
                  to="/projects" 
                  class="inline-block mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium underline"
                >
                  Khám phá các dự án
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div class="w-full px-12 sm:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16">
        <div class="max-w-7xl mx-auto">
          <!-- Main Footer Content -->
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <!-- Logo & Description -->
            <div class="lg:col-span-2">
              <div class="flex items-center mb-6">
                <img 
                  :src="ulisLogo" 
                  alt="ULIS Logo" 
                  class="h-20 w-20 object-contain mr-4"
                />
                <div>
                  <h3 class="text-3xl font-bold bg-gradient-to-r from-amber-400 to-green-500 bg-clip-text text-transparent">
                    UTEERS
                  </h3>
                  <p class="text-gray-300 text-sm">Nối kết - Chia sẻ - Tình nguyện</p>
                </div>
              </div>
              <p class="text-gray-300 leading-relaxed mb-6 max-w-md">
                Cộng đồng sinh viên Đại học Ngoại ngữ - ĐHQGHN, 
                nơi kết nối những trái tim nhiệt huyết với tinh thần tình nguyện 
                và tạo nên những giá trị tích cực cho xã hội.
              </p>
              
              <!-- Social Media -->
              <div class="flex space-x-4">
                <a href="#" class="group bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" class="group bg-gradient-to-r from-blue-800 to-blue-900 p-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" class="group bg-gradient-to-r from-pink-600 to-purple-600 p-3 rounded-xl hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017 0z"/>
                  </svg>
                </a>
                <a href="#" class="group bg-gradient-to-r from-red-600 to-red-700 p-3 rounded-xl hover:from-red-500 hover:to-red-600 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Contact Info -->
            <div>
              <h4 class="text-xl font-bold mb-6 text-white">Liên hệ</h4>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="bg-gradient-to-r from-amber-400 to-green-500 p-2 rounded-lg mr-3 mt-1">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-300 text-sm leading-relaxed">
                      Đại học Ngoại ngữ - ĐHQGHN<br>
                      Phạm Văn Đồng, Cầu Giấy, Hà Nội
                    </p>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <div class="bg-gradient-to-r from-amber-400 to-green-500 p-2 rounded-lg mr-3">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <p class="text-gray-300 text-sm">+84 24 3754 2201</p>
                </div>
                
                <div class="flex items-center">
                  <div class="bg-gradient-to-r from-amber-400 to-green-500 p-2 rounded-lg mr-3">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <p class="text-gray-300 text-sm">contact@uteers.vnu.edu.vn</p>
                </div>
              </div>
            </div>

            <!-- Quick Links -->
            <div>
              <h4 class="text-xl font-bold mb-6 text-white">Liên kết</h4>
              <ul class="space-y-3">
                <li><a href="#" class="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center group">
                  <span class="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                  Trang chủ
                </a></li>
                <li><a href="#" class="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center group">
                  <span class="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                  Dự án
                </a></li>
                <li><a href="#" class="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center group">
                  <span class="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                  Chứng chỉ
                </a></li>
                <li><a href="#" class="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center group">
                  <span class="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                  Diễn đàn
                </a></li>
                <li><a href="#" class="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center group">
                  <span class="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                  Hồ sơ
                </a></li>
              </ul>
            </div>
          </div>
          
          <!-- Bottom Footer -->
          <div class="border-t border-gray-700 pt-8">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <p class="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 UTEERS - Đại học Ngoại ngữ, ĐHQGHN. Tất cả quyền được bảo lưu.
              </p>
              <div class="flex space-x-6">
                <a href="#" class="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">Chính sách bảo mật</a>
                <a href="#" class="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">Điều khoản sử dụng</a>
                <a href="#" class="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">Hỗ trợ</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import ulisLogoImage from '@/assets/ulis-logo.png'

export default {
  name: 'ProfilePage',
  components: {
    Navbar
  },
  data() {
    return {
      ulisLogo: ulisLogoImage,
      joinedProjectsCount: 0,
      allProjects: [
        {
          id: 1,
          slug: 'truong-hoc-xanh-tuong-lai-xanh',
          title: 'Chiến dịch "Trường học xanh - Tương lai xanh"'
        },
        {
          id: 2,
          slug: 'moi-truong-xanh-sach',
          title: 'Dự án "Môi trường xanh - sạch"'
        },
        {
          id: 3,
          slug: 'rung-xanh-ulis',
          title: 'Chương trình "Rừng xanh ULIS"'
        },
        {
          id: 4,
          slug: 'day-hoc-mien-phi',
          title: 'Chương trình "Dạy học miễn phí"'
        },
        {
          id: 5,
          slug: 'sinh-vien-ve-nguon',
          title: 'Chương trình "Sinh viên về nguồn"'
        },
        {
          id: 6,
          slug: 'cau-noi-tri-thuc',
          title: 'Dự án "Cầu nối tri thức"'
        },
        {
          id: 7,
          slug: 'le-hoi-van-hoa-dan-toc',
          title: 'Lễ hội "Văn hóa dân tộc"'
        },
        {
          id: 8,
          slug: 'ke-chuyen-dan-gian',
          title: 'Dự án "Kể chuyện dân gian"'
        },
        {
          id: 9,
          slug: 'bao-ton-di-san',
          title: 'Chiến dịch "Bảo tồn di sản"'
        },
        {
          id: 10,
          slug: 'mau-sac-cuoc-song',
          title: 'Chương trình "Màu sắc cuộc sống"'
        },
        {
          id: 11,
          slug: 'am-nhac-cho-moi-nguoi',
          title: 'Dự án "Âm nhạc cho mọi người"'
        },
        {
          id: 12,
          slug: 'festival-nghe-thuat-tre-ulis',
          title: 'Festival "Nghệ thuật trẻ ULIS"'
        },
        {
          id: 13,
          slug: 'chia-se-yeu-thuong',
          title: 'Chương trình "Chia sẻ yêu thương"'
        },
        {
          id: 14,
          slug: 'diem-tua-cho-nguoi-cao-tuoi',
          title: 'Dự án "Điểm tựa cho người cao tuổi"'
        },
        {
          id: 15,
          slug: 'mai-am-tinh-thuong',
          title: 'Chương trình "Mái ấm tình thương"'
        },
        {
          id: 16,
          slug: 'ket-noi-sinh-vien-ulis',
          title: 'Ngày hội "Kết nối sinh viên ULIS"'
        },
        {
          id: 17,
          slug: 'tuong-lai-nghe-nghiep',
          title: 'Hội thảo "Tương lai nghề nghiệp"'
        },
        {
          id: 18,
          slug: 'tuoi-tre-ulis-vi-cong-dong',
          title: 'Đại hội "Tuổi trẻ ULIS vì cộng đồng"'
        }
      ]
    }
  },
  computed: {
    joinedProjects() {
      return JSON.parse(localStorage.getItem('joinedProjects') || '[]')
    }
  },
  mounted() {
    this.updateJoinedProjectsCount()
    // Listen for storage changes to update count in real-time
    window.addEventListener('storage', this.updateJoinedProjectsCount)
    // Listen for custom projectJoined event
    window.addEventListener('projectJoined', this.handleProjectJoined)
  },
  beforeUnmount() {
    window.removeEventListener('storage', this.updateJoinedProjectsCount)
    window.removeEventListener('projectJoined', this.handleProjectJoined)
  },
  methods: {
    updateJoinedProjectsCount() {
      this.joinedProjectsCount = this.joinedProjects.length
    },
    handleProjectJoined(event) {
      // Update count immediately when a project is joined
      this.joinedProjectsCount = event.detail.totalCount
    },
    getProjectTitle(slug) {
      const project = this.allProjects.find(p => p.slug === slug)
      return project ? project.title : 'Dự án không xác định'
    }
  }
}
</script>

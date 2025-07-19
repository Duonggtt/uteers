<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
    <!-- Loading Screen -->
    <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div class="text-center">
        <div class="mb-8">
          <div class="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto flex items-center justify-center animate-bounce">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
          </div>
        </div>
        <div class="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-4">
          UTEERS
        </div>
        <div class="text-gray-600 animate-pulse">
          Đang tải giấy chứng nhận...
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div v-show="!isLoading" class="animate-fade-in">
      <Navbar />
      
      <!-- Header Section -->
      <div class="bg-gradient-to-r from-blue-600 to-green-600 py-20 mt-16">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-up">
            Giấy Chứng Nhận
          </h1>
          <p class="text-xl text-blue-100 max-w-2xl mx-auto animate-slide-in-up" style="animation-delay: 0.2s;">
            Thành tựu và đóng góp của bạn trong các hoạt động tình nguyện
          </p>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="container mx-auto px-4 -mt-8 relative z-10 animate-scale-in">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-blue-500">
            <div class="text-3xl font-bold text-blue-600 mb-2">{{ joinedProjectsCount }}</div>
            <div class="text-gray-600">Dự án tham gia</div>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-green-500">
            <div class="text-3xl font-bold text-green-600 mb-2">{{ totalHours }}</div>
            <div class="text-gray-600">Giờ hoạt động</div>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-amber-500">
            <div class="text-3xl font-bold text-amber-600 mb-2">{{ certificatesCount }}</div>
            <div class="text-gray-600">Chứng nhận đã có</div>
          </div>
        </div>
      </div>

      <!-- Certificate Section -->
      <div class="container mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12 text-gray-800 animate-slide-in-up">
            Giấy Chứng Nhận Của Bạn
          </h2>
          
          <div class="bg-white rounded-xl shadow-xl p-8 animate-scale-in">
            <div class="text-center">
              <img 
                :src="certificateImage" 
                alt="Giấy chứng nhận tình nguyện" 
                class="max-w-full h-auto rounded-lg shadow-lg mx-auto mb-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                @click="viewCertificate"
              >
              
              <h3 class="text-2xl font-bold text-gray-800 mb-4">
                Giấy Chứng Nhận Hoạt Động Tình Nguyện
              </h3>
              
              <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
                Chứng nhận sự tham gia tích cực và đóng góp có ý nghĩa trong các hoạt động tình nguyện 
                của cộng đồng sinh viên Đại học Ngoại ngữ - ĐHQGHN.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  @click="viewCertificate"
                  class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  Xem chi tiết
                </button>
                
                <button 
                  @click="downloadCertificate"
                  class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  Tải xuống
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Certificate Modal -->
      <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" @click="closeModal">
        <div class="max-w-4xl max-h-full overflow-auto bg-white rounded-lg" @click.stop>
          <div class="p-4">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-bold">Giấy Chứng Nhận Hoạt Động Tình Nguyện</h3>
              <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <img :src="certificateImage" alt="Giấy chứng nhận" class="w-full h-auto">
            <div class="flex gap-2 mt-4 justify-end">
              <button @click="downloadCertificate" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold">
                Tải xuống
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div class="w-full px-12 sm:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16">
          <div class="max-w-7xl mx-auto">
            <!-- Main Footer Content -->
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <!-- Logo & Description -->
              <div class="lg:col-span-2">
                <div class="flex items-center mb-6">
                  <img :src="ulisLogo" alt="ULIS Logo" class="w-12 h-12 mr-4">
                  <div>
                    <h3 class="text-2xl font-bold text-white mb-1">
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
                    <svg class="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" class="group bg-gradient-to-r from-blue-400 to-blue-500 p-3 rounded-xl hover:from-blue-300 hover:to-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    <svg class="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" class="group bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-xl hover:from-pink-400 hover:to-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    <svg class="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.748.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017.029z"/>
                    </svg>
                  </a>
                  <a href="#" class="group bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-xl hover:from-red-400 hover:to-red-500 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    <svg class="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
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
                      <p class="text-gray-300 text-sm font-medium">Địa chỉ</p>
                      <p class="text-gray-300 text-sm">Đại học Ngoại ngữ - ĐHQGHN<br/>Phạm Văn Đồng, Cầu Giấy, Hà Nội</p>
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
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import ulisLogoImage from '@/assets/ulis-logo.png'
import certificateImage from '@/assets/ctfc.png'

export default {
  name: 'CertificatesPage',
  components: {
    Navbar
  },
  data() {
    return {
      ulisLogo: ulisLogoImage,
      certificateImage: certificateImage,
      isLoading: true,
      showModal: false,
      joinedProjectsCount: 0,
      totalHours: 120,
      certificatesCount: 1
    }
  },
  computed: {
    joinedProjects() {
      return JSON.parse(localStorage.getItem('joinedProjects') || '[]')
    }
  },
  mounted() {
    // Simulate loading time
    setTimeout(() => {
      this.updateStats()
      this.isLoading = false
    }, 1200)

    // Listen for project updates
    window.addEventListener('projectJoined', this.handleProjectJoined)
  },
  beforeUnmount() {
    window.removeEventListener('projectJoined', this.handleProjectJoined)
  },
  methods: {
    updateStats() {
      this.joinedProjectsCount = this.joinedProjects.length
    },
    handleProjectJoined(event) {
      this.joinedProjectsCount = event.detail.totalCount
    },
    viewCertificate() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    downloadCertificate() {
      // Create a temporary link to download the certificate
      const link = document.createElement('a')
      link.href = this.certificateImage
      link.download = 'Giay-chung-nhan-tinh-nguyen-UTEERS.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}
</script>

<style scoped>
/* Animation keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Animation classes */
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-slide-in-up {
  animation: slideInUp 0.6s ease-out 0.2s both;
}

.animate-scale-in {
  animation: scaleIn 0.6s ease-out 0.4s both;
}

/* Smooth transitions */
* {
  transition: all 0.3s ease;
}

/* Button hover effects */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
}

/* Card hover effects */
.bg-white {
  transition: all 0.3s ease;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

/* Modal animations */
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}
</style>
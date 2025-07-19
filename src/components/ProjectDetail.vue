<template>
  <div class="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-x-hidden">
    <!-- Loading Screen -->
    <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div class="text-center">
        <div class="mb-8">
          <div class="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto flex items-center justify-center animate-pulse">
            <svg class="w-10 h-10 text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
          </div>
        </div>
        <div class="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-4">
          UTEERS
        </div>
        <div class="text-gray-600 animate-bounce">
          Đang tải thông tin dự án...
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div v-show="!isLoading" class="animate-fade-in">
    <!-- Navbar -->
    <Navbar />
    
    <!-- Main Content -->
    <main class="pt-20 w-full">
      <div class="w-full px-8 sm:px-12 lg:px-16 xl:px-24 py-8">
        <!-- Back Button -->
        <div class="mb-8 animate-slide-in-left">
          <button 
            @click="goBack"
            class="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Quay lại danh sách dự án
          </button>
        </div>

        <!-- Project Header -->
        <div v-if="project" class="mb-12 animate-slide-in-up">
          <div class="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div class="p-8 text-white">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ project.title }}</h1>
                <div class="flex flex-wrap gap-4">
                  <!-- Duration Badge -->
                  <span 
                    :class="project.duration === 'short' ? 'bg-blue-500' : 'bg-purple-500'"
                    class="text-white text-sm font-semibold px-4 py-2 rounded-full"
                  >
                    {{ project.duration === 'short' ? 'Ngắn hạn' : 'Dài hạn' }}
                  </span>
                  <!-- Field Badge -->
                  <span 
                    :class="getFieldBadgeClass(project.field)"
                    class="text-white text-sm font-semibold px-4 py-2 rounded-full"
                  >
                    {{ getFieldName(project.field) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Loading State -->
        <div v-else class="text-center py-20">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p class="mt-4 text-gray-600">Đang tải thông tin dự án...</p>
        </div>

        <!-- Content Layout -->
        <div v-if="project" class="grid grid-cols-1 lg:grid-cols-3 gap-12 animate-scale-in">
          <!-- Main Content - Left Column (2/3 width) -->
          <div class="lg:col-span-2 space-y-8 animate-slide-in-left">
            <!-- Description Section -->
            <div class="bg-white rounded-2xl shadow-lg p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <svg class="w-6 h-6 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Mô tả dự án
              </h2>
              <p class="text-gray-700 leading-relaxed text-lg">{{ project.description }}</p>
              <div class="mt-6 p-4 bg-blue-50 rounded-lg">
                <p class="text-blue-800 font-medium">
                  Đây là cơ hội tuyệt vời để bạn đóng góp cho cộng đồng và phát triển bản thân thông qua những hoạt động ý nghĩa.
                </p>
              </div>
            </div>

            <!-- Tasks Section -->
            <div class="bg-white rounded-2xl shadow-lg p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <svg class="w-6 h-6 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                </svg>
                Nhiệm vụ và hoạt động
              </h2>
              <div class="space-y-4">
                <div v-for="(task, index) in projectTasks" :key="index" class="flex items-start">
                  <div class="bg-green-100 rounded-full p-2 mr-4 mt-1">
                    <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">{{ task.title }}</h3>
                    <p class="text-gray-600">{{ task.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Accommodation Section -->
            <div class="bg-white rounded-2xl shadow-lg p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <svg class="w-6 h-6 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                Chỗ ở và ăn uống
              </h2>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="p-4 bg-orange-50 rounded-lg">
                  <h3 class="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg class="w-5 h-5 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    Chỗ ở
                  </h3>
                  <p class="text-gray-700">{{ accommodationInfo.housing }}</p>
                </div>
                <div class="p-4 bg-orange-50 rounded-lg">
                  <h3 class="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg class="w-5 h-5 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 0v2h2a2 2 0 012 2v13H8V6a2 2 0 012-2V4h2z"></path>
                    </svg>
                    Ăn uống
                  </h3>
                  <p class="text-gray-700">{{ accommodationInfo.meals }}</p>
                </div>
              </div>
            </div>

            <!-- Requirements Section -->
            <div class="bg-white rounded-2xl shadow-lg p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <svg class="w-6 h-6 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
                Yêu cầu tham gia
              </h2>
              <div class="space-y-3">
                <div v-for="(requirement, index) in projectRequirements" :key="index" class="flex items-start">
                  <div class="bg-red-100 rounded-full p-1 mr-3 mt-1">
                    <svg class="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <p class="text-gray-700">{{ requirement }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar - Right Column (1/3 width) -->
          <div class="lg:col-span-1 space-y-6 animate-slide-in-right">
            <!-- Overview Card -->
            <div class="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 class="text-xl font-bold text-gray-900 mb-6">Tổng quan dự án</h3>
              
              <div class="space-y-4">
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div class="flex items-center">
                    <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                    </svg>
                    <span class="text-gray-700 font-medium">Người tham gia</span>
                  </div>
                  <span class="text-gray-900 font-bold">{{ project.participants }}</span>
                </div>
                
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div class="flex items-center">
                    <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span class="text-gray-700 font-medium">Ngày bắt đầu</span>
                  </div>
                  <span class="text-gray-900 font-bold">{{ project.date }}</span>
                </div>
                
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div class="flex items-center">
                    <svg class="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span class="text-gray-700 font-medium">Thời gian</span>
                  </div>
                  <span class="text-gray-900 font-bold">{{ project.duration === 'short' ? 'Ngắn hạn' : 'Dài hạn' }}</span>
                </div>
                
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div class="flex items-center">
                    <svg class="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    <span class="text-gray-700 font-medium">Lĩnh vực</span>
                  </div>
                  <span class="text-gray-900 font-bold">{{ getFieldName(project.field) }}</span>
                </div>
              </div>

              <!-- Join Button -->
              <div class="mt-8">
                <button 
                  v-if="!isJoined"
                  @click="showConfirmPopup"
                  class="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Tham gia ngay
                </button>
                
                <!-- Already Joined Button -->
                <button 
                  v-else
                  disabled
                  class="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg cursor-not-allowed opacity-90"
                >
                  <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Đã tham gia
                </button>
                
                <!-- Contact Info -->
                <div class="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 class="font-semibold text-gray-900 mb-2">Liên hệ</h4>
                  <p class="text-sm text-gray-600 mb-1">Email: volunteer@ulis.vnu.edu.vn</p>
                  <p class="text-sm text-gray-600">Hotline: 024 3754 2201</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Popup Overlay -->
    <div v-if="showPopup" class="fixed inset-0 z-50 overflow-y-auto">
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"></div>
      
      <!-- Confirm Popup -->
      <div v-if="popupType === 'confirm'" class="flex items-center justify-center min-h-screen px-4">
        <div class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all duration-300 scale-100">
          <!-- Header with Icon -->
          <div class="text-center pt-8 pb-4">
            <div class="mx-auto w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Xác nhận tham gia</h3>
            <p class="text-gray-600 px-6">
              Bạn có chắc chắn muốn tham gia hoạt động tình nguyện 
              <span class="font-semibold text-blue-600">"{{ project?.title }}"</span> không?
            </p>
          </div>
          
          <!-- Content -->
          <div class="px-6 pb-6">
            <div class="bg-blue-50 rounded-lg p-4 mb-6">
              <div class="flex items-center text-blue-800">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="text-sm font-medium">
                  Chúng tôi sẽ liên hệ với bạn sớm để cung cấp thông tin chi tiết về dự án
                </span>
              </div>
            </div>
            
            <!-- Action Buttons -->
            <div class="flex space-x-3">
              <button 
                @click="closePopup"
                class="flex-1 bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-xl hover:bg-gray-300 transition-all duration-200"
              >
                Hủy bỏ
              </button>
              <button 
                @click="confirmJoin"
                class="flex-1 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-3 px-4 rounded-xl hover:from-blue-600 hover:to-green-600 transition-all duration-200 transform hover:scale-105"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Loading Popup -->
      <div v-if="popupType === 'loading'" class="flex items-center justify-center min-h-screen px-4">
        <div class="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-auto transform transition-all duration-300 scale-100">
          <div class="text-center py-12 px-6">
            <!-- Loading Animation -->
            <div class="mx-auto w-16 h-16 mb-6">
              <div class="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-500"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Đang xử lý...</h3>
            <p class="text-gray-600">Vui lòng chờ trong giây lát</p>
          </div>
        </div>
      </div>
      
      <!-- Success Popup -->
      <div v-if="popupType === 'success'" class="flex items-center justify-center min-h-screen px-4">
        <div class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all duration-300 scale-100">
          <!-- Success Animation -->
          <div class="text-center pt-8 pb-4">
            <div class="mx-auto w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4 animate-pulse">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-green-600 mb-2">Đăng ký thành công!</h3>
            <p class="text-gray-600 px-6 mb-4">
              Bạn đã đăng ký tham gia thành công dự án 
              <span class="font-semibold text-green-600">"{{ project?.title }}"</span>
            </p>
          </div>
          
          <!-- Success Content -->
          <div class="px-6 pb-6">
            <div class="bg-green-50 rounded-lg p-4 mb-6">
              <div class="space-y-2">
                <div class="flex items-center text-green-800">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm">Đăng ký tham gia đã được ghi nhận</span>
                </div>
                <div class="flex items-center text-green-800">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm">Bắt đầu: {{ project?.date }}</span>
                </div>
                <div class="flex items-center text-green-800">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  </svg>
                  <span class="text-sm">{{ getFieldName(project?.field) }}</span>
                </div>
              </div>
            </div>
            
            <button 
              @click="closePopup"
              class="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 px-4 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
            >
              Hoàn tất
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white mt-16">
      <div class="w-full px-12 sm:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16">
        <div class="max-w-7xl mx-auto">
          <div class="text-center">
            <div class="flex items-center justify-center mb-6">
              <img 
                :src="ulisLogo" 
                alt="ULIS Logo" 
                class="h-16 w-16 object-contain mr-4"
              />
              <div>
                <h3 class="text-2xl font-bold bg-gradient-to-r from-amber-400 to-green-500 bg-clip-text text-transparent">
                  UTEERS
                </h3>
                <p class="text-gray-300 text-sm">Nối kết - Chia sẻ - Tình nguyện</p>
              </div>
            </div>
            <p class="text-gray-400 text-sm">
              © 2025 UTEERS - Đại học Ngoại ngữ, ĐHQGHN. Tất cả quyền được bảo lưu.
            </p>
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

export default {
  name: 'ProjectDetail',
  components: {
    Navbar
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      ulisLogo: ulisLogoImage,
      isLoading: true,
      project: null,
      projectTasks: [],
      accommodationInfo: {
        housing: '',
        meals: ''
      },
      projectRequirements: [],
      showPopup: false,
      popupType: 'confirm', // 'confirm', 'loading', 'success'
      isJoined: false,
      allProjects: [
        {
          id: 1,
          slug: 'truong-hoc-xanh-tuong-lai-xanh',
          title: 'Chiến dịch "Trường học xanh - Tương lai xanh"',
          description: 'Chiến dịch "Trường học xanh - Tương lai xanh" là một dự án môi trường quy mô lớn nhằm tạo ra một không gian giáo dục xanh, sạch và bền vững tại Đại học Ngoại ngữ - ĐHQGHN. Dự án bao gồm nhiều hoạt động đa dạng như trồng cây xanh, xây dựng vườn rau sạch, thu gom và phân loại rác thải, tổ chức các buổi tuyên truyền về bảo vệ môi trường.\n\nSinh viên tham gia sẽ được trang bị kiến thức về môi trường, học cách trồng và chăm sóc cây xanh, hiểu về tác hại của ô nhiễm môi trường và cách giảm thiểu chất thải. Chúng tôi cũng tổ chức các workshop về tái chế, tạo ra các sản phẩm hữu ích từ vật liệu tái chế.\n\nMục tiêu của chiến dịch là tạo ra một môi trường học tập trong lành, nâng cao ý thức bảo vệ môi trường của sinh viên và lan tỏa tinh thần xanh ra cộng đồng xung quanh. Đây không chỉ là hoạt động tình nguyện mà còn là hành trình giáo dục ý nghĩa giúp mỗi sinh viên trở thành những công dân có trách nhiệm với môi trường.',
          image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop',
          duration: 'short',
          field: 'environment',
          participants: 120,
          date: '15/08/2025',
          popularity: 95
        },
        {
          id: 2,
          slug: 'song-sach-lang-dep',
          title: 'Dự án "Sông sạch - Làng đẹp"',
          description: 'Dự án "Sông sạch - Làng đẹp" là một sáng kiến môi trường quan trọng nhằm phục hồi và bảo vệ nguồn nước sông Tô Lịch - một dòng sông có ý nghĩa lịch sử đặc biệt đối với Thủ đô Hà Nội. Dự án không chỉ tập trung vào việc làm sạch bờ sông mà còn xây dựng một chương trình giáo dục môi trường toàn diện.\n\nCác hoạt động chính bao gồm: thu gom rác thải, làm sạch bờ sông, trồng cây xanh dọc hai bên bờ, tuyên truyền về tác hại của việc xả rác xuống sông, tổ chức các buổi nói chuyện với cộng đồng địa phương về bảo vệ môi trường nước. Sinh viên sẽ được đào tạo về kiến thức môi trường, kỹ năng làm việc nhóm và giao tiếp với cộng đồng.\n\nChúng tôi hợp tác chặt chẽ với chính quyền địa phương và các tổ chức môi trường để đảm bảo tính bền vững của dự án. Mục tiêu dài hạn là tạo ra một mô hình bảo vệ môi trường có thể nhân rộng ra các khu vực khác, đồng thời nâng cao ý thức của cộng đồng về việc bảo vệ nguồn nước.',
          image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop',
          duration: 'long',
          field: 'environment',
          participants: 85,
          date: '22/08/2025',
          popularity: 78
        },
        {
          id: 3,
          slug: 'rung-xanh-ulis',
          title: 'Chương trình "Rừng xanh ULIS"',
          description: 'Chương trình "Rừng xanh ULIS" là một dự án trồng rừng quy mô lớn được thực hiện tại khu vực Ba Vì, Hòa Bình - một vùng có ý nghĩa quan trọng trong việc bảo vệ môi trường sinh thái khu vực phía Bắc. Đây là dự án dài hạn với tầm nhìn tạo ra một hành lang xanh bền vững, góp phần chống lại biến đổi khí hậu và bảo vệ đa dạng sinh học.\n\nCác hoạt động chính bao gồm: trồng cây gỗ bản địa, chăm sóc và bảo vệ rừng non, xây dựng hệ thống tưới tiêu, giáo dục cộng đồng về tầm quan trọng của rừng, nghiên cứu và theo dõi sự phát triển của hệ sinh thái rừng. Sinh viên tham gia sẽ được đào tạo về kỹ thuật trồng rừng, kiến thức về sinh thái học và kỹ năng làm việc trong môi trường thiên nhiên.\n\nDự án không chỉ mang lại lợi ích môi trường mà còn tạo ra cơ hội việc làm cho người dân địa phương, phát triển du lịch sinh thái bền vững. Chúng tôi hợp tác với các chuyên gia lâm nghiệp, cơ quan quản lý rừng và cộng đồng địa phương để đảm bảo tính khoa học và hiệu quả của dự án. Mục tiêu là tạo ra một khu rừng mẫu có thể nhân rộng ra toàn quốc.',
          image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
          duration: 'long',
          field: 'environment',
          participants: 200,
          date: '30/09/2025',
          popularity: 89
        },

        // Dự án giáo dục (3 dự án)
        {
          id: 4,
          slug: 'lop-hoc-tieng-anh-mien-phi',
          title: 'Lớp học tiếng Anh miễn phí cho trẻ em vùng khó khăn',
          description: 'Chương trình "Lớp học tiếng Anh miễn phí cho trẻ em vùng khó khăn" là một dự án giáo dục xã hội ý nghĩa nhằm mang đến cơ hội học tập ngôn ngữ quốc tế cho những em nhỏ có hoàn cảnh kinh tế khó khăn. Với sự tham gia của các sinh viên ngành Ngôn ngữ Anh xuất sắc, chương trình không chỉ giảng dạy kiến thức mà còn truyền cảm hứng học tập.\n\nChương trình giảng dạy được thiết kế phù hợp với từng độ tuổi, từ cơ bản đến nâng cao, bao gồm: phát âm chuẩn, từ vựng thiết yếu, ngữ pháp cơ bản, kỹ năng giao tiếp, và văn hóa các nước nói tiếng Anh. Các lớp học được tổ chức với phương pháp giảng dạy hiện đại, sử dụng game, bài hát, và các hoạt động tương tác để tạo hứng thú học tập.\n\nNgoài việc giảng dạy, sinh viên tình nguyện còn tổ chức các hoạt động ngoại khóa như English Club, thi đấu tiếng Anh, và các buổi sinh hoạt văn hóa. Chúng tôi cũng hỗ trợ tài liệu học tập, sách vở và các dụng cụ học tập cần thiết. Mục tiêu là mở ra cánh cửa tri thức, giúp các em có cơ hội tiếp cận với thế giới rộng lớn thông qua ngôn ngữ.',
          image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
          duration: 'long',
          field: 'education',
          participants: 45,
          date: '05/09/2025',
          popularity: 88
        },
        {
          id: 5,
          slug: 'sinh-vien-ve-nguon',
          title: 'Chương trình "Sinh viên về nguồn"',
          description: 'Chương trình "Sinh viên về nguồn" là một dự án giáo dục ý nghĩa kết nối thế hệ trẻ với nguồn cội, đồng thời mang tri thức từ thành phố về vùng nông thôn. Đây là cầu nối giữa sinh viên thủ đô và học sinh các vùng xa, tạo ra cơ hội học tập và phát triển cho cả hai bên.\n\nCác hoạt động chính bao gồm: tổ chức lớp học bổ túc các môn Toán, Lý, Hóa, Văn cho học sinh THPT, chia sẻ kinh nghiệm học tập và phương pháp ôn thi đại học, tư vấn định hướng nghề nghiệp và chọn ngành học phù hợp, tổ chức các buổi sinh hoạt văn hóa và thể thao. Sinh viên tình nguyện sẽ được đào tạo kỹ năng sư phạm, kỹ năng giao tiếp và hiểu biết về tâm lý học sinh.\n\nChương trình không chỉ truyền đạt kiến thức mà còn truyền cảm hứng, động lực học tập cho các em học sinh vùng xa. Chúng tôi tổ chức các hoạt động trải nghiệm như thăm quan đại học, gặp gỡ các chuyên gia, và các buổi tọa đàm về tương lai. Mục tiêu là giúp các em mở rộng tầm nhìn, có động lực phấn đấu và định hướng tương lai rõ ràng.',
          image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop',
          duration: 'short',
          field: 'education',
          participants: 60,
          date: '12/09/2025',
          popularity: 72
        },
        {
          id: 6,
          slug: 'cau-noi-tri-thuc',
          title: 'Dự án "Cầu nối tri thức"',
          description: 'Dự án "Cầu nối tri thức" là một sáng kiến giáo dục nhân văn nhằm xóa bỏ khoảng cách về cơ hội học tập giữa các em học sinh có hoàn cảnh khó khăn và những bạn cùng trang lứa. Với tinh thần "tri thức là sức mạnh", dự án mang đến cơ hội học tập công bằng cho mọi em học sinh.\n\nCác hoạt động cốt lõi bao gồm: tặng sách vở, dụng cụ học tập chất lượng cao, tư vấn phương pháp học tập hiệu quả cho từng môn học, tổ chức các lớp học thêm miễn phí, hỗ trợ học phí cho những em có thành tích xuất sắc, xây dựng thư viện mini tại các khu vực thiếu thốn. Sinh viên tình nguyện sẽ được đào tạo về kỹ năng tư vấn học tập và tâm lý học đối với trẻ em.\n\nDự án còn tổ chức các hoạt động giao lưu giữa học sinh các vùng miền, tạo điều kiện cho các em học hỏi lẫn nhau và mở rộng tầm nhìn. Chúng tôi hợp tác với các nhà xuất bản, các tổ chức giáo dục để đảm bảo chất lượng tài liệu học tập. Mục tiêu dài hạn là xây dựng một mạng lưới hỗ trợ giáo dục bền vững, giúp mỗi em học sinh đều có cơ hội phát triển tài năng.',
          image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop',
          duration: 'short',
          field: 'education',
          participants: 80,
          date: '18/10/2025',
          popularity: 91
        },

        // Dự án văn hóa (3 dự án)
        {
          id: 7,
          slug: 'le-hoi-van-hoa-dan-toc',
          title: 'Lễ hội văn hóa các dân tộc Việt Nam',
          description: 'Lễ hội văn hóa các dân tộc Việt Nam là một sự kiện văn hóa quy mô lớn nhằm tôn vinh, bảo tồn và phát huy giá trị văn hóa truyền thống của 54 dân tộc anh em trên đất nước Việt Nam. Đây là dịp để cộng đồng sinh viên và người dân hiểu sâu hơn về sự đa dạng và phong phú của văn hóa dân tộc.\n\nLễ hội bao gồm nhiều hoạt động đặc sắc: triển lãm trang phục truyền thống, trưng bày các món ăn đặc sản vùng miền, biểu diễn ca múa nhạc dân gian, thể hiện các trò chơi dân gian, workshop học làm thủ công mỹ nghệ, và các buổi thuyết trình về lịch sử, văn hóa từng dân tộc. Sinh viên tham gia sẽ được đào tạo về kiến thức văn hóa dân tộc học và kỹ năng tổ chức sự kiện.\n\nChúng tôi hợp tác với các nghệ nhân, các trưởng lão trong cộng đồng các dân tộc để đảm bảo tính chân thực và ý nghĩa của từng hoạt động. Lễ hội không chỉ là nơi trưng bày mà còn là không gian giao lưu, học hỏi và kết nối giữa các thế hệ. Mục tiêu là góp phần gìn giữ và truyền tải những giá trị văn hóa quý báu cho thế hệ tương lai.',
          image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop',
          duration: 'short',
          field: 'culture',
          participants: 200,
          date: '20/09/2025',
          popularity: 91
        },
        {
          id: 8,
          slug: 'ke-chuyen-dan-gian',
          title: 'Dự án "Kể chuyện dân gian"',
          description: 'Dự án "Kể chuyện dân gian" là một sáng kiến văn hóa độc đáo nhằm thu thập, lưu giữ và truyền tải kho tàng câu chuyện dân gian phong phú của Việt Nam từ những người cao tuổi - những người lưu giữ ký ức sống của dân tộc. Đây là cuộc hành trình khám phá và bảo tồn di sản văn hóa phi vật thể quý báu.\n\nCác hoạt động chính bao gồm: phỏng vấn và ghi âm câu chuyện từ các cụ già, nghiên cứu nguồn gốc và ý nghĩa của từng câu chuyện, tạo dựng bộ sưu tập số hóa với âm thanh và hình ảnh, tổ chức các buổi kể chuyện cho trẻ em, xuất bản sách câu chuyện dân gian hiện đại. Sinh viên tham gia sẽ được đào tạo kỹ năng phỏng vấn, nghiên cứu văn hóa và kỹ thuật số hóa tài liệu.\n\nDự án không chỉ thu thập mà còn tái hiện các câu chuyện thông qua nhiều hình thức nghệ thuật như kịch, múa, họa sĩ minh họa. Chúng tôi hợp tác với các nghiên cứu sinh văn học dân gian, các nhà văn và nghệ sĩ để đảm bảo chất lượng và tính học thuật của dự án. Mục tiêu là tạo ra một bộ sưu tập văn hóa sống động, có thể truyền cảm hứng và giáo dục cho thế hệ trẻ về những giá trị truyền thống.',
          image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
          duration: 'long',
          field: 'culture',
          participants: 35,
          date: '28/09/2025',
          popularity: 67
        },
        {
          id: 9,
          slug: 'di-san-van-hoa-thang-long',
          title: 'Chương trình "Di sản văn hóa Thăng Long"',
          description: 'Chương trình "Di sản văn hóa Thăng Long" là một dự án nghiên cứu và giáo dục văn hóa quy mô lớn nhằm khám phá, bảo tồn và quảng bá các di tích lịch sử văn hóa của Thăng Long - Hà Nội, thủ đô ngàn năm văn hiến của Việt Nam. Đây là hành trình khám phá những tầng lớp lịch sử sâu sắc của một trong những trung tâm văn hóa quan trọng nhất Đông Nam Á.\n\nCác hoạt động chính bao gồm: nghiên cứu lịch sử các di tích từ thời Lý - Trần đến nay, tổ chức các tour khám phá di sản cho sinh viên và du khách, tạo dựng bản đồ di sản số với thông tin chi tiết, phối hợp với các chuyên gia khảo cổ học trong các hoạt động nghiên cứu, tổ chức triển lãm và hội thảo về lịch sử Thăng Long. Sinh viên tham gia sẽ được đào tạo kiến thức lịch sử, kỹ năng nghiên cứu và thuyết trình.\n\nChương trình còn tập trung vào việc giáo dục cộng đồng về giá trị di sản, tổ chức các lớp học về lịch sử địa phương cho học sinh, và xây dựng các ứng dụng công nghệ để quảng bá di sản. Chúng tôi hợp tác chặt chẽ với Viện Khảo cổ học, Bảo tàng Lịch sử và các chuyên gia văn hóa. Mục tiêu là kết nối thế hệ trẻ với lịch sử hào hùng của dân tộc, đồng thời nâng cao nhận thức về bảo vệ di sản văn hóa.',
          image: 'https://images.unsplash.com/photo-1571847140471-1d7766e825ea?w=400&h=300&fit=crop',
          duration: 'long',
          field: 'culture',
          participants: 150,
          date: '15/11/2025',
          popularity: 84
        },

        // Dự án nghệ thuật (3 dự án)
        {
          id: 10,
          slug: 'mau-sac-cuoc-song',
          title: 'Chương trình "Màu sắc cuộc sống"',
          description: 'Chương trình "Màu sắc cuộc sống" là một dự án nghệ thuật cộng đồng tuyệt vời nhằm mang nghệ thuật hội họa đến gần hơn với cuộc sống của trẻ em, đồng thời tạo ra những không gian học tập sinh động và đầy cảm hứng. Dự án tập trung vào việc vẽ tranh tường tại các trường mầm non và tiểu học, biến những bức tường trống thành những tác phẩm nghệ thuật đầy màu sắc.\n\nCác hoạt động chính bao gồm: khảo sát và thiết kế ý tưởng tranh tường phù hợp với từng độ tuổi, vẽ tranh với chủ đề giáo dục như chữ cái, con số, thiên nhiên, và các câu chuyện cổ tích, tổ chức các lớp học vẽ miễn phí cho trẻ em, hướng dẫn các em tham gia vào quá trình sáng tác, và bảo dưỡng định kỳ các tác phẩm. Sinh viên tham gia sẽ được đào tạo kỹ thuật vẽ tranh tường, tâm lý trẻ em và kỹ năng làm việc với cộng đồng.\n\nDự án không chỉ tạo ra môi trường học tập đẹp mắt mà còn khuyến khích sự sáng tạo và cảm thụ nghệ thuật của trẻ em. Chúng tôi sử dụng sơn thân thiện với môi trường và phù hợp với trẻ em, đảm bảo an toàn tuyệt đối. Mục tiêu là tạo ra những không gian giáo dục đầy cảm hứng, giúp trẻ em phát triển tư duy sáng tạo và yêu thích học tập ngay từ nhỏ.',
          image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
          duration: 'short',
          field: 'art',
          participants: 55,
          date: '10/10/2025',
          popularity: 84
        },
        {
          id: 11,
          slug: 'am-nhac-cho-moi-nguoi',
          title: 'Dự án "Âm nhạc cho mọi người"',
          description: 'Dự án "Âm nhạc cho mọi người" là một chương trình nghệ thuật nhân văn sâu sắc, mang âm nhạc - ngôn ngữ chung của nhân loại - đến với những người cần được quan tâm và chăm sóc đặc biệt. Dự án tập trung vào việc tổ chức các buổi biểu diễn âm nhạc tại viện dưỡng lão, bệnh viện, và các trung tâm chăm sóc, nhằm mang lại niềm vui, sự chia sẻ và chữa lành tâm hồn.\n\nCác hoạt động đa dạng bao gồm: biểu diễn nhạc cụ dân tộc và hiện đại, hát các bài hát quen thuộc từ thời thanh xuân của các cụ, tổ chức các buổi hòa nhạc mini với sự tham gia của bệnh nhân, dạy hát và chơi nhạc cụ đơn giản cho những người có thể tham gia, và ghi lại những câu chuyện, bài hát yêu thích của họ. Sinh viên tham gia sẽ được đào tạo kỹ năng biểu diễn, giao tiếp với người cao tuổi và người bệnh.\n\nDự án được thực hiện với sự tư vấn của các chuyên gia âm nhạc trị liệu, đảm bảo hiệu quả tích cực đến sức khỏe tinh thần của người tham gia. Chúng tôi cũng tổ chức các lớp học âm nhạc cơ bản, giúp mọi người có thể tự biểu đạt cảm xúc qua âm nhạc. Mục tiêu là lan tỏa tình yêu thương, mang lại hy vọng và năng lượng tích cực cho những người đang trải qua khó khăn trong cuộc sống.',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
          duration: 'long',
          field: 'art',
          participants: 40,
          date: '18/10/2025',
          popularity: 76
        },
        {
          id: 12,
          slug: 'festival-nghe-thuat-tre-ulis',
          title: 'Festival "Nghệ thuật trẻ ULIS"',
          description: 'Festival "Nghệ thuật trẻ ULIS" là sự kiện nghệ thuật lớn nhất trong năm của Đại học Ngoại ngữ, tạo ra một sân chơi sáng tạo rộng lớn cho sinh viên thể hiện tài năng và đam mê nghệ thuật đa dạng. Đây là nơi hội tụ của những tài năng trẻ, nơi các ý tưởng sáng tạo được thể hiện một cách tự do và đầy cảm hứng.\n\nFestival bao gồm nhiều hoạt động phong phú: cuộc thi múa đương đại và dân tộc, thi hát solo và nhóm với nhiều thể loại từ dân ca đến pop hiện đại, triển lãm tranh vẽ và điêu khắc của sinh viên, cuộc thi nhiếp ảnh với các chủ đề đa dạng, workshop kỹ thuật nghệ thuật do các chuyên gia hướng dẫn, và các buổi biểu diễn nghệ thuật kết hợp. Sinh viên tham gia sẽ được đào tạo kỹ năng tổ chức sự kiện, quản lý dự án và làm việc nhóm.\n\nSự kiện không chỉ là nơi thể hiện tài năng mà còn là cơ hội giao lưu, học hỏi giữa các nghệ sĩ trẻ, tạo ra cộng đồng nghệ thuật năng động trong trường đại học. Chúng tôi mời các nghệ sĩ chuyên nghiệp, các gallery và nhà sản xuất âm nhạc tham gia đánh giá, mở ra cơ hội phát triển nghề nghiệp cho các tài năng xuất sắc. Mục tiêu là khuyến khích tinh thần sáng tạo, phát triển năng khiếu nghệ thuật và xây dựng văn hóa nghệ thuật đậm đà trong môi trường đại học.',
          image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=400&h=300&fit=crop',
          duration: 'short',
          field: 'art',
          participants: 300,
          date: '25/12/2025',
          popularity: 95
        },

        // Dự án hỗ trợ cộng đồng (3 dự án)
        {
          id: 13,
          slug: 'chia-se-yeu-thuong',
          title: 'Chương trình "Chia sẻ yêu thương"',
          description: 'Chương trình "Chia sẻ yêu thương" là một dự án nhân ái ấm áp được tổ chức thường niên nhân dịp Tết Nguyên đán, mang theo thông điệp của tình người và sự sẻ chia trong những ngày đầu năm mới. Đây là dịp để cộng đồng sinh viên ULIS thể hiện lòng biết ơn và lan tỏa tình yêu thương đến những hoàn cảnh khó khăn trong xã hội.\n\nCác hoạt động cốt lõi bao gồm: trao tặng gạo, mì tôm, dầu ăn và các nhu yếu phẩm thiết yếu cho các gia đình nghèo, tặng quần áo ấm, chăn màn cho trẻ em và người cao tuổi, tổ chức "Chợ Tết 0 đồng" với đầy đủ các món hàng cần thiết, nấu cơm từ thiện và tổ chức bữa cơm tất niên cho những người vô gia cư, và trao học bổng cho trẻ em có hoàn cảnh khó khăn nhưng học giỏi. Sinh viên tham gia sẽ được đào tạo kỹ năng tổ chức sự kiện từ thiện và giao tiếp với cộng đồng.\n\nChương trình được thực hiện với sự phối hợp chặt chẽ của chính quyền địa phương, đảm bảo việc hỗ trợ đến đúng đối tượng cần thiết. Chúng tôi cũng tổ chức các hoạt động văn nghệ nhỏ, mang không khí Tết đến với mọi người. Mục tiêu không chỉ là hỗ trợ vật chất mà còn là lan tỏa tinh thần tương thân tương ái, tạo nên một cộng đồng đoàn kết và nhân ái.',
          image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop',
          duration: 'short',
          field: 'community',
          participants: 150,
          date: '25/01/2025',
          popularity: 93
        },
        {
          id: 14,
          slug: 'diem-tua-cho-nguoi-cao-tuoi',
          title: 'Dự án "Điểm tựa cho người cao tuổi"',
          description: 'Dự án "Điểm tựa cho người cao tuổi" là một chương trình chăm sóc và đồng hành dài hạn với những người cao tuổi tại các viện dưỡng lão, nhằm mang lại sự quan tâm, niềm vui và chất lượng cuộc sống tốt hơn cho những người có công với xã hội. Đây là dự án thể hiện lòng hiếu thảo và trách nhiệm xã hội của thế hệ trẻ.\n\nCác hoạt động chăm sóc toàn diện bao gồm: hỗ trợ sinh hoạt hàng ngày như ăn uống, vệ sinh cá nhân, đi lại, tổ chức các buổi trò chuyện, chia sẻ kỷ niệm và kinh nghiệm sống, kiểm tra sức khỏe cơ bản và nhắc nhở uống thuốc đúng giờ, tổ chức các hoạt động giải trí như hát karaoke, xem phim, chơi cờ tướng, và dạy sử dụng công nghệ đơn giản để liên lạc với gia đình. Sinh viên tham gia sẽ được đào tạo kỹ năng chăm sóc người cao tuổi, tâm lý học và kỹ năng giao tiếp hiệu quả.\n\nDự án được thực hiện với sự hướng dẫn của các bác sĩ, điều dưỡng và chuyên gia tâm lý geriatrics, đảm bảo an toàn và hiệu quả trong chăm sóc. Chúng tôi cũng tổ chức các chuyến du lịch ngắn ngày, giúp các cụ có cơ hội ra ngoài và tận hưởng thiên nhiên. Mục tiêu là tạo ra một môi trường sống ấm cúng, đầy yêu thương, giúp người cao tuổi cảm thấy được quan tâm và có ý nghĩa trong cuộc sống.',
          image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
          duration: 'long',
          field: 'community',
          participants: 70,
          date: '08/11/2025',
          popularity: 82
        },
        {
          id: 15,
          slug: 'mai-am-tinh-thuong',
          title: 'Chương trình "Mái ấm tình thương"',
          description: 'Chương trình "Mái ấm tình thương" là một dự án xây dựng và phát triển cộng đồng quy mô lớn, tập trung vào việc cải thiện điều kiện sống cơ bản cho các hộ gia đình có hoàn cảnh khó khăn tại các vùng nông thôn. Đây không chỉ là dự án xây dựng nhà ở mà còn là chương trình phát triển bền vững, góp phần xây dựng nông thôn mới văn minh, hiện đại.\n\nCác hoạt động xây dựng và phát triển bao gồm: khảo sát và đánh giá tình trạng nhà ở hiện tại, thiết kế và xây dựng nhà mới hoặc sửa chữa, cải tạo nhà cũ, xây dựng hệ thống nước sạch và vệ sinh môi trường, lắp đặt hệ thống điện và các tiện ích cơ bản, và tư vấn về kỹ thuật xây dựng bền vững, thân thiện với môi trường. Sinh viên tham gia sẽ được đào tạo kỹ năng xây dựng cơ bản, quản lý dự án và làm việc với cộng đồng địa phương.\n\nChương trình được thực hiện với sự hỗ trợ của các kỹ sư xây dựng, kiến trúc sư và thợ xây có kinh nghiệm, đảm bảo chất lượng và an toàn công trình. Chúng tôi cũng tổ chức các lớp học về kỹ thuật bảo dưỡng nhà cửa cho các hộ gia đình được hỗ trợ. Mục tiêu dài hạn là tạo ra những ngôi nhà bền vững, không chỉ che chắn mưa nắng mà còn là nơi ấm cúng để gia đình sum vầy, góp phần nâng cao chất lượng cuộc sống và xây dựng cộng đồng phát triển.',
          image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop',
          duration: 'long',
          field: 'community',
          participants: 120,
          date: '02/08/2025',
          popularity: 87
        },

        // Dự án sự kiện (3 dự án)
        {
          id: 16,
          slug: 'ket-noi-sinh-vien-ulis',
          title: 'Ngày hội "Kết nối sinh viên ULIS"',
          description: 'Ngày hội "Kết nối sinh viên ULIS" là sự kiện giao lưu văn hóa và thể thao lớn nhất trong năm của Đại học Ngoại ngữ, nhằm tăng cường sự gắn kết, hiểu biết và tình đoàn kết giữa sinh viên các khoa, các khóa và các chương trình đào tạo khác nhau. Đây là dịp để cộng đồng sinh viên ULIS thể hiện tinh thần đoàn kết, sáng tạo và năng động.\n\nCác hoạt động đa dạng và hấp dẫn bao gồm: thi đấu thể thao với nhiều môn như bóng đá, bóng chuyền, cầu lông, bóng bàn, chạy tiếp sức, các cuộc thi văn nghệ với tiết mục múa, hát, kịch của từng khoa, triển lãm ẩm thực đặc sản các vùng miền do chính sinh viên chuẩn bị, các trò chơi dân gian và hiện đại, workshop kỹ năng mềm và định hướng nghề nghiệp, và đêm nhạc kết nối với sự tham gia của các ban nhạc sinh viên. Sinh viên tham gia sẽ được đào tạo kỹ năng tổ chức sự kiện, làm việc nhóm và lãnh đạo.\n\nNgày hội được tổ chức tại campus chính của trường với không gian mở, tạo ra môi trường giao lưu tự nhiên và thân thiện. Chúng tôi mời các cựu sinh viên thành đạt về chia sẻ kinh nghiệm và tạo cơ hội networking. Mục tiêu là xây dựng một cộng đồng sinh viên đoàn kết, năng động, nơi mỗi cá nhân đều cảm thấy được kết nối và có giá trị trong đại gia đình ULIS.',
          image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
          duration: 'short',
          field: 'event',
          participants: 300,
          date: '15/11/2025',
          popularity: 97
        },
        {
          id: 17,
          slug: 'tuong-lai-nghe-nghiep',
          title: 'Hội thảo "Tương lai nghề nghiệp"',
          description: 'Hội thảo "Tương lai nghề nghiệp" là một sự kiện giáo dục và định hướng nghề nghiệp quan trọng, mang đến cho sinh viên ULIS cơ hội tiếp cận với kiến thức thực tế và kinh nghiệm quý báu từ các chuyên gia hàng đầu trong nhiều lĩnh vực nghề nghiệp. Đây là cầu nối giữa thế giới học thuật và thực tiễn công việc, giúp sinh viên chuẩn bị tốt nhất cho hành trình sự nghiệp tương lai.\n\nCác hoạt động chuyên sâu bao gồm: các buổi thuyết trình từ CEO, giám đốc của các tập đoàn lớn, workshop về kỹ năng phỏng vấn và viết CV chuyên nghiệp, mô phỏng buổi phỏng vấn xin việc thực tế, tư vấn cá nhân về định hướng nghề nghiệp phù hợp với năng lực và sở thích, triển lãm việc làm với sự tham gia của hơn 50 doanh nghiệp, và các phiên networking trực tiếp với nhà tuyển dụng. Sinh viên tham gia sẽ được đào tạo kỹ năng mềm, kỹ năng tìm việc và phát triển sự nghiệp.\n\nHội thảo quy tụ những diễn giả đẳng cấp từ các lĩnh vực như ngoại giao, kinh doanh quốc tế, công nghệ, giáo dục, truyền thông, và du lịch. Chúng tôi cũng tổ chức các buổi mentoring, nơi sinh viên có thể nhận được lời khuyên cá nhân từ những người thành công. Mục tiêu là trang bị cho sinh viên không chỉ kiến thức mà còn tầm nhìn, động lực và sự tự tin để theo đuổi ước mơ nghề nghiệp.',
          image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop',
          duration: 'long',
          field: 'event',
          participants: 180,
          date: '22/11/2025',
          popularity: 89
        },
        {
          id: 18,
          slug: 'tuoi-tre-ulis-vi-cong-dong',
          title: 'Đại hội "Tuổi trẻ ULIS vì cộng đồng"',
          description: 'Đại hội "Tuổi trẻ ULIS vì cộng đồng" là sự kiện đỉnh cao và ý nghĩa nhất trong năm của Đại học Ngoại ngữ, tôn vinh tinh thần tình nguyện và trách nhiệm xã hội của thế hệ sinh viên ULIS. Đây không chỉ là một sự kiện mà là tuyên ngôn về cam kết và tầm nhìn của tuổi trẻ đối với sự phát triển bền vững của cộng đồng và xã hội.\n\nĐại hội bao gồm nhiều hoạt động ý nghĩa: lễ tôn vinh các tập thể và cá nhân có thành tích xuất sắc trong hoạt động tình nguyện, triển lãm các dự án tình nguyện tiêu biểu với hình ảnh và video tài liệu, tọa đàm "Tương lai của hoạt động tình nguyện" với sự tham gia của các chuyên gia xã hội học, ra mắt các sáng kiến tình nguyện mới cho năm tới, lễ ký kết hợp tác với các tổ chức xã hội và doanh nghiệp, và đêm gala với các tiết mục nghệ thuật thể hiện tinh thần tình nguyện. Sinh viên tham gia sẽ được đào tạo kỹ năng lãnh đạo, quản lý dự án xã hội và phát triển cộng đồng.\n\nĐại hội quy tụ đại diện từ các trường đại học trên toàn quốc, các tổ chức quốc tế, và các nhà lãnh đạo xã hội, tạo ra một diễn đàn chia sẻ kinh nghiệm và hợp tác phát triển. Chúng tôi cũng công bố "Tuyên bố ULIS về trách nhiệm xã hội của giới trẻ" và kế hoạch hành động cụ thể cho những năm tiếp theo. Mục tiêu là khẳng định vai trò tiên phong của sinh viên ULIS trong việc xây dựng một xã hội công bằng, bền vững và nhân ái.',
          image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop',
          duration: 'short',
          field: 'event',
          participants: 500,
          date: '05/12/2025',
          popularity: 100
        }
      ]
    }
  },
  mounted() {
    // Simulate loading time
    setTimeout(() => {
      this.loadProjectData()
      this.checkJoinedStatus()
      this.isLoading = false
    }, 1000)
  },
  methods: {
    loadProjectData() {
      // Find project by slug
      this.project = this.allProjects.find(p => p.slug === this.slug)
      
      if (!this.project) {
        // Handle project not found
        this.$router.push('/projects')
        return
      }

      // Load additional project data based on field
      this.loadProjectTasks()
      this.loadAccommodationInfo()
      this.loadProjectRequirements()
    },
    loadProjectTasks() {
      // Generate tasks based on project field
      const tasksByField = {
        environment: [
          {
            title: 'Thu gom rác thải',
            description: 'Tổ chức thu gom rác thải tại khu vực dự án và phân loại theo đúng quy định'
          },
          {
            title: 'Trồng cây xanh',
            description: 'Trồng và chăm sóc cây xanh tại các khu vực được chỉ định'
          },
          {
            title: 'Tuyên truyền môi trường',
            description: 'Tuyên truyền nâng cao ý thức bảo vệ môi trường cho cộng đồng'
          }
        ],
        education: [
          {
            title: 'Giảng dạy',
            description: 'Giảng dạy các môn học cơ bản cho trẻ em và học sinh'
          },
          {
            title: 'Tư vấn học tập',
            description: 'Tư vấn phương pháp học tập hiệu quả và định hướng nghề nghiệp'
          },
          {
            title: 'Tổ chức hoạt động',
            description: 'Tổ chức các hoạt động ngoại khóa bổ ích cho học sinh'
          }
        ],
        culture: [
          {
            title: 'Thu thập tài liệu',
            description: 'Thu thập và ghi chép các tài liệu văn hóa truyền thống'
          },
          {
            title: 'Tổ chức biểu diễn',
            description: 'Tổ chức các chương trình biểu diễn văn hóa dân gian'
          },
          {
            title: 'Hướng dẫn du khách',
            description: 'Hướng dẫn và giới thiệu về các di tích lịch sử văn hóa'
          }
        ],
        art: [
          {
            title: 'Sáng tác và biểu diễn',
            description: 'Tham gia sáng tác và biểu diễn các tác phẩm nghệ thuật'
          },
          {
            title: 'Trang trí và thiết kế',
            description: 'Thiết kế và trang trí không gian cho các sự kiện'
          },
          {
            title: 'Hướng dẫn nghệ thuật',
            description: 'Hướng dẫn các hoạt động nghệ thuật cho cộng đồng'
          }
        ],
        community: [
          {
            title: 'Hỗ trợ đời sống',
            description: 'Hỗ trợ các hoạt động sinh hoạt hàng ngày cho cộng đồng'
          },
          {
            title: 'Tặng quà và chăm sóc',
            description: 'Tặng quà và chăm sóc những người có hoàn cảnh khó khăn'
          },
          {
            title: 'Xây dựng cơ sở vật chất',
            description: 'Tham gia xây dựng và cải thiện cơ sở vật chất cho cộng đồng'
          }
        ],
        event: [
          {
            title: 'Tổ chức sự kiện',
            description: 'Tham gia tổ chức và điều phối các hoạt động sự kiện'
          },
          {
            title: 'Hỗ trợ kỹ thuật',
            description: 'Hỗ trợ âm thanh, ánh sáng và các vấn đề kỹ thuật'
          },
          {
            title: 'Đón tiếp và hướng dẫn',
            description: 'Đón tiếp và hướng dẫn khách tham dự sự kiện'
          }
        ]
      }

      this.projectTasks = tasksByField[this.project.field] || [
        {
          title: 'Tham gia hoạt động',
          description: 'Tham gia tích cực vào các hoạt động của dự án'
        },
        {
          title: 'Hỗ trợ tổ chức',
          description: 'Hỗ trợ ban tổ chức thực hiện các công việc cần thiết'
        }
      ]
    },
    loadAccommodationInfo() {
      if (this.project.duration === 'long') {
        this.accommodationInfo = {
          housing: 'Nhà nghỉ tập thể, phòng chung 4-6 người, có đầy đủ tiện nghi cơ bản',
          meals: 'Ba bữa ăn mỗi ngày, thực đơn đa dạng, phù hợp với sinh viên'
        }
      } else {
        this.accommodationInfo = {
          housing: 'Không bao gồm chỗ ở (dự án trong ngày)',
          meals: 'Bữa trưa và nước uống trong suốt thời gian tham gia'
        }
      }
    },
    loadProjectRequirements() {
      const commonRequirements = [
        'Là sinh viên Đại học Ngoại ngữ - ĐHQGHN',
        'Có tinh thần trách nhiệm và nhiệt tình',
        'Cam kết tham gia đầy đủ thời gian dự án'
      ]

      const fieldSpecificRequirements = {
        environment: ['Sức khỏe tốt, có thể làm việc ngoài trời'],
        education: ['Có kiến thức chuyên môn tốt', 'Kỹ năng giao tiếp tốt'],
        culture: ['Yêu thích văn hóa truyền thống', 'Có khả năng ghi chép, chụp ảnh'],
        art: ['Có năng khiếu nghệ thuật', 'Sáng tạo và nhiệt tình'],
        community: ['Tình nguyện cao', 'Kiên nhẫn và tận tâm'],
        event: ['Kỹ năng tổ chức tốt', 'Khả năng làm việc nhóm']
      }

      this.projectRequirements = [
        ...commonRequirements,
        ...(fieldSpecificRequirements[this.project.field] || [])
      ]
    },
    goBack() {
      this.$router.push('/projects')
    },
    showConfirmPopup() {
      this.popupType = 'confirm'
      this.showPopup = true
    },
    closePopup() {
      this.showPopup = false
    },
    confirmJoin() {
      // Show loading popup
      this.popupType = 'loading'
      
      // Simulate loading for 2 seconds
      setTimeout(() => {
        // Show success popup
        this.popupType = 'success'
        
        // Save to localStorage
        this.saveJoinedStatus()
        this.isJoined = true
        
        // Auto close success popup after 3 seconds
        setTimeout(() => {
          this.closePopup()
        }, 3000)
      }, 2000)
    },
    saveJoinedStatus() {
      if (!this.project) return
      
      // Get existing joined projects from localStorage
      const joinedProjects = JSON.parse(localStorage.getItem('joinedProjects') || '[]')
      
      // Add current project if not already joined
      if (!joinedProjects.includes(this.project.slug)) {
        joinedProjects.push(this.project.slug)
        localStorage.setItem('joinedProjects', JSON.stringify(joinedProjects))
        
        // Dispatch a custom event to notify other components
        window.dispatchEvent(new CustomEvent('projectJoined', {
          detail: { projectSlug: this.project.slug, totalCount: joinedProjects.length }
        }))
      }
    },
    checkJoinedStatus() {
      if (!this.project) return
      
      const joinedProjects = JSON.parse(localStorage.getItem('joinedProjects') || '[]')
      this.isJoined = joinedProjects.includes(this.project.slug)
    },
    joinProject() {
      // This method is kept for backward compatibility but no longer used
      this.showConfirmPopup()
    },
    getFieldName(field) {
      const fieldNames = {
        environment: 'Môi trường',
        education: 'Giáo dục',
        culture: 'Văn hóa',
        art: 'Nghệ thuật',
        community: 'Hỗ trợ cộng đồng',
        event: 'Sự kiện'
      }
      return fieldNames[field] || field
    },
    getFieldBadgeClass(field) {
      const fieldClasses = {
        environment: 'bg-green-500',
        education: 'bg-blue-500',
        culture: 'bg-purple-500',
        art: 'bg-pink-500',
        community: 'bg-orange-500',
        event: 'bg-indigo-500'
      }
      return fieldClasses[field] || 'bg-gray-500'
    }
  },
  watch: {
    slug() {
      this.loadProjectData()
      this.checkJoinedStatus()
    },
    project() {
      if (this.project) {
        this.checkJoinedStatus()
      }
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

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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

.animate-slide-in-left {
  animation: slideInLeft 0.6s ease-out 0.1s both;
}

.animate-slide-in-right {
  animation: slideInRight 0.6s ease-out 0.4s both;
}

.animate-scale-in {
  animation: scaleIn 0.6s ease-out 0.3s both;
}

/* Smooth transitions */
* {
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

/* Button hover effects */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover {
  transform: translateY(-1px);
}

/* Card hover effects */
.bg-white {
  transition: all 0.3s ease;
}

.bg-white:hover {
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
}

/* Image overlay gradient */
.bg-black.bg-opacity-40 {
  background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3));
}

/* Popup animations */
.popup-enter-active, .popup-leave-active {
  transition: opacity 0.3s ease;
}

.popup-enter-from, .popup-leave-to {
  opacity: 0;
}

.popup-content-enter-active, .popup-content-leave-active {
  transition: all 0.3s ease;
}

.popup-content-enter-from, .popup-content-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(-20px);
}

/* Backdrop blur effect */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out;
}

/* Loading spinner custom colors */
.border-t-blue-500 {
  border-top-color: #3b82f6;
}

/* Success checkmark animation */
@keyframes checkmark {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.animate-checkmark {
  animation: checkmark 0.6s ease-out;
}
</style>

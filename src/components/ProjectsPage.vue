<template>
  <div class="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-x-hidden">
    <!-- Navbar -->
    <Navbar />
    
    <!-- Main Content -->
    <main class="pt-20 w-full">
      <div class="w-full px-8 sm:px-12 lg:px-16 xl:px-24 py-8">
        <!-- Page Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Dự án tình nguyện</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Tham gia các hoạt động tình nguyện ý nghĩa và tạo nên những thay đổi tích cực cho cộng đồng
          </p>
        </div>

        <!-- Content Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- Filter Sidebar -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 class="text-xl font-bold text-gray-900 mb-6">Bộ lọc</h3>
              
              <!-- Project Type Filter -->
              <div class="mb-8">
                <h4 class="text-lg font-semibold text-gray-800 mb-4">Loại hình dự án</h4>
                <div class="space-y-3">
                  <label class="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      v-model="filters.duration" 
                      value="short"
                      @change="applyFilters"
                      class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span class="ml-3 text-gray-700">Ngắn hạn</span>
                  </label>
                  <label class="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      v-model="filters.duration" 
                      value="long"
                      @change="applyFilters"
                      class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span class="ml-3 text-gray-700">Dài hạn</span>
                  </label>
                </div>
              </div>

              <!-- Field Filter -->
              <div class="mb-8">
                <h4 class="text-lg font-semibold text-gray-800 mb-4">Lĩnh vực</h4>
                <div class="space-y-3">
                  <label class="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      v-model="filters.field" 
                      value="environment"
                      @change="applyFilters"
                      class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span class="ml-3 text-gray-700">Môi trường</span>
                  </label>
                  <label class="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      v-model="filters.field" 
                      value="education"
                      @change="applyFilters"
                      class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span class="ml-3 text-gray-700">Giáo dục</span>
                  </label>
                  <label class="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      v-model="filters.field" 
                      value="culture"
                      @change="applyFilters"
                      class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span class="ml-3 text-gray-700">Văn hóa</span>
                  </label>
                  <label class="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      v-model="filters.field" 
                      value="art"
                      @change="applyFilters"
                      class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span class="ml-3 text-gray-700">Nghệ thuật</span>
                  </label>
                  <label class="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      v-model="filters.field" 
                      value="community"
                      @change="applyFilters"
                      class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span class="ml-3 text-gray-700">Hỗ trợ cộng đồng</span>
                  </label>
                  <label class="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      v-model="filters.field" 
                      value="event"
                      @change="applyFilters"
                      class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span class="ml-3 text-gray-700">Sự kiện</span>
                  </label>
                </div>
              </div>

              <!-- Sort Filter -->
              <div class="mb-6">
                <h4 class="text-lg font-semibold text-gray-800 mb-4">Sắp xếp theo</h4>
                <div class="space-y-3">
                  <label class="flex items-center cursor-pointer">
                    <input 
                      type="radio" 
                      v-model="filters.sort" 
                      value="newest"
                      @change="applyFilters"
                      class="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                    />
                    <span class="ml-3 text-gray-700">Mới nhất</span>
                  </label>
                  <label class="flex items-center cursor-pointer">
                    <input 
                      type="radio" 
                      v-model="filters.sort" 
                      value="popular"
                      @change="applyFilters"
                      class="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                    />
                    <span class="ml-3 text-gray-700">Được quan tâm nhất</span>
                  </label>
                  <label class="flex items-center cursor-pointer">
                    <input 
                      type="radio" 
                      v-model="filters.sort" 
                      value="random"
                      @change="applyFilters"
                      class="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                    />
                    <span class="ml-3 text-gray-700">Ngẫu nhiên</span>
                  </label>
                </div>
              </div>

              <!-- Clear Filters Button -->
              <button 
                @click="clearFilters"
                class="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200"
              >
                Xóa bộ lọc
              </button>
            </div>
          </div>

          <!-- Projects Grid -->
          <div class="lg:col-span-3">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <!-- Project Card -->
              <div 
                v-for="project in paginatedProjects" 
                :key="project.id"
                class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                <!-- Project Image -->
                <div class="relative h-48 overflow-hidden flex-shrink-0">
                  <img 
                    :src="project.image" 
                    :alt="project.title"
                    class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <!-- Duration Badge -->
                  <div class="absolute top-4 left-4">
                    <span 
                      :class="project.duration === 'short' ? 'bg-blue-500' : 'bg-purple-500'"
                      class="text-white text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {{ project.duration === 'short' ? 'Ngắn hạn' : 'Dài hạn' }}
                    </span>
                  </div>
                  <!-- Field Badge -->
                  <div class="absolute top-4 right-4">
                    <span 
                      :class="getFieldBadgeClass(project.field)"
                      class="text-white text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {{ getFieldName(project.field) }}
                    </span>
                  </div>
                </div>

                <!-- Project Content -->
                <div class="p-6 flex flex-col flex-grow">
                  <h3 class="text-xl font-bold text-gray-900 mb-3">{{ project.title }}</h3>
                  <p class="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{{ project.description }}</p>
                  
                  <!-- Project Stats -->
                  <div class="flex items-center justify-between mb-4 text-sm text-gray-500 mt-auto">
                    <div class="flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                      </svg>
                      {{ project.participants }} người tham gia
                    </div>
                    <div class="flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      {{ project.date }}
                    </div>
                  </div>

                  <!-- Register Button -->
                  <button 
                    @click="goToProjectDetail(project)"
                    class="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 register-btn mt-auto"
                  >
                    Đăng ký ngay
                  </button>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div v-if="totalPages > 1" class="flex justify-center mt-12">
              <nav class="flex items-center space-x-2">
                <!-- Previous Button -->
                <button 
                  @click="goToPage(currentPage - 1)"
                  :disabled="currentPage === 1"
                  :class="currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-blue-600'"
                  class="px-4 py-2 rounded-lg border border-gray-300 transition-all duration-200 flex items-center"
                >
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                  Trước
                </button>

                <!-- Page Numbers -->
                <template v-for="page in totalPages" :key="page">
                  <button 
                    v-if="shouldShowPage(page)"
                    @click="goToPage(page)"
                    :class="page === currentPage ? 
                      'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg' : 
                      'bg-white text-gray-700 hover:bg-gray-50 hover:text-blue-600'"
                    class="px-4 py-2 rounded-lg border border-gray-300 transition-all duration-200 min-w-[40px]"
                  >
                    {{ page }}
                  </button>
                  <span v-else-if="shouldShowEllipsis(page)" class="px-2 text-gray-500">...</span>
                </template>

                <!-- Next Button -->
                <button 
                  @click="goToPage(currentPage + 1)"
                  :disabled="currentPage === totalPages"
                  :class="currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-blue-600'"
                  class="px-4 py-2 rounded-lg border border-gray-300 transition-all duration-200 flex items-center"
                >
                  Sau
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </nav>
            </div>

            <!-- Results Info -->
            <div class="text-center mt-6 text-sm text-gray-600">
              Hiển thị {{ ((currentPage - 1) * itemsPerPage) + 1 }} - {{ Math.min(currentPage * itemsPerPage, filteredProjects.length) }} 
              trong tổng số {{ filteredProjects.length }} dự án
            </div>

            <!-- No Results Message -->
            <div v-if="filteredProjects.length === 0" class="text-center py-12">
              <div class="text-gray-400 mb-4">
                <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-600 mb-2">Không tìm thấy dự án</h3>
              <p class="text-gray-500">Hãy thử thay đổi bộ lọc để tìm thấy dự án phù hợp</p>
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
  name: 'ProjectsPage',
  components: {
    Navbar
  },
  data() {
    return {
      ulisLogo: ulisLogoImage,
      filters: {
        duration: [],
        field: [],
        sort: 'newest'
      },
      currentPage: 1,
      itemsPerPage: 6,
      allProjects: [
        // Dự án môi trường (3 dự án)
        {
          id: 1,
          slug: 'truong-hoc-xanh-tuong-lai-xanh',
          title: 'Chiến dịch "Trường học xanh - Tương lai xanh"',
          description: 'Tham gia hoạt động trồng cây, thu gom rác thải tại khuôn viên trường và khu vực lân cận. Nâng cao ý thức bảo vệ môi trường cho sinh viên và cộng đồng.',
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
          description: 'Làm sạch bờ sông Tô Lịch, tuyên truyền về tác hại của việc xả rác xuống sông. Xây dựng ý thức bảo vệ môi trường nước cho cộng đồng địa phương.',
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
          description: 'Trồng rừng tại khu vực Ba Vì, Hòa Bình. Góp phần chống biến đổi khí hậu và bảo vệ đa dạng sinh học cho thế hệ tương lai.',
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
          description: 'Giảng dạy tiếng Anh cơ bản cho trẻ em tại các khu vực khó khăn. Tạo cơ hội học tập và phát triển ngôn ngữ cho các em nhỏ.',
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
          description: 'Tổ chức lớp học bổ túc kiến thức cho học sinh THPT tại các vùng nông thôn. Chia sẻ kinh nghiệm học tập và định hướng nghề nghiệp.',
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
          description: 'Hỗ trợ học tập cho học sinh có hoàn cảnh khó khăn tại Hà Nội. Tặng sách vở, dụng cụ học tập và tư vấn phương pháp học hiệu quả.',
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
          description: 'Tổ chức triển lãm, biểu diễn văn hóa truyền thống của 54 dân tộc Việt Nam. Bảo tồn và phát huy giá trị văn hóa dân tộc.',
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
          description: 'Thu thập và lưu giữ các câu chuyện dân gian từ người cao tuổi. Tạo bộ sưu tập văn hóa truyền thống cho thế hệ trẻ.',
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
          description: 'Khám phá và giới thiệu các di tích lịch sử của Thăng Long - Hà Nội. Tăng cường nhận thức về giá trị di sản văn hóa dân tộc.',
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
          description: 'Vẽ tranh tường tại các trường mầm non và tiểu học. Tạo không gian học tập vui tươi, sinh động cho các em nhỏ.',
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
          description: 'Tổ chức các buổi biểu diễn âm nhạc tại viện dưỡng lão và bệnh viện. Mang niềm vui và sự chia sẻ đến với những người cần được quan tâm.',
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
          description: 'Sân chơi sáng tạo cho sinh viên thể hiện tài năng nghệ thuật. Bao gồm các hoạt động múa, hát, vẽ tranh và nhiếp ảnh.',
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
          description: 'Tặng quà và nhu yếu phẩm cho các gia đình khó khăn nhân dịp Tết Nguyên đán. Lan tỏa tinh thần tương thân tương ái.',
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
          description: 'Hỗ trợ sinh hoạt hàng ngày, trò chuyện và chăm sóc sức khỏe cho người cao tuổi tại các viện dưỡng lão.',
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
          description: 'Xây dựng và sửa chữa nhà cho các hộ gia đình khó khăn tại vùng nông thôn. Tạo điều kiện sống tốt hơn cho bà con.',
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
          description: 'Tổ chức các hoạt động giao lưu, thi đấu thể thao và văn nghệ nhằm tăng cường sự gắn kết giữa các sinh viên.',
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
          description: 'Mời các chuyên gia và doanh nhân thành công chia sẻ kinh nghiệm và định hướng nghề nghiệp cho sinh viên.',
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
          description: 'Sự kiện lớn nhất trong năm của ULIS, tôn vinh các hoạt động tình nguyện và kết nối sinh viên toàn trường.',
          image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop',
          duration: 'short',
          field: 'event',
          participants: 500,
          date: '05/12/2025',
          popularity: 100
        }
      ],
      filteredProjects: []
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredProjects.length / this.itemsPerPage)
    },
    paginatedProjects() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.filteredProjects.slice(start, end)
    }
  },
  mounted() {
    this.filteredProjects = [...this.allProjects]
    this.applySort()
  },
  methods: {
    applyFilters() {
      let filtered = [...this.allProjects]

      // Filter by duration
      if (this.filters.duration.length > 0) {
        filtered = filtered.filter(project => 
          this.filters.duration.includes(project.duration)
        )
      }

      // Filter by field
      if (this.filters.field.length > 0) {
        filtered = filtered.filter(project => 
          this.filters.field.includes(project.field)
        )
      }

      this.filteredProjects = filtered
      this.currentPage = 1 // Reset to first page when filtering
      this.applySort()
    },
    applySort() {
      switch (this.filters.sort) {
        case 'newest':
          this.filteredProjects.sort((a, b) => new Date(b.date) - new Date(a.date))
          break
        case 'popular':
          this.filteredProjects.sort((a, b) => b.popularity - a.popularity)
          break
        case 'random':
          this.filteredProjects.sort(() => Math.random() - 0.5)
          break
      }
    },
    clearFilters() {
      this.filters = {
        duration: [],
        field: [],
        sort: 'newest'
      }
      this.filteredProjects = [...this.allProjects]
      this.currentPage = 1 // Reset to first page
      this.applySort()
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
      }
    },
    shouldShowPage(page) {
      // Always show first, last, current, and adjacent pages
      if (page === 1 || page === this.totalPages || 
          (page >= this.currentPage - 1 && page <= this.currentPage + 1)) {
        return true
      }
      return false
    },
    shouldShowEllipsis(page) {
      // Show ellipsis for gaps
      return (page === 2 && this.currentPage > 4) || 
             (page === this.totalPages - 1 && this.currentPage < this.totalPages - 3)
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
    },
    goToProjectDetail(project) {
      // Navigate to project detail page using slug
      this.$router.push(`/project/${project.slug}`)
    }
  }
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Custom scrollbar for filter sidebar */
.filter-sidebar::-webkit-scrollbar {
  width: 4px;
}

.filter-sidebar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.filter-sidebar::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.filter-sidebar::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

/* Equal height cards */
.grid {
  align-items: stretch;
}

/* Smooth transitions for project cards */
.project-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Badge animations */
.badge {
  transition: all 0.2s ease-in-out;
}

.badge:hover {
  transform: scale(1.05);
}

/* Filter checkboxes and radio buttons custom styling */
input[type="checkbox"]:checked,
input[type="radio"]:checked {
  transform: scale(1.1);
}

/* Button hover effects */
.register-btn {
  position: relative;
  overflow: hidden;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.register-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.register-btn:hover::before {
  left: 100%;
}

/* Ensure all cards have equal height */
.grid > div {
  display: flex;
  flex-direction: column;
}

/* Card content distribution */
.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-content .description {
  flex-grow: 1;
  margin-bottom: 1rem;
}

.card-content .stats {
  margin-top: auto;
  margin-bottom: 1rem;
}

.card-content .button {
  margin-top: auto;
}
</style>

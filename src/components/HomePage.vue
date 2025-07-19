<template>
  <div class="min-h-screen w-full overflow-x-hidden">
    <!-- Navbar -->
    <Navbar />
    
    <!-- Hero Section -->
    <section id="hero" class="relative w-screen h-screen overflow-hidden">
      <!-- Background Image with Filter -->
      <div class="absolute inset-0 w-full h-full">
        <img 
          :src="bgHome" 
          alt="UTEERS Background" 
          class="w-full h-full object-cover"
        />
        <!-- Dark Filter Overlay -->
        <div class="absolute inset-0 bg-black/40"></div>
      </div>
      
      <!-- Content Container -->
      <div class="relative z-10 h-full flex items-center">
        <div class="w-full px-12 sm:px-16 lg:px-24 xl:px-32 2xl:px-40">
          <div class="max-w-2xl ml-16 sm:ml-24 lg:ml-32">
            <!-- Main Heading with Animation -->
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
              UTEERS
            </h1>
            
            <!-- Subtitle with Animation -->
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/90 mb-8 animate-fade-in-up animation-delay-200">
              Nối kết - Chia sẻ - Tình nguyện
            </h2>
            
            <!-- Description with Animation -->
            <p class="text-lg sm:text-xl lg:text-2xl text-white/80 mb-12 leading-relaxed max-w-xl animate-fade-in-up animation-delay-400">
              Cùng nhau xây dựng cộng đồng tình nguyện mạnh mẽ, 
              lan tỏa yêu thương và tạo nên những giá trị tích cực 
              cho xã hội.
            </p>
            
            <!-- CTA Button with Animation -->
            <button 
              @click="scrollToAbout"
              class="group custom-border text-white hover:bg-gradient-to-r hover:from-amber-400 hover:to-green-500 hover:text-black font-bold py-3 px-5 rounded-lg text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fade-in-up animation-delay-600"
            >
              <span class="flex items-center">
                Tìm hiểu thêm
                <!-- Arrow Right (default) -->
                <svg class="ml-2 w-5 h-5 group-hover:hidden transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
                <!-- Check Icon (on hover) -->
                <svg class="ml-2 w-5 h-5 hidden group-hover:block transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="min-h-screen bg-gradient-to-br from-gray-50 to-white py-32">
      <div class="w-full px-12 sm:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-20 scroll-animate" data-animation="fade-in-up">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 pt-2">
              Về chúng tôi
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-amber-400 to-green-500 mx-auto mb-8"></div>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              UTEERS là cộng đồng sinh viên Đại học Ngoại ngữ - ĐHQGHN, 
              nơi kết nối những trái tim nhiệt huyết với tinh thần tình nguyện.
            </p>
          </div>
          
          <!-- Content Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 pb-1 pt-2">
            <!-- Mission -->
            <div class="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/90 card-gradient-border card-gradient-border-amber scroll-animate" data-animation="fade-in-up" data-delay="100">
              <div class="w-20 h-20 bg-gradient-to-br from-amber-400 via-amber-500 to-green-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6 group-hover:text-amber-600 transition-colors duration-300">Sứ mệnh</h3>
              <p class="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                Lan tỏa tinh thần tình nguyện, kết nối cộng đồng và tạo ra những giá trị tích cực cho xã hội.
              </p>
            </div>
            
            <!-- Vision -->
            <div class="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/90 card-gradient-border card-gradient-border-green scroll-animate" data-animation="fade-in-up" data-delay="200">
              <div class="w-20 h-20 bg-gradient-to-br from-green-400 via-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6 group-hover:text-green-600 transition-colors duration-300">Tầm nhìn</h3>
              <p class="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                Trở thành cộng đồng tình nguyện hàng đầu, nơi mọi người cùng góp sức xây dựng xã hội tốt đẹp hơn.
              </p>
            </div>
            
            <!-- Values -->
            <div class="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/90 card-gradient-border card-gradient-border-purple md:col-span-2 lg:col-span-1 scroll-animate" data-animation="fade-in-up" data-delay="300">
              <div class="w-20 h-20 bg-gradient-to-br from-purple-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-600 transition-colors duration-300">Giá trị</h3>
              <p class="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                Đoàn kết, chia sẻ, tôn trọng và cam kết phục vụ cộng đồng với trái tim chân thành.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Decorative Divider -->
    <div class="relative py-8 bg-gradient-to-br from-gray-50 to-white">
      <div class="w-full px-12 sm:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <div class="max-w-3xl mx-auto">
          <!-- Main Divider Line -->
          <div class="relative flex items-center justify-center">
            <!-- Left Line -->
            <div class="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-amber-400"></div>
            
            <!-- Center Decoration -->
            <div class="relative mx-6">
              <!-- Background Circle -->
              <div class="w-12 h-12 bg-gradient-to-br from-amber-400 via-amber-500 to-green-500 rounded-full flex items-center justify-center shadow-md">
                <!-- Inner Circle -->
                <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <!-- Icon -->
                  <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
              </div>
              
              <!-- Decorative Dots -->
              <div class="absolute -top-1 -left-1 w-3 h-3 bg-amber-300 rounded-full opacity-60 animate-pulse"></div>
              <div class="absolute -bottom-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-70 animate-pulse" style="animation-delay: 0.5s"></div>
              <div class="absolute top-1/2 -left-4 w-1.5 h-1.5 bg-amber-200 rounded-full opacity-50 animate-pulse" style="animation-delay: 1s"></div>
              <div class="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-green-300 rounded-full opacity-60 animate-pulse" style="animation-delay: 1.5s"></div>
            </div>
            
            <!-- Right Line -->
            <div class="flex-1 h-px bg-gradient-to-l from-transparent via-green-300 to-green-400"></div>
          </div>
          
          <!-- Subtitle Text -->
          <p class="text-center text-gray-600 mt-6 text-lg font-medium italic">
            Cùng nhau tạo nên sự khác biệt
          </p>
        </div>
      </div>
    </div>

    <!-- Join Us Section -->
    <section id="join-us" class="min-h-screen bg-gradient-to-br from-white to-gray-50 py-32">
      <div class="w-full px-12 sm:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <div class="max-w-7xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-20 scroll-animate" data-animation="fade-in-up">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tham gia với chúng tôi
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-amber-400 to-green-500 mx-auto mb-8"></div>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Hãy trở thành một phần của cộng đồng và cùng tạo nên những thay đổi tích cực
            </p>
          </div>

          <!-- Content Cards -->
          <div class="space-y-24">
            <!-- First Card - Connect to Opportunities -->
            <div class="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all duration-500 border border-white/50 hover:-translate-y-1 hover:bg-white/90 card-gradient-border card-gradient-border-amber overflow-hidden scroll-animate" data-animation="fade-in-left" data-delay="200">
              <!-- Gradient Background Effect -->
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="absolute -left-20 -right-20 top-0 bottom-0 bg-gradient-to-r from-amber-50/30 via-amber-100/20 to-green-50/30 transform -skew-x-12"></div>
                <div class="absolute -left-32 -right-32 top-1/4 bottom-1/4 bg-gradient-to-r from-transparent via-amber-200/10 to-transparent transform skew-x-6"></div>
              </div>
              
              <div class="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <!-- Image Column -->
                <div class="order-2 lg:order-1">
                  <div class="rounded-2xl overflow-hidden shadow-lg group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-500">
                    <img 
                      :src="imgHome1" 
                      alt="Kết nối cơ hội" 
                      class="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <!-- Content Column -->
                <div class="order-1 lg:order-2">
                  <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-amber-600 transition-colors duration-300">
                    Kết nối bạn tới những cơ hội tạo nên thay đổi
                  </h3>
                  <p class="text-lg text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300">
                    Uteers là nền tảng kết nối sinh viên ULIS với các cơ hội tình nguyện trong và ngoài trường. 
                    Chúng tôi tin rằng mỗi trải nghiệm thiện nguyện là một bước trưởng thành và lan tỏa giá trị 
                    tích cực đến cộng đồng.
                  </p>
                  <button 
                    @click="navigateToProjects"
                    class="group/btn bg-gradient-to-r from-amber-400 to-green-500 text-white font-semibold py-3 px-6 rounded-lg text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center"
                  >
                    Tìm hiểu ngay
                    <svg class="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Second Card - Partners -->
            <div class="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-500 border border-white/50 hover:-translate-y-1 hover:bg-white/90 card-gradient-border card-gradient-border-green overflow-hidden scroll-animate" data-animation="fade-in-right" data-delay="400">
              <!-- Gradient Background Effect -->
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="absolute -left-20 -right-20 top-0 bottom-0 bg-gradient-to-r from-green-50/30 via-green-100/20 to-blue-50/30 transform skew-x-12"></div>
                <div class="absolute -left-32 -right-32 top-1/4 bottom-1/4 bg-gradient-to-r from-transparent via-green-200/10 to-transparent transform -skew-x-6"></div>
              </div>
              
              <div class="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <!-- Content Column -->
                <div class="order-1">
                  <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-green-600 transition-colors duration-300">
                    Đối tác đồng hành
                  </h3>
                  <p class="text-lg text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300">
                    Uteers tự hào được đồng hành cùng các câu lạc bộ, tổ chức và đơn vị xã hội giàu tâm huyết 
                    trong việc lan tỏa tinh thần tình nguyện đến cộng đồng sinh viên ULIS.
                  </p>
                  <button 
                    @click="navigateToProjects"
                    class="group/btn bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center"
                  >
                    Tìm hiểu ngay
                    <svg class="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>
                
                <!-- Image Column -->
                <div class="order-2">
                  <div class="rounded-2xl overflow-hidden shadow-lg group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-500">
                    <img 
                      :src="imgHome2" 
                      alt="Đối tác đồng hành" 
                      class="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
import bgHomeImage from '@/assets/bghome.jpg'
import ulisLogoImage from '@/assets/ulis-logo.png'
import imgHome1Image from '@/assets/imghome1.jpg'
import imgHome2Image from '@/assets/imghome2.jpg'

export default {
  name: 'HomePage',
  components: {
    Navbar
  },
  data() {
    return {
      bgHome: bgHomeImage,
      ulisLogo: ulisLogoImage,
      imgHome1: imgHome1Image,
      imgHome2: imgHome2Image
    }
  },
  mounted() {
    this.initScrollAnimations()
  },
  methods: {
    scrollToAbout() {
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        aboutSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    },
    navigateToProjects() {
      // Navigate to projects page
      this.$router.push('/projects')
    },
    initScrollAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target
            const animation = element.dataset.animation
            const delay = element.dataset.delay || 0
            
            setTimeout(() => {
              element.classList.add('animate-visible')
              switch(animation) {
                case 'fade-in-up':
                  element.classList.add('animate-fade-in-up-visible')
                  break
                case 'fade-in-left':
                  element.classList.add('animate-fade-in-left-visible')
                  break
                case 'fade-in-right':
                  element.classList.add('animate-fade-in-right-visible')
                  break
              }
            }, parseInt(delay))
          }
        })
      }, observerOptions)

      // Observe all scroll-animate elements
      document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el)
      })
    }
  }
}
</script>

<style scoped>
/* Ensure smooth scrolling and hide overflow */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 4rem;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
}

body {
  overflow-x: hidden !important;
  margin: 0;
  padding: 0;
}

/* Hero section specific styles */
#hero {
  width: 100vw;
  height: 100vh;
  left: 50%;
  transform: translateX(-50%);
  overflow-x: hidden;
}

/* Ensure no conflicts with global styles */
section {
  width: 100vw;
  margin: 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  overflow-x: hidden;
}

/* Override any inherited styles for about section */
#about {
  background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
  overflow-x: hidden;
}

/* Hide horizontal scrollbar for the entire component */
:deep(*) {
  overflow-x: hidden !important;
}

/* Ensure button hover effects work properly */
button {
  outline: none;
  border: none;
}

/* Custom thick border for CTA button */
.custom-border {
  border: 2px solid white;
  transition: border 0.3s ease;
}

.custom-border:hover {
  border: 2px solid transparent;
}

/* Card gradient borders */
.card-gradient-border {
  position: relative;
  overflow: hidden;
}

.card-gradient-border::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 1.5rem;
  padding: 2px;
  background: linear-gradient(135deg, transparent 45%, #f59e0b 50%, #10b981 55%, transparent 60%);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: xor;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  opacity: 0.6;
  transition: opacity 0.3s ease, padding 0.3s ease;
}

.card-gradient-border:hover::before {
  opacity: 1;
  padding: 3px;
}

/* Amber variant */
.card-gradient-border-amber::before {
  background: linear-gradient(135deg, transparent 40%, #f59e0b 50%, #10b981 60%, transparent 65%);
}

.card-gradient-border-amber:hover::before {
  background: linear-gradient(135deg, transparent 35%, #f59e0b 50%, #10b981 65%, transparent 70%);
}

/* Green variant */
.card-gradient-border-green::before {
  background: linear-gradient(135deg, transparent 40%, #10b981 50%, #3b82f6 60%, transparent 65%);
}

.card-gradient-border-green:hover::before {
  background: linear-gradient(135deg, transparent 35%, #10b981 50%, #3b82f6 65%, transparent 70%);
}

/* Purple variant */
.card-gradient-border-purple::before {
  background: linear-gradient(135deg, transparent 40%, #a855f7 50%, #ec4899 60%, transparent 65%);
}

.card-gradient-border-purple:hover::before {
  background: linear-gradient(135deg, transparent 35%, #a855f7 50%, #ec4899 65%, transparent 70%);
}

/* Initial animations for hero section */
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

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
  opacity: 0;
}

.animation-delay-400 {
  animation-delay: 0.4s;
  opacity: 0;
}

.animation-delay-600 {
  animation-delay: 0.6s;
  opacity: 0;
}

/* Scroll animations */
.scroll-animate {
  opacity: 0;
  transition: all 0.6s ease-out;
}

.scroll-animate.animate-visible {
  opacity: 1;
}

/* Fade in up animation */
.scroll-animate[data-animation="fade-in-up"] {
  transform: translateY(50px);
}

.scroll-animate[data-animation="fade-in-up"].animate-fade-in-up-visible {
  transform: translateY(0);
}

/* Fade in left animation */
.scroll-animate[data-animation="fade-in-left"] {
  transform: translateX(-50px);
}

.scroll-animate[data-animation="fade-in-left"].animate-fade-in-left-visible {
  transform: translateX(0);
}

/* Fade in right animation */
.scroll-animate[data-animation="fade-in-right"] {
  transform: translateX(50px);
}

.scroll-animate[data-animation="fade-in-right"].animate-fade-in-right-visible {
  transform: translateX(0);
}
</style>

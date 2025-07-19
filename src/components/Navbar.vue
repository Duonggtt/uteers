<template>
  <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-200" style="background: linear-gradient(to right, #fcd34d 0%, #fde68a 40%, #10b981 100%)">
    <div class="w-full px-12 sm:px-16 lg:px-24 xl:px-32 2xl:px-40">
      <div class="flex justify-between items-center h-16">
        <!-- Logo ULIS -->
        <div class="flex-shrink-0 flex items-center">
          <img 
            :src="ulisLogo" 
            alt="ULIS Logo" 
            class="h-10 w-10 object-contain"
          />
          <span class="ml-3 text-xl font-bold text-white">UTEERS</span>
        </div>
        
        <!-- Menu Items -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <router-link
              v-for="item in menuItems"
              :key="item.name"
              :to="item.path"
              :class="[
                'px-3 py-2 rounded-md text-base font-medium transition-all duration-200',
                isActiveRoute(item.path) 
                  ? 'text-black font-bold bg-white/30 border border-white/40' 
                  : 'text-black hover:text-black hover:bg-white/20'
              ]"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
        
        <!-- Search Bar -->
        <div class="hidden md:block flex-shrink-0">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none z-10">
              <svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Tìm kiếm..."
              class="block w-80 pl-12 pr-4 py-3 border-2 border-white/30 rounded-xl leading-5 bg-white/90 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-white text-sm shadow-lg"
              @keyup.enter="handleSearch"
            />
          </div>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="bg-white/20 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <svg class="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Menu -->
      <div v-show="mobileMenuOpen" class="md:hidden" style="background: linear-gradient(to right, #fcd34d 0%, #fde68a 40%, #10b981 100%)">
        <router-link
          v-for="item in menuItems"
          :key="item.name"
          :to="item.path"
          :class="[
            'block px-3 py-2 text-base font-medium transition-colors duration-200',
            isActiveRoute(item.path)
              ? 'text-black font-bold bg-white/30'
              : 'text-black hover:text-black hover:bg-white/20'
          ]"
          @click="mobileMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
        
        <!-- Mobile Search -->
        <div class="px-3 py-2">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-7 pointer-events-none z-10">
              <svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Tìm kiếm..."
              class="block w-full pl-12 pr-4 py-3 border-2 border-white/30 rounded-xl leading-5 bg-white/90 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-white text-sm shadow-lg"
              @keyup.enter="handleSearch"
            />
          </div>
        </div>
    </div>
  </nav>
</template>

<script>
import ulisLogo from '@/assets/ulis-logo.png'

export default {
  name: 'Navbar',
  data() {
    return {
      ulisLogo: ulisLogo,
      searchQuery: '',
      mobileMenuOpen: false,
      menuItems: [
        { name: 'Trang chủ', path: '/home' },
        { name: 'Dự án', path: '/projects' },
        { name: 'Giấy chứng nhận', path: '/certificates' },
        { name: 'Diễn đàn', path: '/forum' },
        { name: 'Hồ sơ', path: '/profile' }
      ]
    }
  },
  methods: {
    isActiveRoute(path) {
      return this.$route.path === path
    },
    handleSearch() {
      if (this.searchQuery.trim()) {
        // TODO: Implement search functionality
        console.log('Tìm kiếm:', this.searchQuery)
        this.mobileMenuOpen = false
      }
    }
  }
}
</script>

<style scoped>
/* Ensure navbar stays on top */
nav {
  backdrop-filter: blur(10px);
}

/* Remove hover effect from navbar itself */
nav:hover {
  background: inherit;
}

/* Smooth transitions for menu items only */
.router-link-active {
  color: #000000 !important;
  font-weight: bold !important;
  background-color: rgba(255, 255, 255, 0.3) !important;
  border: 1px solid rgba(255, 255, 255, 0.4) !important;
}

/* Menu item hover effects only */
router-link:hover {
  background-color: rgba(255, 255, 255, 0.2) !important;
  color: #000000 !important;
}
</style>

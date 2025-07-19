<template>
  <div class="h-screen w-screen bg-gray-100 flex items-center justify-center relative overflow-hidden fixed inset-0">
    <!-- Background với ảnh từ URL -->
    <div 
      v-if="!backgroundError"
      class="absolute -inset-4 w-screen h-screen bg-cover bg-center bg-no-repeat blur-sm"
      :style="`background-image: url('${backgroundImage}'); background-size: cover; background-position: center; transform: scale(1.2);`"
    ></div>
    
    <!-- Fallback background nếu ảnh lỗi -->
    <div 
      v-else
      class="absolute -inset-4 w-screen h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50"
    ></div>
    
    <!-- Overlay để làm sáng hơn ảnh nền -->
    <div class="absolute -inset-4 w-screen h-screen bg-black/5"></div>
    
    <!-- Ảnh ẩn để test load -->
    <img 
      :src="backgroundImage" 
      @error="backgroundError = true" 
      @load="backgroundError = false"
      class="hidden"
      alt="Background"
    />
    
    <!-- Login Card -->
        <!-- Login Card -->
    <div 
      class="relative z-10 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 w-full max-w-md mx-4 transform transition-all duration-300 ease-out"
      :class="{ 'animate-fade-in-up': isVisible }"
    >
      <!-- Logo ULIS -->
      <div class="text-center mb-6">
        <img 
          :src="ulisLogo" 
          alt="ULIS Logo" 
          class="w-36 h-36 mx-auto mb-4 object-contain"
          @error="handleImageError"
        />
        <!-- Fallback nếu ảnh lỗi - sử dụng text -->
        <div 
          v-if="logoError"
          class="w-36 h-36 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center"
        >
          <span class="text-white font-bold text-3xl">ULIS</span>
        </div>
      </div>
      
      <!-- Welcome Text -->
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold text-gray-900 mb-2">WELCOME TO UTEERS</h1>
        <p class="text-gray-700 text-sm">SIGN IN TO CONTINUE</p>
      </div>
      
      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- Email Input -->
        <div>
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 outline-none bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
            required
          />
        </div>
        
        <!-- Password Input -->
        <div class="relative">
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Enter your password"
            class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 outline-none pr-12 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
            required
          />
          <button
            type="button"
            @click="togglePassword"
            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
            </svg>
          </button>
        </div>
        
        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
          :disabled="isLoading"
        >
          <span v-if="!isLoading">LOGIN</span>
          <div v-else class="flex items-center justify-center">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading...
          </div>
        </button>
      </form>
      
      <!-- Forgot Password -->
      <div class="text-center mt-6">
        <span class="text-gray-600 text-sm">Forgot your password? </span>
        <a 
          href="#" 
          @click.prevent="handleForgotPassword"
          class="text-blue-500 text-sm italic hover:text-blue-700 transition-colors duration-200"
        >
          Password retrieval
        </a>
      </div>
    </div>
    
    <!-- Toast Notification -->
    <div 
      v-if="toast.show"
      class="fixed top-5 right-5 z-50 px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out"
      :class="{
        'bg-green-500 text-white': toast.type === 'success',
        'bg-red-500 text-white': toast.type === 'error',
        'bg-blue-500 text-white': toast.type === 'info'
      }"
    >
      <div class="flex items-center space-x-3">
        <!-- Success Icon -->
        <svg v-if="toast.type === 'success'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <!-- Error Icon -->
        <svg v-else-if="toast.type === 'error'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        <!-- Info Icon -->
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span class="font-medium">{{ toast.message }}</span>
        <button @click="toast.show = false" class="ml-2 text-white hover:text-gray-200">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundImage from '@/assets/bg.jpg'
import ulisLogo from '@/assets/ulis-logo.png'

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      isLoading: false,
      isVisible: false,
      logoError: false,
      backgroundImage: backgroundImage,
      backgroundError: false,
      ulisLogo: ulisLogo,
      // Toast notification
      toast: {
        show: false,
        message: '',
        type: 'success' // 'success' hoặc 'error'
      }
    }
  },
  mounted() {
    // Hiệu ứng fade in đơn giản và mượt
    setTimeout(() => {
      this.isVisible = true
    }, 200)
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword
    },
    async handleLogin() {
      // Kiểm tra xem có nhập đầy đủ thông tin không
      if (!this.email || !this.password) {
        this.showToast('Vui lòng nhập đầy đủ email và mật khẩu!', 'error')
        return
      }
      
      this.isLoading = true
      
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Thông tin đăng nhập đúng
        const correctEmail = '21040111@vnu.edu.vn'
        const correctPassword = 'B1234567'
        
        // Kiểm tra thông tin đăng nhập
        if (this.email === correctEmail && this.password === correctPassword) {
          // Đăng nhập thành công
          this.showToast('Đăng nhập thành công! Chào mừng bạn quay trở lại!', 'success')
          
          // Sau 2 giây sẽ chuyển đến trang chủ (sẽ thiết kế sau)
          setTimeout(() => {
            // TODO: Chuyển đến trang chủ
            console.log('Chuyển đến trang chủ...')
            // this.$router.push('/dashboard') hoặc emit event
          }, 2000)
          
        } else if (this.email !== correctEmail && this.password !== correctPassword) {
          // Cả email và password đều sai
          this.showToast('Email và mật khẩu không đúng!', 'error')
        } else if (this.email !== correctEmail) {
          // Email sai
          this.showToast('Email không đúng!', 'error')
        } else {
          // Password sai
          this.showToast('Mật khẩu không đúng!', 'error')
        }
        
      } catch (error) {
        this.showToast('Có lỗi xảy ra! Vui lòng thử lại.', 'error')
      } finally {
        this.isLoading = false
      }
    },
    handleForgotPassword() {
      this.showToast('Chức năng lấy lại mật khẩu sẽ được phát triển sau!', 'info')
    },
    handleImageError() {
      this.logoError = true
    },
    showToast(message, type = 'success') {
      this.toast.message = message
      this.toast.type = type
      this.toast.show = true
      
      // Tự động ẩn toast sau 4 giây
      setTimeout(() => {
        this.toast.show = false
      }, 4000)
    }
  }
}
</script>

<style scoped>
/* Đảm bảo background full màn hình */
.absolute.-inset-4 {
  position: absolute !important;
  top: -1rem !important;
  left: -1rem !important;
  right: -1rem !important;
  bottom: -1rem !important;
  width: calc(100vw + 2rem) !important;
  height: calc(100vh + 2rem) !important;
  min-width: calc(100vw + 2rem) !important;
  min-height: calc(100vh + 2rem) !important;
}

/* Container chính full màn hình */
.h-screen.w-screen.fixed.inset-0 {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  overflow: hidden !important;
}

/* Animation fade-in-up mượt mà */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

/* Toast animation */
@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.fixed.top-5.right-5 {
  animation: slideInFromRight 0.3s ease-out;
}

/* Responsive adjustments for mobile */
@media (max-width: 768px) {
  .blur-sm {
    filter: blur(2px);
  }
  
  .absolute.-inset-4 {
    position: fixed !important;
    top: -2rem !important;
    left: -2rem !important;
    right: -2rem !important;
    bottom: -2rem !important;
    width: calc(100vw + 4rem) !important;
    height: calc(100vh + 4rem) !important;
    min-width: calc(100vw + 4rem) !important;
    min-height: calc(100vh + 4rem) !important;
    transform: scale(1.1) !important;
  }
}
</style>

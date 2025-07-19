<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
    <!-- Loading Screen -->
    <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div class="text-center">
        <div class="mb-8">
          <div class="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto flex items-center justify-center animate-bounce">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8V4a2 2 0 012 2v2z"/>
            </svg>
          </div>
        </div>
        <div class="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-4">
          UTEERS
        </div>
        <div class="text-gray-600 animate-pulse">
          Đang tải diễn đàn...
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
            Diễn Đàn UTEERS
          </h1>
          <p class="text-xl text-blue-100 max-w-2xl mx-auto animate-slide-in-up" style="animation-delay: 0.2s;">
            Nơi kết nối và chia sẻ kinh nghiệm tình nguyện
          </p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 class="text-xl font-bold text-gray-900 mb-6">Danh mục</h3>
              
              <nav class="space-y-2">
                <button 
                  @click="activeSection = 'announcements'"
                  :class="[
                    'w-full text-left px-4 py-3 rounded-lg transition-colors duration-200',
                    activeSection === 'announcements' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
                  ]"
                >
                  <div class="flex items-center">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
                    </svg>
                    Thông báo
                  </div>
                </button>
                
                <button 
                  @click="activeSection = 'discussions'"
                  :class="[
                    'w-full text-left px-4 py-3 rounded-lg transition-colors duration-200',
                    activeSection === 'discussions' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
                  ]"
                >
                  <div class="flex items-center">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8V4a2 2 0 012 2v2z"/>
                    </svg>
                    Thảo luận chung
                  </div>
                </button>
                
                <button 
                  @click="activeSection = 'experiences'"
                  :class="[
                    'w-full text-left px-4 py-3 rounded-lg transition-colors duration-200',
                    activeSection === 'experiences' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
                  ]"
                >
                  <div class="flex items-center">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                    Kinh nghiệm & Chia sẻ
                  </div>
                </button>
              </nav>
            </div>
          </div>

          <!-- Main Content -->
          <div class="lg:col-span-3">
            <!-- Announcements Section -->
            <div v-if="activeSection === 'announcements'" class="animate-fade-in">
              <div class="bg-white rounded-xl shadow-lg p-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Quy định diễn đàn</h2>
                
                <div class="space-y-6">
                  <div class="border-l-4 border-blue-500 pl-6">
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Mục đích</h3>
                    <p class="text-gray-600">
                      Diễn đàn UTEERS là nơi sinh viên trao đổi, chia sẻ kinh nghiệm về các hoạt động tình nguyện, 
                      kết nối cộng đồng và hỗ trợ lẫn nhau trong các dự án xã hội.
                    </p>
                  </div>
                  
                  <div class="border-l-4 border-green-500 pl-6">
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Quy định chung</h3>
                    <ul class="text-gray-600 space-y-2">
                      <li>• Tôn trọng ý kiến của các thành viên khác</li>
                      <li>• Không sử dụng ngôn ngữ thô tục, xúc phạm</li>
                      <li>• Không spam hoặc đăng nội dung không liên quan</li>
                      <li>• Bảo vệ thông tin cá nhân của bản thân và người khác</li>
                    </ul>
                  </div>
                  
                  <div class="border-l-4 border-amber-500 pl-6">
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Quy định đăng bài</h3>
                    <ul class="text-gray-600 space-y-2">
                      <li>• Tiêu đề phải rõ ràng, mô tả chính xác nội dung</li>
                      <li>• Nội dung phải tích cực, có ý nghĩa xây dựng</li>
                      <li>• Chia sẻ kinh nghiệm thực tế từ hoạt động tình nguyện</li>
                      <li>• Đăng đúng danh mục để dễ tìm kiếm</li>
                    </ul>
                  </div>
                  
                  <div class="border-l-4 border-red-500 pl-6">
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Xử lý vi phạm</h3>
                    <ul class="text-gray-600 space-y-2">
                      <li>• Lần đầu: Nhắc nhở và yêu cầu chỉnh sửa</li>
                      <li>• Lần hai: Cảnh báo chính thức</li>
                      <li>• Lần ba: Tạm khóa tài khoản 7 ngày</li>
                      <li>• Vi phạm nghiêm trọng: Khóa vĩnh viễn</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Discussions Section -->
            <div v-if="activeSection === 'discussions'" class="animate-fade-in space-y-6">
              <!-- Post Creation Form -->
              <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Tạo bài thảo luận mới</h3>
                <form @submit.prevent="createPost('discussions')">
                  <div class="mb-4">
                    <input 
                      v-model="newPost.title"
                      type="text" 
                      placeholder="Tiêu đề bài viết..."
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                      required
                    >
                  </div>
                  <div class="mb-4">
                    <textarea 
                      v-model="newPost.content"
                      placeholder="Nội dung thảo luận..."
                      rows="4"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900 bg-white"
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    :disabled="isPosting"
                    class="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center"
                  >
                    <svg v-if="isPosting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {{ isPosting ? 'Đang đăng...' : 'Đăng bài' }}
                  </button>
                </form>
              </div>

              <!-- Posts List -->
              <div class="space-y-4">
                <div 
                  v-for="post in discussions" 
                  :key="post.id"
                  class="bg-white rounded-xl shadow-lg p-6 transition-all duration-200 hover:shadow-xl"
                >
                  <div class="flex items-start justify-between mb-4">
                    <div class="flex items-center">
                      <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                        {{ post.author[0].toUpperCase() }}
                      </div>
                      <div>
                        <h4 class="font-semibold text-gray-800">{{ post.author }}</h4>
                        <p class="text-sm text-gray-500">{{ formatDate(post.createdAt) }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ post.title }}</h3>
                  <p class="text-gray-600 mb-4">{{ post.content }}</p>
                  
                  <div class="flex items-center">
                    <button 
                      @click="toggleLike(post)"
                      :class="[
                        'flex items-center px-3 py-1 rounded-full text-sm transition-colors duration-200',
                        post.isLiked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      ]"
                    >
                      <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      {{ post.likes }}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Experiences Section -->
            <div v-if="activeSection === 'experiences'" class="animate-fade-in space-y-6">
              <!-- Blog Post Creation Form -->
              <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Chia sẻ kinh nghiệm</h3>
                <form @submit.prevent="createPost('experiences')">
                  <div class="mb-4">
                    <input 
                      v-model="newPost.title"
                      type="text" 
                      placeholder="Tiêu đề bài chia sẻ..."
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white"
                      required
                    >
                  </div>
                  <div class="mb-4">
                    <textarea 
                      v-model="newPost.content"
                      placeholder="Chia sẻ kinh nghiệm, câu chuyện tình nguyện của bạn..."
                      rows="6"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-gray-900 bg-white"
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    :disabled="isPosting"
                    class="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center"
                  >
                    <svg v-if="isPosting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {{ isPosting ? 'Đang đăng...' : 'Chia sẻ' }}
                  </button>
                </form>
              </div>

              <!-- Experience Posts List -->
              <div class="space-y-6">
                <div 
                  v-for="post in experiences" 
                  :key="post.id"
                  class="bg-white rounded-xl shadow-lg p-6 transition-all duration-200 hover:shadow-xl"
                >
                  <div class="flex items-start justify-between mb-4">
                    <div class="flex items-center">
                      <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                        {{ post.author[0].toUpperCase() }}
                      </div>
                      <div>
                        <h4 class="font-semibold text-gray-800">{{ post.author }}</h4>
                        <p class="text-sm text-gray-500">{{ formatDate(post.createdAt) }}</p>
                      </div>
                    </div>
                    <span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      Kinh nghiệm
                    </span>
                  </div>
                  
                  <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ post.title }}</h3>
                  <p class="text-gray-600 mb-4 leading-relaxed">{{ post.content }}</p>
                  
                  <div class="flex items-center">
                    <button 
                      @click="toggleLike(post)"
                      :class="[
                        'flex items-center px-3 py-1 rounded-full text-sm transition-colors duration-200',
                        post.isLiked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      ]"
                    >
                      <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      {{ post.likes }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import ulisLogoImage from '@/assets/ulis-logo.png'

export default {
  name: 'ForumPage',
  components: {
    Navbar
  },
  data() {
    return {
      ulisLogo: ulisLogoImage,
      isLoading: true,
      activeSection: 'announcements',
      isPosting: false,
      newPost: {
        title: '',
        content: ''
      },
      discussions: [
        {
          id: 1,
          title: 'Chia sẻ kinh nghiệm tham gia dự án trồng cây',
          content: 'Mình vừa tham gia dự án trồng cây tại Ba Vì. Có ai đã từng tham gia chưa? Chia sẻ kinh nghiệm với mình nhé!',
          author: 'Nguyễn Văn A',
          createdAt: new Date('2024-01-15'),
          likes: 15,
          isLiked: false
        },
        {
          id: 2,
          title: 'Tìm đồng đội cho dự án dạy tiếng Anh',
          content: 'Mình đang tìm thêm người tham gia dự án dạy tiếng Anh miễn phí cho trẻ em vùng khó khăn. Ai có hứng thú thì inbox mình nhé!',
          author: 'Trần Thị B',
          createdAt: new Date('2024-01-14'),
          likes: 23,
          isLiked: false
        },
        {
          id: 3,
          title: 'Hỏi về quy trình đăng ký tham gia dự án',
          content: 'Cho mình hỏi quy trình đăng ký tham gia dự án tình nguyện như thế nào? Cần chuẩn bị gì không?',
          author: 'Lê Minh C',
          createdAt: new Date('2024-01-13'),
          likes: 8,
          isLiked: false
        }
      ],
      experiences: [
        {
          id: 4,
          title: 'Câu chuyện về chuyến thiện nguyện tại Sơn La',
          content: 'Chuyến đi 5 ngày tại Sơn La đã để lại trong mình rất nhiều kỷ niệm đẹp. Được gặp gỡ, trò chuyện với các em nhỏ vùng cao, mình cảm thấy mình đã nhận được nhiều hơn những gì mình đã cho. Các em rất thông minh và ham học hỏi. Hy vọng sẽ còn nhiều cơ hội quay lại đây...',
          author: 'Phạm Thị D',
          createdAt: new Date('2024-01-12'),
          likes: 45,
          isLiked: false
        },
        {
          id: 5,
          title: 'Kinh nghiệm tổ chức sự kiện từ thiện',
          content: 'Sau 3 năm tham gia và tổ chức các sự kiện từ thiện, mình muốn chia sẻ một số kinh nghiệm: 1) Lập kế hoạch chi tiết từ sớm, 2) Xây dựng đội ngũ tận tâm, 3) Tuyên truyền hiệu quả, 4) Quản lý tài chính minh bạch. Hy vọng sẽ hữu ích cho các bạn...',
          author: 'Hoàng Văn E',
          createdAt: new Date('2024-01-11'),
          likes: 67,
          isLiked: false
        }
      ]
    }
  },
  mounted() {
    // Load saved posts from localStorage
    this.loadSavedPosts()
    
    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false
    }, 1200)
  },
  methods: {
    loadSavedPosts() {
      const savedDiscussions = localStorage.getItem('forumDiscussions')
      const savedExperiences = localStorage.getItem('forumExperiences')
      
      if (savedDiscussions) {
        const parsed = JSON.parse(savedDiscussions)
        this.discussions = parsed.map(post => ({
          ...post,
          createdAt: new Date(post.createdAt)
        }))
      }
      
      if (savedExperiences) {
        const parsed = JSON.parse(savedExperiences)
        this.experiences = parsed.map(post => ({
          ...post,
          createdAt: new Date(post.createdAt)
        }))
      }
    },
    saveToLocalStorage() {
      localStorage.setItem('forumDiscussions', JSON.stringify(this.discussions))
      localStorage.setItem('forumExperiences', JSON.stringify(this.experiences))
    },
    createPost(type) {
      if (!this.newPost.title.trim() || !this.newPost.content.trim()) return
      
      this.isPosting = true
      
      // Simulate posting delay
      setTimeout(() => {
        const post = {
          id: Date.now(),
          title: this.newPost.title,
          content: this.newPost.content,
          author: 'Bạn',
          createdAt: new Date(),
          likes: 0,
          isLiked: false
        }
        
        if (type === 'discussions') {
          this.discussions.unshift(post)
        } else {
          this.experiences.unshift(post)
        }
        
        // Save to localStorage
        this.saveToLocalStorage()
        
        // Reset form
        this.newPost = { title: '', content: '' }
        this.isPosting = false
      }, 1000)
    },
    toggleLike(post) {
      post.isLiked = !post.isLiked
      post.likes += post.isLiked ? 1 : -1
      this.saveToLocalStorage()
    },
    formatDate(date) {
      const now = new Date()
      const diff = now - date
      const minutes = Math.floor(diff / 60000)
      const hours = Math.floor(diff / 3600000)
      const days = Math.floor(diff / 86400000)
      
      if (minutes < 1) return 'Vừa xong'
      if (minutes < 60) return `${minutes} phút trước`
      if (hours < 24) return `${hours} giờ trước`
      if (days < 7) return `${days} ngày trước`
      
      return date.toLocaleDateString('vi-VN')
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

/* Animation classes */
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-slide-in-up {
  animation: slideInUp 0.6s ease-out 0.2s both;
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
</style>

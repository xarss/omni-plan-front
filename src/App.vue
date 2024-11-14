<template>
  <button @click="toggleTheme"
    class="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none shadow-md">
    <span v-if="isDarkMode">🌙</span>
    <span v-else>☀️</span>
  </button>
  <div v-if="isLoading" class="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
    <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    <span class="sr-only">Loading...</span>
  </div>
  <div class="min-h-screen flex items-center justify-center dark:bg-gray-900">
    <div v-if="!formStructure" class="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 class="w-full text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">What do you want to plan?</h1>

      <textarea type="text" :v-model="prompt" @keydown="onPromptChange"
        class="w-full resize-none p-3 mb-4 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 dark:bg-gray-700 dark:text-gray-100"
        placeholder="Type your plan here..."></textarea>

      <button @click="getFormStructure()"
        class="w-full p-3 bg-indigo-500 dark:bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none">
        Ask
      </button>
    </div>

    <PlannerForm v-else @cancel="formCanceled()" :formStructure="formStructure" />
  </div>
</template>

<script>
import PlannerForm from './components/PlannerForm.vue';
import { sendFormData } from './controllers/apiController';

export default {
  name: "App",
  components: {
    PlannerForm
  },
  methods: {
    async getFormStructure() {
      this.isLoading = true
      try {
        this.formStructure = await sendFormData(this.prompt);
      } catch {
        // SHOW ERROR ON SCREEN
      } finally {
        this.isLoading = false
      }
      console.log(this.formStructure);
    },
    formCanceled() {
      this.formStructure = null;
    },
    onPromptChange(event) {
      if (event.key === "Enter") {
        if (!event.shiftKey) {
          this.getFormStructure();
          event.preventDefault();
          return;
        }
      }

      this.prompt = event.target.value;
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      this.applyTheme();
    },
    applyTheme() {
      document.documentElement.classList.toggle('dark', this.isDarkMode);
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }
  },
  data() {
    return {
      formStructure: null,
      prompt: "",
      isDarkMode: false,
      isLoading: false
    }
  },
  mounted() {
    this.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.applyTheme();
  },
  created() {
    // Load theme preference from local storage if available
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      this.isDarkMode = storedTheme === 'dark';
      this.applyTheme();
    }
  }
};
</script>
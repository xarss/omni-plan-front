<template>
  <div class="min-h-screen flex items-center justify-center">
      <div v-if="!formStructure" class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 class="w-full text-2xl font-bold text-gray-800 mb-4">What do you want to plan?</h1>
    
        <input type="text"
          v-model="prompt"
          class="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          placeholder="Type your plan here...">
    
        <button @click="getFormStructure()"
          class="w-full p-3 bg-indigo-500 text-white rounded-md font-semibold hover:bg-indigo-600 focus:outline-none">
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
      this.formStructure = await sendFormData(this.prompt);
      console.log(this.formStructure);
    },
    formCanceled() {
      this.formStructure = null;
    }
  },
  data() {
    return {
      formStructure: null,
      prompt: ""
    }
  }
};
</script>
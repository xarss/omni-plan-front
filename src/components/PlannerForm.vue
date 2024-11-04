<template>
    <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1>{{ formStructure.title }}</h1>
        <FormInput v-for="input in formStructure.inputs" :key="input.id" :ref="input.id" :input="input" />
        <div class="flex space-x-4">
            <button @click="cancelForm" class="w-1/4 p-3 bg-gray-500 text-white rounded-md hover:bg-gray-600">Cancel</button>
            <button @click="confirmForm" class="w-1/3 p-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">Generate</button>
        </div>

    </div>
</template>

<script>
import FormInput from './FormInput.vue';

export default {
    name: "PlannerForm",
    props: ["formStructure"],
    components: {
        FormInput
    },
    methods: {
        cancelForm() {
            this.$emit("cancel")
        },
        async confirmForm() {
            alert("Form confirmed")
        }
    }
}
</script>
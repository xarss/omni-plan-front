<template>
    <div class="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg shadow-lg mt-10 mb-10">
        <h1 class="max-w font-bold m-2 mb-4 flex items-center justify-center text-xl font-mono">{{ formStructure.title }}</h1>
        <component v-for="input in formStructure.inputs" :is="getComponentName(input.type)" :key="input.id" :ref="input.id" :input="input" />
        <div class="flex space-x-4">
            <button @click="cancelForm" class="w-1/4 p-3 bg-gray-500 text-white dark:text-gray-200  rounded-md hover:bg-gray-600">Cancel</button>
            <button @click="confirmForm" class="w-1/3 p-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">Generate</button>
        </div>

    </div>
</template>

<script>
import CheckboxInput from './inputs/CheckboxInput.vue';
import DateInput from './inputs/DateInput.vue';
import SelectInput from './inputs/SelectInput.vue';
import TextAreaInput from './inputs/TextAreaInput.vue';
import TextInput from './inputs/TextInput.vue';

export default {
    name: "PlannerForm",
    props: ["formStructure"],
    components: {
        TextInput,
        TextAreaInput,
        CheckboxInput,
        DateInput,
        SelectInput
    },
    methods: {
        cancelForm() {
            this.$emit("cancel")
        },
        async confirmForm() {
            alert("Form confirmed")
        },
        getComponentName(type) {
            return {
                "text": TextInput,
                "textarea": TextAreaInput,
                "checkbox": CheckboxInput,
                "date": DateInput,
                "select": SelectInput
            }[type]
        }
    }
}
</script>
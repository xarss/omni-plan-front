<template>
    <label class="block text-gray-700 dark:text-gray-200  font-medium mb-2">{{ input.question }}</label>
    <input type="text" :id="`inp_${input.id}`" class="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-700">
</template>

<script>
export default {
    props: ["input"],
    name: "TextInput"
}
</script>
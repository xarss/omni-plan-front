<template>
    <label class="flex items-center space-x-2 text-gray-700 dark:text-gray-200 font-medium mb-2">
        <input type="checkbox" :id="`inp_${input.id}`"
            class="form-checkbox h-5 w-5 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 dark:bg-gray-700 dark:border-gray-700" />
        <span>{{ input.question }}</span>
    </label>

</template>

<script>
export default {
    props: ["input"],
    name: "CheckboxInput"
}
</script>
<template>
    <label class="block text-gray-700 font-medium mb-2">{{ input.question }}</label>
    <input :type="input.inputType" :id="`inp_${input.id}`" class="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-indigo-500">
</template>

<script>
export default {
    props: ["input"],
    name: "FormInput"
}
</script>
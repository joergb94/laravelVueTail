<script setup>
import { computed } from 'vue';
const props = defineProps({
    message: {
        type: String,
    },
});
const message = computed(() => props.message);
</script>
<template>
    <div v-if="message">
        <FontAwesomeIcon :icon="['fas', 'xmark-circle']" class="ml-1 mr-2 text-red-600" /><small class="text-red-500">{{ message }}</small>
    </div>
</template>

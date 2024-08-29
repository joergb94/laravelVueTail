<script setup>
import { computed, ref, toRefs } from "vue";
import { watch } from "vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ErrorMessageComponent from "./ErrorMessageComponent.vue";

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: "text",
    },
    required: {
        type: Boolean,
        required: false,
    },
    icon: {
        type: String,
        default: "",
    },
    placeholder: {
        type: String,
        default: "",
    },
    error: String,
    label: String,
    readonly: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    onlyValue: {
        type: Boolean,
        default: false,
    },
    showOnlyValue: {
        type: Boolean,
        default: false,
    },
    required:{
        type: Boolean,
        default: false,
    }
});

const { modelValue, error } = toRefs(props);

const value = ref(modelValue.value);

watch(modelValue, (newVal) => {
    value.value = newVal;
});

const emit = defineEmits(["update:modelValue"]);
watch(value, (newVal) => {
    emit("update:modelValue", newVal);
});

const placeholder = computed(() => {
    return props.placeholder || props.label;
});
</script>
<template>
    <div  v-if="showOnlyValue">
        <label class="text-xs text-600">{{ label }}</label>
        <div class="p-inputgroup flex-1">
            <div class="borderJustString flex-1">
                {{ value || '.' }}
            </div>
        </div>
    </div>
    <div  class="mb-4" v-else>
        <span v-if="required" class="pr-1 text-red-600">*</span>
        <label class="text-xs text-600">{{ label }}</label>
        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
                <FontAwesomeIcon :icon="icon" class="mr-1 text-primary-700" />
            </span>
            <InputText
                v-model="value"
                :disabled="disabled"
                :type="type"
                class="p-inputtext-sm font-bold"
                :class="{ 'p-invalid': error }"
                :placeholder="placeholder"
                :readonly="readonly"
            />
            <input
                :disabled="disabled"
                :type="type"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" 
                :class="{ 'p-invalid': error }"
                :placeholder="placeholder"
                :readonly="readonly"
                v-model="value" >
        </div>
        
        <ErrorMessageComponent :message="error"></ErrorMessageComponent>
    </div>
</template>
<style>
input:read-only {
    background-color: #f2f2f2;
}

input::placeholder {
    color: #acb1b6;
    font-weight: normal;
}

.borderJustString {
    font-weight: 600;
    border-bottom: thin solid #add1ed;
}
</style>

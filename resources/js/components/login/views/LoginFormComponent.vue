<script setup>
import { useStore } from 'vuex';
import { useForm, useField } from "vee-validate";
import loginShapeSchema from "@/components/login/store/login-validate";
import { ref, watch } from 'vue';

const dispatch = useStore().dispatch;
const getters = useStore().getters;
const moduleName ='storeLogin';
const showLoading = ref(false);

const { handleSubmit, errors, setValues } = useForm({
    validationSchema: loginShapeSchema,
    initialValues: getters[`${moduleName}/getInitialValues`],
});

const { value: email } = useField("email");
const { value: password } = useField("password");

watch(() => getters[`${moduleName}/getShowLoading`],(show) => {showLoading.value = show;});

const onSubmit = handleSubmit(async (data) => {
    const action = 'signInRequest';
    dispatch(`${moduleName}/moduleRequest`, { action, params: data, toast });
});
</script>

<template>
   <div class="container mx-auto">
    <div class="flex justify-center">
        <div class="w-full max-w-md">
            <div class="bg-white shadow-md rounded px-8 py-6">
                <div class="text-lg font-semibold mb-4">Login</div>

                <div class="mb-4">
                    <form method="POST" action="login">
    
                        <input-component
                                    :icon="'fa-solid fa-user'"
                                    v-model="email"
                                    label="Usuario"
                                    :placeholder="'Usuario'"
                                    :error="errors.email"
                                    required
                         />

                        <div class="mb-4">
                            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                            <input id="password" type="password" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 @error('password') border-red-500 @enderror" name="password" required autocomplete="current-password">


                        </div>

                        <div class="flex items-center mb-4">
                            <input class="form-check-input" type="checkbox" name="remember" id="remember" >
                            <label class="ml-2 block text-sm text-gray-600" for="remember">Remember Me</label>
                        </div>

                        <div class="flex items-center justify-between">
                            <button type="submit" class="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md focus:outline-none focus:ring focus:ring-blue-200">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<template>
    <ps-modal ref="psmodal" maxWidth="450px" line="hidden" :isClickOut='false' theme=" px-6 py-7 rounded-lg shadow-xl" class=' z-20'>
        <template #title>
            <ps-icon @click="close()" name="close" class="text-sm text-feSecondary-400 ms-auto my-auto focus:shadow-none hover:text-purple-500 flex justify-end"  />
            <div class="flex flex-col text-center justify-center items-center text-feAchromatic-300">
                <ps-icon class="flex-grow-0" name="alert-triangle" w="86" h="86" />
                <ps-label class="font-medium text-xl lg:text-2xl mt-3"> {{title}} </ps-label>
            </div>
        </template>
        <template #body>
            <div class="w-full text-center mt-4">
                <ps-label class="font-light text-sm lg:text-base"> {{message}} </ps-label>
            </div>
        </template>
        <template #footer>
            <div class=" flex justify-center mt-6">
                <div class="flex-grow-0">
                    <ps-button rounded="rounded" @click="actionClicked()" textSize="text-sm" class="" colors="bg-feError-500 text-feAchromatic-50"  hover="hover:outline-none hover:ring hover:ring-feError-100" focus="focus:outline-none focus:ring focus:ring-feError-300" > {{okButton}} </ps-button>
                </div>

            </div>
        </template>
    </ps-modal>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import PsModal from '../modals/PsModal.vue';
import PsLabel from '../label/PsLabel.vue';
import PsButton from '../buttons/PsButton.vue';
import { trans } from 'laravel-vue-i18n';
import PsIcon from "../icons/PsIcon.vue";

export default defineComponent({
    components : {
        PsModal,
        PsLabel,
        PsButton,
        PsIcon
    },
    setup() {
        const psmodal = ref();
        const title = ref(trans('ps_error_dialog__error'));
        const message = ref(trans('ps_error_dialog__error_message'));
        const okButton = ref(trans('ps_confirm_dialog__yes'));
        let okClicked: Function;

        function actionClicked() {
            psmodal.value.toggle(false);
            
            okClicked();
            
        }

        function openModal(
                titleString,
                messageString,
                okString,
                okClickedAction: Function, ) {
            title.value = titleString;
            message.value = messageString.toString();
            okButton.value = okString;
            psmodal.value.toggle(true);
            okClicked = okClickedAction;
        }

        function close() {
            psmodal.value.toggle(false);
        }

        return {
            psmodal,
            title,
            message,
            openModal,
            actionClicked,
            okButton,
            close
        }
    },
})
</script>

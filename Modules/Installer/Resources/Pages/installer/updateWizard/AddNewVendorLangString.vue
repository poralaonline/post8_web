<template>
    <div>
        <UpdaterLayout title="installer_messages.updater.addNewVendorLangString.title">
            <template v-slot:container>
                <p class="paragraph text-center">
                    {{ $t('installer_messages.updater.addNewVendorLangString.message2') }}
                </p>

                <!-- <div class="" style="margin-bottom: 5px">
                    <form action="{{ route('NextLaravelUpdater::addNewMobileLangString') }}" enctype="multipart/form-data"
                        method="post" style="display: flex; justify-content: space-between;">
                        <div class="">
                            <label for="">{{ $t('import_mobile_lang_csv_zip_file') }}</label>
                            <input type="file" name="csvFileZip">
                        </div>
                        <div class="buttons">
                            <button class="button" style="font-size:12px;">{{ $t('import') }}</button>
                        </div>
                    </form>
                </div> -->

                <div class="buttons">
                    <ps-button @click="toBuilderZipFile()" class="button" type="reset" padding="px-7 py-2" rounded="rounded"
                        hover="">{{ $t('btn_update') }}</ps-button>
                </div>
            </template>
        </UpdaterLayout>

        <ps-error-dialog ref="ps_error_dialog" />
        <ps-success-dialog ref="ps_success_dialog" />
        <ps-loading-circle-dialog ref="ps_loading_circle_dialog" />

    </div>
</template>

<script>
import { defineComponent, computed, onMounted, onUnmounted, ref } from "vue";
import UpdaterLayout from '@/Layouts/UpdaterLayout.vue';
import PsButton from "@/Components/Core/Buttons/PsButton.vue";
import PsLoadingCircleDialog from '@/Components/Core/Dialog/PsLoadingCircleDialog.vue';
import { Link } from '@inertiajs/vue3';
import { trans } from 'laravel-vue-i18n';
import { router } from '@inertiajs/vue3';
import PsErrorDialog from '@/Components/Core/Dialog/PsErrorDialog.vue';
import PsSuccessDialog from '@/Components/Core/Dialog/PsSuccessDialog.vue';
import { usePage } from '@inertiajs/vue3'

export default defineComponent({
    components: {
        UpdaterLayout,
        Link,
        PsButton,
        PsLoadingCircleDialog,
        PsErrorDialog,
        PsSuccessDialog,
    },
    setup(props) {

        const ps_loading_circle_dialog = ref();
        const ps_error_dialog = ref();
        const ps_success_dialog = ref();
        const isGoNext = ref(0);

        let go_next = usePage().props.logMessages

        if(go_next=='vendor_lang_sync_success'){
            router.get(route("NextLaravelUpdater::builderTableField"));
        }



        function toBuilderZipFile() {
            router.post(route("NextLaravelUpdater::addNewVendorLangString"), {}, {
                onBefore: () => {

                    ps_loading_circle_dialog.value.openModal(trans('core__be_importing_title2_be'),trans('core__be_importing_note2_mb'));
                },
                onSuccess: (res) => {
                    if(usePage().props.logMessages == 'vendor_lang_sync_success'){
                        router.get(route("NextLaravelUpdater::builderTableField"));
                    }
                },
                onError: (errors) => {
                    ps_loading_circle_dialog.value.closeModal();
                    ps_error_dialog.value.openModal(trans('ps_error_dialog__error'), trans(errors.message), 'OK');
                },
            });
        }

        // onMounted(() => {
        //     var loading = document. getElementById("home_loading__container");
        //     loading.style.display = "none";
        // });

        return {
            toBuilderZipFile,
            ps_loading_circle_dialog,
            ps_error_dialog,
            isGoNext,
            ps_success_dialog,
            go_next
        }
    }
});
</script>

<style lang="scss" scoped></style>

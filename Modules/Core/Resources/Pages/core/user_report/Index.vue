<template>

    <Head :title="$t('user_report_module')" />
    <ps-layout>

        <!-- breadcrumb start -->
        <ps-breadcrumb-2 :items="breadcrumb" class="mb-5 sm:mb-6 lg:mb-8" />
        <!-- breadcrumb end -->

        <!-- data table start -->
        <ps-table2 :row="row" :search="search" :object="this.users" :colFilterOptions="colFilterOptions"
            :columns="columns" :sort_field="sort_field" :sort_order="sort_order"
            :globalSearchPlaceholder="$t('core__be_search')"
            @FilterOptionshandle="FilterOptionshandle" @handleSort="handleSorting" @handleSearch="handleSearching"
            @handleRow="handleRow" :searchable="showFilter"
            :eye_filter="false">

             <template #searchRight>

                <ps-text-button
                            v-if="showFilter"
                            @click="handleClearFilter"
                            class="flex flex-row text-sm items-center text-red-400"
                            padding="py-1 px-4"
                        >
                            <ps-icon
                                theme="dark:text-red-400"
                                name="cross"
                                class="me-3"
                            />
                            {{ $t('core__be_clear_filter') }}
                        </ps-text-button>
                        <ps-icon-button :colors="!showFilter ? '' : 'bg-primary-500 text-white dark:text-secondary-800'" focus="" padding="py-1 px-4"
                    hover="hover:bg-primary-500 hover:text-white" :border="!showFilter ? ' border border-secondary-200' : 'border border-primary-500'"
                    leftIcon="filter" @click="showFilter = !showFilter">{{ $t('core__be_filter') }}</ps-icon-button>

            </template>

            <template #Filter>

                <!-- role filter -->
                <ps-dropdown align="" class=" h-10">
                    <template #select>
                        <ps-dropdown-select :placeholder="$t('core__be_user_role')"
                            :selectedValue="(selected_role == '' || selected_role == 'all') ? '' : roles?.filter(option => option.id == selected_role)[0]?.name" />
                    </template>
                    <template #list>
                        <div class="rounded-md shadow-xs w-56 ">
                            <div class="pt-2 z-30  ">
                                <div class="w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"
                                    @click="handleRolefilter('all')">
                                    <ps-label class="text-gray-200 ms-2">{{$t('core__be_select_all')}}</ps-label>
                                </div>
                                <div v-for="role in roles" :key="role.id"
                                    class="w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"
                                    @click="handleRolefilter(role.id)">
                                    <ps-label class="ms-2" :class="role.id == selected_role ? ' font-bold' : ''">
                                        {{ role.name }} </ps-label>
                                </div>
                            </div>
                        </div>
                    </template>
                </ps-dropdown>

                <date-picker v-if="reRenderDate" @datepick="handleDatefilter" class="rounded shadow-sm pt-0.5 focus:outline-none focus:ring-1 focus:ring-primary-500" :class="(selected_date == null || selected_date == '') ? 'w-full' :'w-full'"
                v-model:value="selected_date" :range="true" :inline="false" :autoApply="false"/>

            </template>

            <!-- for csv file import start -->
            <template #searchLeft>
                <a :href="route('user_report.csv.export')" class="font-medium transition duration-150 ease-in-out px-2 py-1.75 ms-1 rounded text-primary-500 border border-primary-500 hover:outline-none hover:ring hover:ring-blue-100 focus:outline-none focus:ring focus:ring-blue-300 opacity-100 flex items-center"><ps-icon name="fileUpload" class="mx-0.5 font-semibold" />{{ $t('core__be_export_btn') }}</a>
            </template>
            <!-- for csv file import start -->

            <template #tableRow="rowProps">
                <div class="flex flex-row" v-if="rowProps.field == 'detail'">
                    <ps-text-button @click="handleDetail(rowProps.row.id)" >{{ $t('core__be_btn_detail') }}</ps-text-button>
                </div>
            </template>

        </ps-table2>
        <!-- data table end -->
    </ps-layout>
</template>

<script>
import { ref, defineComponent } from "vue";
import PsLayout from "@/Components/PsLayout.vue";
import { Head } from "@inertiajs/vue3";
import { router } from '@inertiajs/vue3';
import PsButton from "@/Components/Core/Buttons/PsButton.vue";
import PsTextButton from "@/Components/Core/Buttons/PsTextButton.vue";
import PsBannerIcon from "@/Components/Core/Banners/PsBannerIcon.vue";
import PsBreadcrumb2 from "@/Components/Core/Breadcrumbs/PsBreadcrumb2.vue";
import PsDangerDialog from "@/Components/Core/Dialog/PsDangerDialog.vue";
import PsIcon from "@/Components/Core/Icons/PsIcon.vue";
import PsDropdown from "@/Components/Core/Dropdown/PsDropdown.vue";
import PsDropdownSelect from "@/Components/Core/Dropdown/PsDropdownSelect.vue";
import Dropdown from "@/Components/Core/DropdownModal/Dropdown.vue";
import PsIconButton from "@/Components/Core/Buttons/PsIconButton.vue";
import PsLabel from "@/Components/Core/Label/PsLabel.vue";
import PsLink1 from '@/Components/Core/Link/PsLink1.vue';
import PsToggle from '@/Components/Core/Toggle/PsToggle.vue';
import PsTable2 from "@/Components/Core/Table/PsTable2.vue";
import PsRating from "@/Components/Core/Rating/PsRating.vue";
import DatePicker from "@/Components/Core/DateTime/DatePicker.vue";
import { trans } from 'laravel-vue-i18n';

export default defineComponent({
    name: "Index",
    components: {
        Head,
        PsButton,
        PsTextButton,
        PsBannerIcon,
        PsBreadcrumb2,
        PsDangerDialog,
        PsIcon,
        PsDropdown,
        PsDropdownSelect,
        Dropdown,
        PsIconButton,
        PsLabel,
        PsLink1,
        PsToggle,
        PsTable2,
        PsRating,
        DatePicker
    },
    layout: PsLayout,
    props: {
        status: Object,
        users: Object,
        roles: Object,
        customizeHeaders: Object,
        customizeDetails: Object,
        hideShowFieldForFilterArr: Object,
        showCoreAndCustomFieldArr: Object,
        selectedRole: { type: String, default: '' },
        authUser: Object,
        uis: Object,
        sort_field: {
            type: String,
            default: "",
        },
        sort_order: {
            type: String,
            default: 'desc',
        },
        search: String,
    },
    setup(props) {
        // For data table
        const showFilter = ref(false);
        const clearFilter = ref(false);
        const reRenderDate = ref(true);

        let visible = ref(false)

        let search = props.search ? ref(props.search) : ref('');
        let sort_field = props.sort_field ? ref(props.sort_field) : ref('');
        let sort_order = props.sort_order ? ref(props.sort_order) : ref('desc');
        let selected_role = props.selectedRole ? ref(props.selectedRole) : ref('');
        let selected_date = props.seleDateRole ? ref(props.selectedDate) : ref('');

        const colFilterOptions = ref();

        const columns = [
            {
                label: trans('core__be_user_name'),
                field: "name",
                type: "String"
            },
            {
                label: trans('core__be_user_email'),
                field: "email",
                type: 'String',
                sort: false
            },
            {
                label: trans('core__be_user_phone'),
                field: "user_phone",
                type: "String",
                sort: false
            },
            {
                label: trans('core__be_user_role'),
                field: "role_id@@name",
                type: "String",
            },
            {
                label: trans('core__be_registered_date'),
                field: "added_date",
                type: 'Timestamp',
            },
            {
                label: trans('core__be_detail_label'),
                field: "detail",
                type: 'Action',
                sort: false
            },
        ]

        function handleSorting(value) {
            sort_field.value = value.field
            sort_order.value = value.sort_order
            handleSearchingSorting()
        }

        function handleRolefilter(value) {
            selected_role.value = value
            let page = props.users.meta.current_page;
            handleSearchingSorting(page);
        }

        function handleDatefilter(value) {
            selected_date.value = value
            let page = props.users.meta.current_page;
            handleSearchingSorting(page);
        }

        function handleSearching(value) {
            search.value = value;
            let page = 1;
            handleSearchingSorting(page);
        }

        function handleRow(value) {
            handleSearchingSorting(1, value);
        }

        function handleClearFilter() {
            selected_date.value = '';
            selected_role.value = '';
            handleSearchingSorting();

            reRenderDate.value= false;
            setTimeout(() => {
                reRenderDate.value = true;
            }, 100);
        }

        function handleSearchingSorting(page = null, row = null) {
            router.get(route('user_report.index'),
                {
                    sort_field: sort_field.value,
                    sort_order: sort_order.value,
                    page: page ?? props.users.meta.current_page,
                    row: row ?? props.users.meta.per_page,
                    search: search.value,
                    role_filter: selected_role.value,
                    date_filter: selected_date.value,
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                })
        }

        return{
            showFilter,
            clearFilter,
            columns,
            colFilterOptions,
            visible,
            handleSorting,
            handleSearchingSorting,
            handleRolefilter,
            handleDatefilter,
            handleRow,
            handleSearching,
            selected_role,
            selected_date,
            handleClearFilter,
            reRenderDate
        }
    },
    methods: {
        handleDetail(id){
            this.$inertia.get(route('user_report.show',id));
        },
        FilterOptionshandle(value) {
            router.post(route('user_report.screenDisplayUiSetting.store'),
                {
                    value,
                    sort_field: this.sort_field,
                    sort_order: this.sort_order,
                    row: this.users.per_page,
                    search: this.search.value,
                    current_page: this.users.current_page
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                });
        },
    },
    created(){
        // this.columns = this.showCoreAndCustomFieldArr.map(column => {
        //     return {
        //         action: column.action,
        //         field: column.field,
        //         label: trans(column.label),
        //         type: column.type,
        //     };
        // });

        // this.colFilterOptions = this.hideShowFieldForFilterArr.map(columnFilterOption => {
        //     return {
        //         hidden: columnFilterOption.hidden,
        //         id: columnFilterOption.id,
        //         key: trans(columnFilterOption.key),
        //         key_id: columnFilterOption.key_id,
        //         label: trans(columnFilterOption.label),
        //         module_name: columnFilterOption.module_name
        //     };
        // });
    },
    computed: {
        breadcrumb() {
            return [
                {
                    label: trans('core__be_dashboard_label'),
                    url: route('admin.index')
                },
                {
                    label: trans('user_report_module'),
                    color: "text-primary-500"
                }
            ]
        }
    },
})
</script>

<template>
    <div v-if="favouriteitemProvider.favouriteItemList?.data != null">
        <div class="flex justify-between items-center sm:mt-8 mt-6">
            <ps-label-header-4> {{ $t("profile__favourite_posts") }} </ps-label-header-4>
            <ps-route-link :to="{ name: 'fe_favourite_items'}">
                <ps-button class="flex flex-row" padding="p-2 sm:px-4 sm:py-2" shadow="shadow-sm" rounded="rounded" hover=""
                    focus="" border="border border-feSecondary-200 dark:border-feSecondary-800"
                    colors="bg-feAchromatic-50 text-feSecondary-800 dark:bg-feSecondary-800 dark:text-feSecondary-200">
                    <ps-label class="hidden sm:inline">{{ $t("list_fe__view_all_label") }}</ps-label>
                    <ps-icon class="sm:ms-2 block rtl:hidden" textColor="dark:text-feSecondary-200" name="rightChervon"
                        h="24" w="24" />
                    <ps-icon class="sm:ms-2 hidden rtl:block" textColor="dark:text-feSecondary-200" name="leftChervon"
                        h="24" w="24" />
                </ps-button>
            </ps-route-link>
        </div>

        <div class="w-full sm:mt-6 mt-4 flex flex-col" :class="itemGrid">
            <div class="hidden xl:block" v-for="favouriteItem in favouriteitemProvider.favouriteItemList.data.slice(0, 3)" :key="favouriteItem.id">
                <profile-item-horizontal-item :item="favouriteItem" storeName="favourite"/>
            </div>

            <div class="hidden lg:block xl:hidden" v-for="favouriteItem in favouriteitemProvider.favouriteItemList.data.slice(0, 2)" :key="favouriteItem.id">
                <profile-item-horizontal-item :item="favouriteItem" storeName="favourite"/>
            </div>

            <div class="hidden md:block lg:hidden" v-for="favouriteItem in favouriteitemProvider.favouriteItemList.data.slice(0, 2)" :key="favouriteItem.id">
                <profile-item-horizontal-item :item="favouriteItem" storeName="favourite"/>
            </div>

            <div class="hidden sm:block md:hidden" v-for="favouriteItem in favouriteitemProvider.favouriteItemList.data.slice(0, 2)" :key="favouriteItem.id">
                <profile-item-horizontal-item :item="favouriteItem" storeName="favourite"/>
            </div>

            <div class="sm:hidden" v-for="favouriteItem in favouriteitemProvider.favouriteItemList.data.slice(0, 1)" :key="favouriteItem.id">
                <profile-item-horizontal-item :item="favouriteItem" storeName="favourite"/>
            </div>
        </div>
    </div>
    
    <div  v-else-if="favouriteitemProvider.favouriteItemList != null && favouriteitemProvider.loading.value ">
        <ps-label-header-4 class="sm:mt-8 mt-6"> {{ $t("profile__favourite_posts") }} </ps-label-header-4>
        <div class="w-full sm:mt-6 mt-4" :class="itemSkeletorGrid">
            <div class="w-full" v-for="i in itemSkeletorCount" :key="i">
                <item-horizontal-skeletor-item />
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';

import PsButton from '@template1/vendor/components/core/buttons/PsButton.vue';
import PsRouteLink from '@template1/vendor/components/core/link/PsRouteLink.vue';
import PsLabelHeader4 from '@template1/vendor/components/core/label/PsLabelHeader4.vue';
import PsIcon from '@template1/vendor/components/core/icons/PsIcon.vue';
import ProfileItemHorizontalItem from "@template1/vendor/components/modules/item/ProfileItemHorizontalItem.vue";
import ItemHorizontalSkeletorItem from "@template1/vendor/components/modules/item/ItemHorizontalSkeletorItem.vue";
import ItemHorizontalItem from "@template1/vendor/components/modules/item/ItemHorizontalItem.vue";

import { useFavouriteItemStoreState } from "@templateCore/store/modules/item/FavouriteItemStore";
import { usePsAppInfoStoreState } from '@templateCore/store/modules/appinfo/AppInfoStore';

const appInfoStore = usePsAppInfoStoreState();

const itemSkeletorGrid = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 gap-4";
const itemGrid = ref() ;
const itemSkeletorCount = ref();

itemGrid.value = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:gap-6 gap-4";
itemSkeletorCount.value = 3;

const favouriteitemProvider = useFavouriteItemStoreState('favourite');
const loginUserId = localStorage.loginUserId;

favouriteitemProvider.resetFavouriteItemList(loginUserId);

</script>
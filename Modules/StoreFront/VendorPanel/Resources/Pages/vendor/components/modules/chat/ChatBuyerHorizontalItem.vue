<template>
    <div class="cursor-pointer " @click="gotoDetail(chathistory)">

        <!-- Pscard -->
        <div :class="`h-[80px] sm:h-[100px] rounded-lg shadow-sm overflow-hidden mb-3 ${chathistory?.sellerUnreadCount > 0 ? 'bg-feAchromatic-200' : ''} dark:bg-feSecondary-800`">
           <div class="flex h-full">
                <div class="h-full w-[64px] sm:w-[100px] relative flex items-center">
                    <img alt="Placeholder" class="rounded-full bg-transparent h-16 w-16 sm:h-full sm:w-full border-2 border-feAchromatic-300"
                    v-lazy="{ src: $page.props.thumb1xUrl + '/' + chathistory.buyer.userCoverPhoto, loading: $page.props.sysImageUrl+'/loading_gif.gif', error: $page.props.sysImageUrl+'/default_photo.png' }">

                    <div class="absolute left-9 top-12 w-6 h-6 block sm:hidden">
                        <img alt="Placeholder"  class="rounded-full w-full h-full border-2 border-feAchromatic-100"
                        v-lazy=" { src: $page.props.thumb1xUrl + '/' + chathistory.item.defaultPhoto.imgPath, loading: $page.props.sysImageUrl+'/loading_gif.gif', error: $page.props.sysImageUrl+'/default_photo.png' }">
                    </div>
                </div>
                <div class="grow px-4 py-1">
                    <ps-label textColor="font-semibold text-fePrimary-500 text-xs sm:text-xl"> {{chathistory ? chathistory.buyer.userName : ''}} </ps-label>
                    <div class="flex justify-between items-center w-full">
                        <ps-label class="font-medium text-xs sm:text-lg lg:hidden block" v-if="chathistory">{{ chathistory.item.title.length > 30 ? chathistory.item.title.slice(0,20)+"......." : chathistory.item.title }}</ps-label>
                        <ps-label class="font-medium text-xs sm:text-lg lg:block hidden" v-if="chathistory">{{ chathistory.item.title }}</ps-label>
                        <ps-label class="text-xs">{{ chathistory.addedDateStr.includes('months') || chathistory.addedDateStr.includes('years')  ? moment(chathistory.addedDate).format(dateFormat) : chathistory.addedDateStr }}</ps-label>
                    </div>
                    <div class="flex justify-between w-full items-center">
                        <ps-label class="font-normal text-sm text-feAchromatic-400 lg:hidden block" textColor="text-feAchromatic-600" v-if="chathistory">{{ chathistory.latestChatMessage.length > 20 ? chathistory.latestChatMessage.slice(0,15)+"......" : chathistory.latestChatMessage}}</ps-label>
                        <ps-label class="font-normal text-sm text-feAchromatic-400 lg:block hidden" textColor="text-feAchromatic-600" v-if="chathistory">{{ chathistory.latestChatMessage }}</ps-label>
                        <span class="flex justify-center items-center font-normal text-sm rounded-full w-5 h-5  bg-fePrimary-600 text-feAchromatic-200" v-if="chathistory.sellerUnreadCount > 0">{{chathistory ? chathistory.sellerUnreadCount : '0'}}</span>
                        <div class="w-10 h-10 flex justify-center items-center" v-else>
                            <ps-icon name="done_all" class="text-feAchromatic-400" w="24" h="24"></ps-icon>
                        </div>
                    </div>
                </div>
                <div class="h-full hidden sm:block w-32">
                    <img alt="Placeholder" class="rounded w-full h-full"
                    v-lazy=" { src: $page.props.thumb1xUrl + '/' + chathistory.item.defaultPhoto.imgPath, loading: $page.props.sysImageUrl+'/loading_gif.gif', error: $page.props.sysImageUrl+'/default_photo.png' }">
                </div>
           </div>
        </div>
    </div>
</template>

<script lang="ts">
import PsCard from '@template1/vendor/components/core/card/PsCard.vue';
import PsIcon from '@template1/vendor/components/core/icons/PsIcon.vue';
import PsLabel from '@template1/vendor/components/core/label/PsLabel.vue';
// Providers
import { usePsAppInfoStoreState } from '@templateCore/store/modules/appinfo/AppInfoStore';
import AppInfoParameterHolder from '@templateCore/object/holder/AppInfoParameterHolder';
import { usePsValueHolderState } from '@templateCore/object/core/PsValueHolder';
import { PsValueStore } from "@templateCore/store/modules/core/PsValueStore";
import PsConst from '@templateCore/object/constant/ps_constants';
// Objects
import chathistory from '@templateCore/object/ChatHistory';
import { router } from '@inertiajs/vue3';

import format from 'number-format.js';
import { trans } from 'laravel-vue-i18n';
import { title } from 'process';
import moment from "moment";

export default {
    name : "ChatHorizontalItem",
    components : {
        PsIcon,
        PsLabel,
        PsCard
    },
    props : {
        chathistory : { type : chathistory } ,
        dateFormat: {type: String}
        // onClick : Function
    },
    setup(props) {
        // Inject Provider
        PsValueStore.psValueStore = usePsValueHolderState();
        const psValueStore = PsValueStore();
        const loginUserId = psValueStore.getLoginUserId();
        const appInfoParameterHolder = new AppInfoParameterHolder();
        appInfoParameterHolder.userId = loginUserId;
        const appInfoStore = usePsAppInfoStoreState();
        // appInfoStore.loadAppInfo(appInfoParameterHolder);
        function formatPrice(value) {
            if(value.toString() == '0') {
                return trans('item_price__free');
            }else {
                return format(appInfoStore.appInfo.data.mobileSetting.price_format, value);
            }
        }
        function gotoDetail(chathistory){
            router.get(route('fe_chat'),{
                    'buyer_user_id' : chathistory.buyerUserId,
                    'seller_user_id' : chathistory.sellerUserId,
                    'item_id' : chathistory.itemId,
                    'chat_flag' : PsConst.CHAT_FROM_BUYER.toString(),
                    });
        }

        function chatTimeHistory(chatDate){
            let date = chatDate.split(' ')[0];
            let time = chatDate.split(' ')[1];
            let currentDate = new Date().toISOString().split('T')[0];

            // remove second
            time = time.split(':');
            time.pop();
            time = time.join(':');

            // get yesterday
            let today = new Date();
            let yesterday = new Date(today);

            yesterday.setDate(yesterday.getDate() - 1);

            let DateOfYesterday = yesterday.toISOString().split('T')[0];

            switch(true){
                case date == currentDate : return time;
                case date == DateOfYesterday : return 'Yesterday';
                default: return moment(date).format(props.dateFormat);
            }
        }
        function containAny(str,substrings){
            for (var i = 0; i != substrings.length; i++) {
                var substring = substrings[i];
                if (str.includes(substring) != - 1) {
                    return substring;
                }
            }
            return null;
        }
        return {
            formatPrice,
            PsConst,
            appInfoStore,
            gotoDetail,
            chatTimeHistory,
            containAny,
            moment
        }
    }
}
</script>

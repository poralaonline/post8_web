<template>
    <div class="">
        <splide :options="options" :has-track="false">
            <splide-track>
                <splide-slide v-for="item in itemList" :key="item.id">
                    <vendor-horizontal-vendor :vendor="item"/>
                </splide-slide>
            </splide-track>

            <div :class="'splide__arrows splide__arrows--'+getDir()">
                <button
                    class="bg-feSecondary-50 dark:bg-feSecondary-800 w-10 h-10 rounded shadow-sm p-2 splide__arrow--prev"
                    type="button"
                    aria-label="Previous slide"
                    aria-controls="splide01-track"
                >
                    <ps-icon textColor="dark:text-feSecondary-200" name="arrowNarrowRight" h="23" w="23" viewBox="0 -3 9 20"/>
                </button>
                <button
                    class="bg-feSecondary-50 dark:bg-feSecondary-800 w-10 h-10 rounded shadow-sm p-2 splide__arrow--next"
                    type="button"
                    aria-label="Next slide"
                    aria-controls="splide01-track"
                >
                    <ps-icon textColor="dark:text-feSecondary-200" name="arrowNarrowRight" h="23" w="23" viewBox="0 -3 9 20"/>
                </button>
            </div>
        </splide>
    </div>
</template>

<script>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import VendorHorizontalVendor from '@template1/vendor/components/modules/item/VendorHorizontalVendor.vue';
import PsRouteLink from '@template1/vendor/components/core/link/PsRouteLink.vue';
import PsButton from '@template1/vendor/components/core/buttons/PsButton.vue';
import PsIcon from '@template1/vendor/components/core/icons/PsIcon.vue';
    export default {
        name: 'VendorHorizontalSwiper',
        components: {
            Splide,
            SplideSlide,
            SplideTrack,
            PsRouteLink,
            PsButton,
            PsIcon,
            VendorHorizontalVendor
        },
        props: {
            itemList: Object,
        },
        setup() {
            const options = {
                rewind: true,
                gap   : '1.5rem',
                perPage: 4,
                focus  : 0,
                omitEnd: true,
                pagination: false,
                direction: getDir(),
                breakpoints:{
                    1536:{
                        perPage: 4,
                        gap   : '1.5rem',
                    },
                    1280:{
                        perPage:4,
                        gap   : '.75rem',
                    },
                    1024:{
                        perPage:3,
                        gap   : '.75rem',
                    },
                    768:{
                        perPage:2,
                        gap   : '.75rem',
                    },
                    640:{
                        perPage:2,
                        gap   : '.5rem',
                    },
                    200:{
                        perPage:2
                    }
                }
            };
            const options2 = {
                rewind: true,
                gap   : '1.5rem',
                perPage: 4,
                focus  : 0,
                omitEnd: true,
            };
            const options3 = {
                rewind: true,
                gap   : '1.5rem',
                perPage: 4,
                focus  : 0,
                omitEnd: true,
            };
            const options4 = {
                rewind: true,
                gap   : '1.5rem',
                perPage: 4,
                focus  : 0,
                omitEnd: true,
            };
            function getDir(){
                if(localStorage.activeLanguage != null && localStorage.activeLanguage != undefined && localStorage.activeLanguage == 'ar'){
                    return 'rtl';
                }else{
                    return 'ltr';
                }
            }
            return { options, getDir };
        }
    }
</script>

<style scoped>
.splide__arrow--prev{
    position:absolute;
    top:50%;
    transform:translateY(-50%);
}
.splide__arrow--next{
    position:absolute;
    top:50%;
    transform:translateY(-50%);
}
/* right to left */
.splide__arrows--rtl .splide__arrow--prev{left:auto;right:-1em}
.splide__arrows--rtl .splide__arrow--next{right:auto;left:-1em}

/* left to right */
.splide__arrows--ltr .splide__arrow--prev{right:auto;left:-1em}
.splide__arrows--ltr .splide__arrow--next{left:auto;right:-1em}

    /* .splide{z-index: 0; padding: 0;}
@media (max-width: 640px) {

    .splide__arrow--next{
        left: calc(100% - 1.5rem);
    }
}
@media (max-width: 786px) {
    .splide__arrow--prev{
        left: -1rem;
    }
    .splide__arrow--next{
        right: -1rem;
    }
} */
</style>

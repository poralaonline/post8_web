<template>
  <div class="flex flex-wrap ">
    <div class="w-full text-center">
      <button
        class="tooltip transition-all duration-150 w-full" :class="tooltip" type="button">
        <slot name="content"></slot>
        <div :class="tooltiptext"
            class="absolute tooltiptext cursor-text flex flex-wrap w-screen">
            <div
                class="flex-grow-0">
                <div :class="tooltipWidth">
                    <div :class="[theme,border]" class="text-xs rounded px-4 py-2 right-0 bottom-full" >
                        <slot name="tooltips"></slot>
                        <svg v-if="arrow=='start'" class="absolute text-black h-2 left-0 ms-3 top-full" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                        <svg  v-if="arrow=='middle'" class="absolute text-black h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                        <svg  v-if="arrow=='end'" class="absolute text-black h-2 right-0 me-3 top-full" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                    </div>
                </div>

            </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: "PsTooltip",
  props: {
    theme: {
        type: String,
        default : "bg-black text-white"
    },
    border:{
        type: String,
        default : "border-none"
    },
    arrow:{
        type: String,
        default : "start"
    },
    tooltip:{
        type: String,
        default : "relative inline-block"
    },
    tooltiptext:{
        type: String,
        default : "absolute z-50 bottom-full -ms-2"
    },
    tooltipWidth: {
      type: String,
      default: "relative w-full"
    }
  },
  setup(){

    return {

    }
  },
  methods: {

  }
}
</script>
<style  scoped>

.tooltip .tooltiptext {
  visibility: hidden;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>

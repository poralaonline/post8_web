<template>
    <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="col-span-1" v-for="customizeDetail in customizeDetails?.filter(customizeDetail => customizeDetail?.coreKeysId === customizeHeader?.coreKeysId )" :key="customizeDetail.id">
            <input v-model="arr" @change="handleChange(arr,customizeHeader?.coreKeysId)" class="me-2" type="checkbox" :id="customizeDetail.id" :value="customizeDetail.id">
            <label :for="customizeDetail.id">{{ customizeDetail.name }}</label>
        </div>
    </div>
</template>

<script>
export default {
    name: "CheckBox",
    props: ['customizeDetails','customizeHeader','oldData', 'index'],
    data() {
        return {
            arr : [],
            error : '',
        }
    },
    mounted() {
        // this.oldData = [];
        if (this.oldData) {
            let array = this.oldData.split(',');
            this.arr = array;
        }
    },
    methods: {
        handleChange(arr,id) {
            this.$emit('toParent', {data : arr, id : id});
        },
        handleError() {

        }
    },
}
</script>

<style scoped>

</style>

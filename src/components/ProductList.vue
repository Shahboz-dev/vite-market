<template>
    <div class="main-container">
        <form class="sort-wrapper">
            <select id="sortBy" @change="sortProducts($event)">
                <option value="all">All products</option>
                <option value="title">By name</option>
                <option value="price">By price</option>
                <option value="stock">By stock</option>
            </select>
        </form>
        <div class="list-wrapper" v-if="loading === true">
            <div class="product-list">
            <product-item 
            v-for="product in getProducts" 
            :key="product"
            :product="product"
            />
            
        </div>
        <div class="page-wrapper" v-if="loading === true">
                <div 
                v-for="pageNumber in pages" 
                :key="pageNumber"
                @click="setSkip(pageNumber)"
                class="page"
                :class="{
                    'current-page':page === pageNumber
                }">
                    {{ pageNumber }}
                </div>
                </div>
        </div>
        <div v-else class="loader">
            Loading...
        </div>
    </div>


</template>

<script setup>
import ProductItem from './ProductItem.vue'
import {useProductStore} from '../store/ProductStore.js';
import {computed} from 'vue'



const store = useProductStore()


setTimeout(() => {
    store.fetchProducts();
}, 2000);

var getProducts = computed(() => store.products)
const pages = store.totalPages
var loading = computed(() => store.isLoading)
const page = computed(()=> store.current)


function sortProducts(event) {
    const { value } = event.target;
    if (value === 'title') {
        store.sortProductsByTitle();
    } else if (value === 'price') {
        store.sortProductsByPrice();
    } else if (value === 'stock') {
        store.sortProductsByStock();
    }else if(value === 'all'){
        store.fetchProducts()
    }
};

const setSkip = async (pageNumber) => {

    store.current = pageNumber

    if(store.current == 1) {
        store.skip = 0
    }
    else if(store.current == 2) {
        store.skip = store.limit
    }
    else if(store.current == 3) {
        store.skip = (store.limit * 2)
    }
    else if(store.current == 4) {
        store.skip = (store.limit * 3)
    }
    else if(store.current == 5) {
        store.skip = (store.limit * 4)
    }
    else if(store.current == 6) {
        store.skip = (store.limit * 5)
    }
    else if(store.current == 7) {
        store.skip = (store.limit * 6)
    }
    else if(store.current == 8) {
        store.skip = (store.limit * 7)
    }
    else if(store.current == 9) {
        store.skip = (store.limit * 8)
    }
    await store.fetchProducts();
};
</script>

<style>
.main-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.product-list{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
}
.list-wrapper{
    display: flex;
    flex-direction: column;
    text-align: center;
}
.page-wrapper{
    display: flex;
    margin: 50px 0;
    justify-content: center;
    gap: 15px;
}
.page{
    padding: 10px;
    border: 1px solid black;
}
.current-page{
    border: 2px solid orange;
}
.sort-wrapper{
    margin-bottom: 30px;
}
.sort-wrapper select{
    padding: 10px;
    font-family: Raleway;
    font-size:15px;
    border: 2px solid rgb(255, 149, 0);
}
.loader{
    font-size: 30px;
    color: rgb(237, 101, 11);
}
</style>
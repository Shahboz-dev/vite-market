<template>
        <div class="product">
            <img :src="product.thumbnail " alt="" class="product-img">
            <div class="product-details">
                <p class="product-title"><span>Название: </span>{{ product.title }}</p>
                <p class="product-price"> <x>Цена: </x> <span>{{ discountPrice }}</span>{{productPrice}}$</p>
                <p class="product-stock"><span>В наличии: </span>{{ product.stock }}</p>
                <!-- <router-link>Описание продукта</router-link> -->
                <router-link :to="`/${product.id}`" class="view-link">Посмотреть</router-link>
            </div>
            
        </div>
</template>

<script setup>




const props = defineProps({
    product:Object
})

const productPrice = props.product.price
const discountPrice = Math.round(productPrice*((100-props.product.discountPercentage)/100))

</script>

<style scoped>
@font-face {
    font-family:'Raleway';
    src: url('../assets/fonts/Raleway-Regular.ttf');
    font-weight: 400;
}

.product-details{
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.product{
    padding: 12px;
    border:2px solid orange;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.product-img{
    max-width: 220px;
    object-fit: cover;
    object-position: center;
    margin-bottom: 10px;
    max-height: 160px;
}
.product-title{
    font-family: Raleway;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
}
.product-details{
    max-width: 180px;
}
.product-price span{
    text-decoration: line-through;
    margin-right: 7px;
    color: gray;
}
.product-price x{
    font-family: Raleway;
    font-weight: 900;
}
.view-link{
    text-decoration: none;
    font-family: Raleway;
    font-weight: 900;
    color: rgb(255, 89, 0);
}
</style>
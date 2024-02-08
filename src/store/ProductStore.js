import {defineStore} from 'pinia';
import axios from 'axios';
import {ref} from 'vue'

export const useProductStore = defineStore('productStore',{
    id:'upcoming',
    state: () => ({
        products:ref([]),
        limit:ref(12),
        skip:ref(0),
        current:ref(1),
        totalPages:ref(9),
        isLoading:ref(false),
        imgNumber:ref(0)
    }),
    actions:{
        async fetchProducts(){
            try{
                setTimeout(async () => {
                    const response = await axios.get("https://dummyjson.com/products",{
                      params:{
                        limit:this.limit,
                        skip:this.skip
                      }
                    });
                    this.products = response.data.products
                    this.isLoading = true
                },1000)
            }catch(e){
                alert("Ошибка")
            }
    },
    async sortProductsByTitle() {
        if (this.products) {
          this.products.sort((a, b) => a.title.localeCompare(b.title));
        }
      },
      async sortProductsByPrice() {
        if (this.products) {
          this.products.sort((a, b) => a.price - b.price);
        }
      },
  
      async sortProductsByStock() {
        if (this.products) {
          this.products.sort((a, b) => a.stock - b.stock);
        }
      },
}})
<template>
  <div>
      <table>
          <thead>
              <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>quantity</th>
                  <th>Operations</th>
                  <th>Összérték</th>
                  
              </tr>
          </thead>
          <tbody>
              <TableItem
               v-for="row in rows"
                v-bind:key="row.title"
                :row="row"
                @selected-row-changed="Changed"
                @table-item-torles="Torles"
                />
                <td>
                    <input type="text" v-model="title">
                </td>
                <td>
                    <input type="number" v-model="price">
                </td>
                <td>
                    <input type="number" v-model="quantity">
                </td>
                <td>
                    <button @click="Post"> Hozzáad </button>
                </td>
          </tbody>
      </table>
      
      
  </div>
</template>

<script>
import TableItem from "./TableItem.vue"

export default {
    props: ["rows"],
    components: {TableItem},
    methods:{
        Changed(e){
            this.$emit('table-title-changed',e)
            this.$emit('table-price-changed',e)
            this.$emit('table-quantity-changed',e)
        },
        Post(){
              this.$emit('table-item-post', {
                new:{
                    title:this.title,
                    price:this.price,
                    quantity:this.quantity
                }
            })
            this.title="",
            this.price=null,
            this.quantity=null
        },
        Torles(e){
            this.$emit('table-item-torles', e)
        }
    }
    

}
</script>


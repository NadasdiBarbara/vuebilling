<template>
   <tr>
      <td v-if="!edit">
          {{title}}
      </td>
      <td v-if="!edit">
          {{quality}}
      </td>
      <td v-if="!edit">
          {{price}}
      </td>

      <td v-if="edit">
          <input type="text" v-model="title" v-bind="title">
      </td>
       <td v-if="edit">
          <input type="number" v-model="quality" v-bind="quality">
      </td>
      <td v-if="edit">
          <input type="number" v-model="price" v-bind="price">
      </td>
      
     
      
      
      <td v-if="!edit">
          <button @click="Torles">X</button> <button @click="Edit">Edit</button>
      </td>
      <td v-if="edit">
          <button @click="Save">Mentés</button>
      </td>
      <td v-if="!edit">
          {{quality*price}}
      </td>
     
  </tr>
</template>

<script>
export default {
    props: ['row'],
    data() {
        return {
            title: this.row.title,
            price:this.row.price,
            quality:this.row.quality,
            edit:false
        }
    },
    methods: {
        Edit() {
            this.edit = true
        },
        Save() {
            this.edit = false
            this.$emit("selected-title-changed", {
                original: this.row,
                new: {
                    title: this.title
                },
            }),
            this.$emit("selected-price-changed", {
                original: this.row,
                new: {
                    price: this.price
                },
            }),
            this.$emit("selected-quality-changed", {
                original: this.row,
                new: {
                    quality: this.quality
                },
            })
        },
        Torles(){
            this.$emit('table-item-torles',{
                original:this.row
            })
        }
    }
}
</script>

<style>
</style>
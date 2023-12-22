<template>
    <div id="app">
        <div class="image-wrapper" v-for="image in images" :key="image.id">
            <img class="thumbnail" :src="getImgUrl(image.src)" :alt="image.alt">
        </div>
    </div>
</template>
  
<script>

export default {
    data: () => ({
          images: [
            {
                id: 1,
                src: 'enchiladas.jpg',
                alt: 'plated enchiladas conver in cheese, sauce and veggie'
            },
            {
                id: 2,
                src: 'bolognese.jpg',
                alt: 'bolognese sauce topped on thick noodles'
            },
            {
                id: 3,
                src: 'chicken_parmesan.jpg',
                alt: 'Chicken parmesan on a plate with sauce'
            },
            {
                id: 4,
                src:'nashville_hot_chicken_sandwich.jpg',
                alt: 'Nashville hot chicken sandwich'
            },
            {
                id: 5,
                src: 'crepes.jpg',
                alt: 'crepes stuffed wtih salmon'
            },
            {
                id: 6,
                src: 'ribs.jpg',
                alt: 'half rack of ribs on a plate'
            },
          ],
        }),
        methods: {
        getImgUrl: function (path) { 
            return require('@/assets/' + path);
        }
        }
    }
  </script>
  
<style lang="scss">

.image-wrapper {
    margin-left: 2rem;
    margin-right: 2rem;
}

.thumbnail {
    float: center;
    width: 478px;
    height: 330px;
    object-fit: cover;
    padding: 5px;
}
  
</style>
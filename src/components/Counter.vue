<template>
    <div class="container">
        Hola desde el contador
        <button 
        class="btn btn-success btn-block"
        @click="increment(5)"
        >
        Incrementar
        </button>
        <div 
        class="alert alert-secundary text-center mt-3"
        >
        {{ counter }}
        </div>
        <button 
        class="btn btn-danger btn-block"
        @click="decrement"
        >
        Decrementar
        </button>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    export default {
        computed: {
            ...mapState(['counter'])
        },
        methods:{
            ...mapMutations(['increment','decrement'])
        }
    }
</script>

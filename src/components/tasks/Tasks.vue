<template>
    <ul class="list-group list-group-flush">
        <Task v-for="task in tasks" :key="task.id" :task="task" />
    </ul>
</template>

<script setup>
    import Task from './Task.vue';
    
    defineProps({
        tasks: Array
    })

</script>
<template>
    <main style="min-height: 50vh; margin-top: 2rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2" style="border: 1px solid #ccc; padding: 0px;">
                    <!-- Add new Task -->

                    <!-- List of uncompleted tasks -->  

                    <ul class="list-group list-group-flush">
                        <Task v-for="task in tasks" :key="task.id" :task="task" />
                    </ul>

                    <!-- show toggle button -->
                    <div class="text-center my-3" >
                        <button class="btn btn-sm btn-secondary" 
                            >
                            <span v-if="true">Show completed</span>
                            <span v-else>Hide completed</span>
                        </button>
                    </div>

                    <!-- list of completed tasks -->
                    
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
    import { onMounted, ref } from 'vue'
    import { allTask } from '../http/task-api'
    import Task from '../components/tasks/Task.vue'

    const tasks = ref([]);

    onMounted(async() => {
        const { data } = await allTask()
        tasks.value = data.data;
        console.log(tasks)
    })

</script>
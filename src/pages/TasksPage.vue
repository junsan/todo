<template>
    <main style="min-height: 50vh; margin-top: 2rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2" style="border: 1px solid #ccc; padding: 0px;">
                    <!-- Add new Task -->

                    <!-- List of uncompleted tasks -->  
                    <Tasks :tasks="uncompletedTask" />
                    
                    <!-- list of completed tasks -->
                    <Tasks :tasks="completedTask" />

                    <!-- show toggle button -->
                    <div class="text-center my-3" >
                        <button class="btn btn-sm btn-secondary" 
                            >
                            <span v-if="true">Show completed</span>
                            <span v-else>Hide completed</span>
                        </button>
                    </div>

                    
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
    import { onMounted, ref, computed } from 'vue'
    import { allTask } from '../http/task-api'
    import Tasks from '../components/tasks/Tasks.vue'

    const tasks = ref([]);

    onMounted(async() => {
        const { data } = await allTask()
        tasks.value = data.data;
        console.log(tasks)
    })

    const uncompletedTask = computed(() => tasks.value.filter(task => !task.is_completed))
    const completedTask = computed(() => tasks.value.filter(task => task.is_completed))

</script>
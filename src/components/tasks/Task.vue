<template>
    <li class="list-group-item py-3">
        <div class="d-flex justify-content-start align-items-center">
            <input class="form-check-input mt-0" 
                type="checkbox" 
            /> 
            <div style="margin-left: 8px;">
                <span>{{ task.name }}</span>
            </div>
            <!-- <div class="task-date">24 Feb 12:00</div> -->
            
            <div class="task-actions">
                <button class="btn btn-sm btn-circle btn-outline-secondary me-1">
                    <IconPencil />
                </button>
                <button class="btn btn-sm btn-circle btn-outline-danger">
                    <IconTrash />
                </button>
            </div>
        </div>
    </li>
</template>


<script setup>
    import IconPencil from '../icons/IconPencil.vue'
    import IconTrash from '../icons/IconTrash.vue';

    defineProps({
        task: Object
    })
</script>
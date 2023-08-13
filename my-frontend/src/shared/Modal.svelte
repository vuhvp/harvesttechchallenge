<script lang="ts">
    import { createEventDispatcher } from "svelte";
    export let showModal = false;

    const dispatch = createEventDispatcher();
    let username;

    const addHandler = () => {
        dispatch("add", username);
        username = "";
    };
</script>

{#if showModal}
    <div class="backdrop">
        <div class="modal">
            <p>Add New User</p>
            <div class="input-field">
                <label for="username">Username</label>
                <input type="text" id="username" bind:value={username} />
            </div>
            <div>
                <button on:click={addHandler}>Add</button>
                <button on:click>Cancel</button>
            </div>
        </div>
    </div>
{/if}

<style>
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .modal {
        padding: 20px 10px;
        max-width: 400px;
        margin: 10% auto;
        text-align: center;
        background: white;
        color: black;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
    }

    .input-field {
        margin-bottom: 20px;
    }
</style>

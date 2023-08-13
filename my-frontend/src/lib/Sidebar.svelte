<script>
    import { fly } from "svelte/transition";
    import { Link } from "svelte-navigator";
    export let show = false;
</script>

{#if show}
    <div class="sidebar-backdrop">
        <div class="sidebar" transition:fly={{ x: -250, opacity: 1 }}>
            <span class="closebtn" on:click>&times;</span>
            <ul>
                <li on:click>
                    <Link to="/">Home</Link>
                </li>
                <li on:click>
                    <Link to="users">Users</Link>
                </li>
            </ul>
        </div>
    </div>
{/if}

<style>
    .sidebar-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }

    .sidebar {
        height: 100%;
        width: 250px;
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 60px;
        transition: 0.5s;
        z-index: 2;
        background-color: #f7f7f7;
    }

    .closebtn {
        position: absolute;
        top: 0;
        right: -40px;
        color: white;
        background-color: unset;
        font-size: 40px;
        cursor: pointer;
    }
</style>

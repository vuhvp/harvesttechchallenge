<script lang="ts">
    import Sidebar from "./Sidebar.svelte";
    let showSidebar = false;

    const toggleSidebarHandler = () => {
        showSidebar = !showSidebar;
    };
</script>

<header>
    <h1>Header</h1>
    <div class="navbtn">
        <button on:click={toggleSidebarHandler}> &#9776; </button>
    </div>
</header>

<Sidebar show={showSidebar} on:click={toggleSidebarHandler} />

<style>
    header {
        text-align: center;
        background: #f7f7f7;
        padding: 20px;
        color: #242424;
        position: relative;
    }

    .navbtn {
        position: absolute;
        top: 0;
        left: 10px;
        bottom: 0;
        display: flex;
        align-items: center;
    }
</style>

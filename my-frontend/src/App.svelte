<script lang="ts">
    import { Router, Route } from "svelte-navigator";
    import Header from "./lib/Header.svelte";
    import User from "./lib/User.svelte";
    import Home from "./lib/Home.svelte";
</script>

<Router>
    <Header />
    <div id="main-app">
        <Route path="/"><Home /></Route>
        <Route path="users"><User /></Route>
    </div>
</Router>

<style>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.svelte:hover {
        filter: drop-shadow(0 0 2em #ff3e00aa);
    }
    .read-the-docs {
        color: #888;
    }
</style>

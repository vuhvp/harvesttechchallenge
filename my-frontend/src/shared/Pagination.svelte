<script lang="ts">
    import { createEventDispatcher } from "svelte";
    export let currentPage = 1;
    export let totalPageCount = 1;
    export let visiblePageCount = 5;

    const dispatch = createEventDispatcher();

    $: startPage = Math.max(currentPage - Math.floor(visiblePageCount / 2), 1);
    $: endPage = Math.min(startPage + visiblePageCount - 1, totalPageCount);

    function* range(start: number, end?: number) {
        let from = end ? start : 0;
        let to = end ? end : start;
        while (from <= to) {
            yield from;
            from++;
        }
    }

    const pageChangeHandler = (page) => {
        dispatch("pageChange", page);
    };
</script>

<ul class="pagination">
    <li
        class:disabled={currentPage === 1}
        on:click={() => pageChangeHandler(1)}
    >
        First
    </li>
    <li
        class:disabled={currentPage === 1}
        on:click={() => pageChangeHandler(currentPage - 1)}
    >
        Previous
    </li>
    {#each Array.from(range(startPage, endPage)) as i}
        <li
            class:active={currentPage === i}
            on:click={() => pageChangeHandler(i)}
        >
            {i}
        </li>
    {/each}
    <li
        class:disabled={currentPage === totalPageCount}
        on:click={() => pageChangeHandler(currentPage + 1)}
    >
        Next
    </li>
    <li
        class:disabled={currentPage === totalPageCount}
        on:click={() => pageChangeHandler(totalPageCount)}
    >
        Last
    </li>
</ul>

<style>
    .pagination {
        list-style-type: none;
        display: flex;
        padding: 0;
        justify-content: center;
    }
    li {
        padding: 10px;
        background-color: white;
        color: black;
        margin: 0 2px;
        min-width: 20px;
        cursor: pointer;
        text-align: center;
    }

    li.active {
        background-color: chocolate;
        color: white;
        font-weight: bold;
    }
    li.disabled {
        pointer-events: none;
        color: gray;
    }
</style>

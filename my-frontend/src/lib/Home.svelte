<div class="home">
    <div class="content inner-content">
        <div class="item" />
        <div class="item" />
        <div class="item" />
        <div class="item" />
    </div>
    <div class="content" />
    <div class="content" />
    <div class="content" />
</div>

<style>
    .home,
    .inner-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 10px;
    }

    .content {
        background-color: #deb887;
        padding: 20px;
        min-height: 200px;
    }

    .item {
        background-color: #f7f7f7;
        padding: 20px;
    }

    @media (max-width: 600px) {
        .home,
        .inner-content {
            grid-template-columns: 1fr;
        }
    }
</style>

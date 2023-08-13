<script>
    import { getUsers, addUser } from "../controllers/UserController";
    import Modal from "../shared/Modal.svelte";
    import Pagination from "../shared/Pagination.svelte";
    import UserList from "./UserList.svelte";

    let users = [];
    let currentPage = 1;
    let totalPageCount = 0;
    let showModal = false;

    async function fetchUsers() {
        try {
            const data = await getUsers(currentPage);
            users = data.Users.data;
            totalPageCount = data.Users.meta.pagination.totalOfPage;
        } catch (error) {
            console.log("Error while fetching users", error);
        }
    }

    $: currentPage && fetchUsers();

    const toggleModal = () => {
        showModal = !showModal;
    };

    const addHandler = async (e) => {
        try {
            await addUser(e.detail);
            fetchUsers();
            showModal = false;
        } catch (error) {
            console.log("Error while adding user", error);
        }
    };

    const pageChangeHandler = (e) => {
        currentPage = e.detail;
    };
</script>

<main>
    <h1>Harvest Tech Challenge</h1>
    <button class="addbtn" on:click={toggleModal}>Add new user</button>
    <UserList {users} />
    <Pagination
        {currentPage}
        {totalPageCount}
        on:pageChange={pageChangeHandler}
    />
</main>
<Modal {showModal} on:click={toggleModal} on:add={addHandler} />

<style>
    .addbtn {
        border-color: white;
    }
</style>

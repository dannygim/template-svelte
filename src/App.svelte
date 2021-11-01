<script lang="ts">
    export let message: string | undefined;
</script>

<div>
    Message: <span class="message">{message}</span>
</div>

<style lang="scss">
    div {
        font-size: 2rem;

        .message {
            color: blue;
        }
    }
</style>

<template>
    <section class="hero is-medium heroer">
        <div class="hero-body pb-0-mobile">
            <div class="container">
                <h1 class="title is-1 has-text-primary">{{title}} /</h1>
                <div>
                    <h2 class="subtitle"><span class="has-text-primary">return </span><span class="has-text-white">$this</span>-><span>{{branch}}()</span>;</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: [
        'title',
        'branch',
    ]
}
</script>
<template>
    <b-navbar>
        <template slot="end">
            <b-navbar-item tag="router-link" class="has-text-primary" :to="{ path: '/' }">home();</b-navbar-item>
            <b-navbar-item tag="router-link" class="has-text-primary" :to="{ path: '/about' }">me();</b-navbar-item>
            <b-navbar-item tag="router-link" class="has-text-primary" :to="{ path: '/contact' }">contact();</b-navbar-item>
        </template>
    </b-navbar>
</template>
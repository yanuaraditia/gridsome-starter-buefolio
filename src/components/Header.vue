<template>
    <b-navbar>
        <template slot="end">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/about' }">About</b-navbar-item>
            <b-navbar-item :href="'//blog.yanuaraditia.com'">Blog</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/contact' }">Contact</b-navbar-item>
        </template>
    </b-navbar>
</template>
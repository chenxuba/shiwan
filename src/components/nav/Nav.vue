<template>
    <div class="nav">
        <router-link to="/">苹果</router-link>
        <router-link to="/android">安卓</router-link>
        <router-link to="/message">资讯</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav{
    height: 34px;
    line-height: 34px;
    margin: 0 12px;
    background-color: #00a0fd;
    border-radius: 4px;
    display: flex;
}
.nav a{
    flex: 1;
    text-align: center;
    color: #fff;
    text-decoration: none;
    border-right: 1px solid #ffffff54;
}
.nav a:last-child{
    border: none;
}
</style>

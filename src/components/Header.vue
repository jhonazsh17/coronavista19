<template>
    <header class="header">
        <Navbar></Navbar>
    </header>   
</template>

<script>

import Navbar from "@/components/Navbar.vue"

export default {
  name: "Header",
  components: {
    Navbar
  }
};
</script>
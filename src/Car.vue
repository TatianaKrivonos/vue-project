<template>
  <div class="car">
    <h3>Name: {{ carName }}</h3>
    <p>Year: {{carYear}} </p>
  </div>
</template>
<script>
  export default {
    props: ['carName', 'carYear'],
  }
</script>
<style>
  .car {
    padding: 10px;
    border: 1px solid #000;
  }

  .car h3 {
    margin-bottom: 10px;
  }
</style>

<template>
  <h2>{{ title }}</h2>
  <p data-test-id="counter">{{ counter }}</p>
  <p>{{ counter }}<sup>2</sup> = {{ squareCounter }}</p>
  <p>{{ counter }}<sup>2</sup> = {{ squareCounter }}</p>
  <p>{{ counter }}<sup>2</sup> = {{ squareCounter }}</p>
  <p>{{ counter }}<sup>2</sup> = {{ squareCounter }}</p>
  <p>{{ counter }}<sup>2</sup> = {{ squareCounter }}</p>
  <p>{{ counter }}<sup>2</sup> = {{ squareCounter }}</p>
  <p>{{ counter }}<sup>2</sup> = {{ squareCounter }}</p>

  <button @click="increase">+1</button>
  <button @click="subtract">-1</button>

  <input type="text" name="" id="" v-model="counter">
</template>

<script>
export default {
  name: 'Counter',
  props: {
    title: {
      type: String,
      default: 'Counter'
    },
    start: {
      type: Number, default: 100, validator(value) {
        return value > 0;
      }
    }
  },
  data() {
    return {
      counter: this.start,
      isDisable: false
    }
  },

  methods: {
    getSquareValue() {
      console.log('getSquareValue')
      return this.counter;
    },
    increase() {
      this.counter = this.counter + 1
    }
    , subtract() {
      if (this.counter > 0) {
        return this.counter--
      }
      this.isDisable = !this.isDisable;

    }

  },
  computed: {
    squareCounter() {
      return this.counter * this.counter;
    },

  }
}
</script>

<style>
button {
  background-color: #64BB87;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 25px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>
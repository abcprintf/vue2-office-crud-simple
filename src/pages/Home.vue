<template>
  <div class="container">
    <h1>Vue.js CRUD</h1>

    <div class="float-left">
      <button type="button" class="btn btn-success" @click="addItem">
        Add Item
      </button>
    </div>
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>
              <button
                type="button"
                class="btn btn-warning m-1"
                @click="editItem(index)"
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                @click="deleteItem(index)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  comments: {},
  data() {
    return {
      items: [
        {
          id: this.uuid(),
          name: "A1",
          email: "A1@gmail.com",
        },
        {
          id: this.uuid(),
          name: "A2",
          email: "A2@gmail.com",
        },
      ],
    };
  },
  methods: {
    uuid() {
      let len = 10;
      return parseInt((Math.random() * 9 + 1) * Math.pow(10, len - 1), 10);
    },
    addItem() {
      this.items.push({
        id: this.uuid(),
        name: "xxx",
        email: "xx@gmail.com",
      });
    },
    editItem(index) {
      // solution 1
      this.$set(this.items, index, { name: "aa", email: "aa@gmail.com" });

      // solution 2
      //   let newItems = [];
      //   this.items.map((d) => {
      //     if (d.id === item.id) {
      //       d.name = "newValue";
      //     }

      //     newItems.push(d);
      //   });
      //   this.items = newItems;
    },
    deleteItem(index) {
      this.$delete(this.items, index);
    },
  },
  created() {},
  mounted() {},
};
</script>

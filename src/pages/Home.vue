<template>
    <div class="container">
        <h1>Vue.js CRUD</h1>
        
        <div class="float-left">
            <button type="button" class="btn btn-success">Add Item</button>
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
                    <tr>
                        <td>1</td>
                        <td>DEVMIX</td>
                        <td>Devmix@gmail.com</td>
                        <td>
                            <button type="button" class="btn btn-warning m-1">Edit</button>
                            <button type="button" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
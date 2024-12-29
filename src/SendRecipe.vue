<template>
    <div class="container">
        <h1>Send us your recipe</h1>

        <p>
            At Daily Meals we believe that the best recipes are the ones shared
            with love! Whether it’s a cherished family secret, a creative twist
            on a classic dish, or your latest culinary invention, we’d love to
            feature your recipe on our website.
        </p>

        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
                >Your Email address</label
            >

            <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
            />
        </div>

        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
                >Your recipe</label
            >
            <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
            ></textarea>
        </div>

        <div class="mb-3">
            <label for="formFileMultiple" class="form-label">Photos</label>
            <input class="form-control" type="file" id="formFileMultiple" />
        </div>

        <div class="mb-3">
            <button class="btn btn-primary">Submit</button>
        </div>
    </div>
</template>

<script setup></script>

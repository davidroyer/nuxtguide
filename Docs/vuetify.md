# Vuetify

## `customVariables`

The `treeShake` option for the `@nuxtjs/vuetify` module is only set to true in
production. Therefore if you are trying to use `customVariables` but aren't
seeing these styles reflected in development, there's a good chance you can
solve this by adding `treeShake: true` to the `vuetify` options object inside
`nuxt.config.js`

!!! info FYI
**This causes extremely slow development loading.**

It will be slow for the initial reading of the `customVariables` file and then
on each subsequent change to this file.
!!!

## Layouts

### To fill height to vertically align center or something else

```vue
<template>
    <v-container fill-height>
    <v-container>
</template>
```

### Example of using flex, classes, and grid to get a specific layout

By using `v-container` with the `fill-height` prop **_plus_** adding it as a class on `v-row` within the container,
you can use the `align` prop to work

```vue
<template>
    <v-container fill-height>
        <v-row class="fill-height" justify="center" align="end">
            <v-col cols="2">Col 1</v-col>
            <v-col cols="2">Col 2</v-col>
            <v-col cols="2">Col 3</v-col>
        </v-row>
    <v-container>
</template>
```

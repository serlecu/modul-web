# COMPONENTS

In this directory, you will find the components that are used in the application. Each component is designed to be as reusable and modular as possible except for the ones in `/src/components/agrupados` which are grouped together for specific use cases.

The most important component is `Box`, which is used for drawing the "cubes". They can be filled with other html content using the `content` property and resized according to it by setting its `width` and `height` properties to `auto`.

Other important component is `Nav`. It should be placed once in the index and will render the navigation bar, responsible for the routing of the application.

`LogoSection` is a component that renders the logo and the title of a section. It is just a simple wrapper around the `Logo` (should become a separate component based on Box in the future) and a box componen displaying the title of a section, everyting in the right section color.
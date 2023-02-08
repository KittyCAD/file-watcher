# file-watcher

Watch a file for changes locally and then get the mass of the new file from the 
KittyCAD API. This is just a very basic example.

Install the deps with `yarn install`.

Your token will be parsed from the environment
variable: 'KITTYCAD_TOKEN'. Make sure it is exported in your environment before 
running with `yarn start`.

The little script watches the `tester.stl` file, if you move the `tester2.stl`
file to `tester.stl` the mass will be returned for the file.

You can do this in a terminal with `mv tester2.stl tester.stl`.

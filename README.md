# typescript-57926
(Fairly) minimal reproduction for TypeScript issue 57296.

Note that this example makes use of ng-packagr, which internally coordinates the invocation of TypeScript to prepare the
package. It might be possible to identify a more direct reproduction of the issue but I don't understand enough about
the triggering conditions to do this.

The example source files in this project are entirely synthetic and are purely illustrative.

### Successful build under TypeScript nightly 5.4.0-dev.20231221

To reproduce the successful build (on Windows 10):

1. npm install
2. npm run build
3. Observe successful output
4. Look at dist/lib/spaces/rgb/rgb-converter.d.ts and see that it contains this line:   
    ``` readonly entries: Map<ColorSpace<import("@spectrum/spaces/rgb").Notation>, string>; ```


### Failed build under TypeScript nightly 5.4.0-dev.20231222

To reproduce the failed build (on Windows 10):

1. Update package.json so that it uses TypeScript 5.4.0-dev.20231222
2. npm install
3. npm run build
4. Observe TS6059 error relating to notation.ts
5. Look at dist/lib/spaces/rgb/rgb-converter.d.ts and see that it contains this line:  
    ``` readonly entries: Map<ColorSpace<import("rgb/src/notation").Notation>, string>; ```

Note that this seems to work just fine under a Linux-based OS (but I have not tested exhaustively).

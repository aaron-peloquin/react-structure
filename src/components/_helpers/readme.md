# Helper Files

## Usage
Individual files with one function contained within them, each. Managing data, sharing hook logic, and making callbacks

If your project has individual queries (SQL, GraphQL, an API), you can also store the 

## Naming Scheme
`./{verb}{identifier}{descriptor}.{t|j}s`

- `verb` is used to describe the type of action your function will take
- `identifier` is used to say what your verb will act upon
- `descriptor` (optional) is used to give more specification to your verb and identifier.

### Examples
- `queryUserDetails.js`
- `parseNameProperCase.js`
- `setUserName.ts`
- `handleProfileFormSubmission.ts`
- `goToHomepage.ts`

## Intent
We want to make our code more reusable, and easier to infer functionality from the file name. We hope that following a naming scheme will make it more likely that we will not create duplicate functionality.

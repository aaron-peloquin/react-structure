# Helper Files

## Usage
Individual files with one function contained within them, each. Managing data, sharing hook logic, and making callbacks

If your project has individual queries (SQL, GraphQL, an API), you can also store them here in `queries`, `data`, etc- folders

## Naming Scheme
`./{verb}/{see folder naming rules}.{t|j}s`

### Examples
- `queryUserDetails.js`
- `parseNameProperCase.js`
- `setUserName.ts`
- `handleProfileFormSubmission.ts`
- `goToHomepage.ts`

## Intent
We want to make our code more reusable, and easier to infer functionality from the file name. We hope that following a naming scheme will make it more likely that we will not create duplicate functionality.

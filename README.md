# sn-exodus
Repo to house our CMS content block components and anything else cms related we need.

## How to update this repo
1. Make your code changes
2. Run `npm run build`. This will build both the cjs and esm versions of the repo and generate typescript types
3. Commit and push to the `main` branch
4. Now run `npm version v.0.1.x` where `x` is the next number in the version sequence. This will create a tag a with that version id as well as new commit on the main branch
5. Push the `main` branch.
6. Push the new tag that was created `v.0.1.x`
7. Create a new release on github using the new (existing) tag.
8. Now from your .com repo, you can run `yarn add Sleepnumber/sn-exodus#v0.1.x` where `x` is the correct version number.

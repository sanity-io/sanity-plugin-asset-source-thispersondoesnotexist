# Sanity Asset Source: thispersondoesnotexist.com

This asset source plugin lets you pick [a photo of a person that doesn't exist](https://thispersondoesnotexist.com/) from within the Sanity Studio.

## Installation

`sanity install asset-source-thispersondoesnotexist`

## Developing on this module

To simulate using your development version as a real module inside a studio, you can do the following:

- Run `npm install && npm link` from the root of this repository.
- Run `npm run watch` to start developing and build the module when changes are made.

#### Displaying your development version inside a studio

**With the mono-repo's `test-studio`:**

- Bootstrap the monorepo: `npm run bootstrap`
- Add `sanity-plugin-asset-source-thispersondoesnotexist` with the current version number to `package.json` in the `test-studio` root folder (but don't run `npm install` afterwards)
- Run `npm link sanity-plugin-asset-source-thispersondoesnotexist` inside the mono-repo's root.
- Add `asset-source-thispersondoesnotexist` to the list of the studios plugins in `sanity.json`.
- Restart the `test-studio`

**With a regular Sanity Studio:**

- Run `npm install`
- Add `sanity-plugin-asset-source-thispersondoesnotexist` with the current version number to `package.json`.
- Run `npm link sanity-plugin-asset-source-thispersondoesnotexist`
- Add `asset-source-thispersondoesnotexist` to the list of the studios plugins in `sanity.json`.
- Start the studio

When you are done and have published your new version, you can run `npm unlink` inside this repo, and `npm unlink sanity-plugin-asset-source-thispersondoesnotexist` inside the mono-repo or studio to get back to the normal state. Then run `npm run bootstrap` for the mono-repo or `npm install` inside the regular studio to use the published version.

## Example resulting asset document

```json
{
  "_createdAt": "2019-11-27T12:00:19Z",
  "_id": "image-df0254989803f00c26d70ecf47005a4d39fbbfbf-1024x1024-png",
  "_rev": "j3S7uWudAzOcEqdVwXOlcA",
  "_type": "sanity.imageAsset",
  "_updatedAt": "2019-11-27T12:00:19Z",
  "assetId": "df0254989803f00c26d70ecf47005a4d39fbbfbf",
  "creditLine": "https://thispersondoesnotexist.com",
  "extension": "png",
  "metadata": {
    "_type": "sanity.imageMetadata",
    "dimensions": {
      "_type": "sanity.imageDimensions",
      "aspectRatio": 1,
      "height": 1024,
      "width": 1024
    },
    "hasAlpha": true,
    "isOpaque": true,
    "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFDElEQVQ4yzWU6VNTdxSG8290pq3TqW1RUFzYBgFZZVVBQVHZUlkUhQBhl0WWFGRLQLAgiGiiIFsQSsMeQkgM+yY6LtPOdJxp/4unv3vVD2fuvV+e+57zvucoVt98YGX/A47XovY/Yt99x4x9A8OYiQd9/XQbBhk1zbOwssny1j627dfiuYd1c5el9W0W17ZEbWNZl2oLxcdP//H+n395+/cn1l4L2KKNF6Pj3O/sobK2joqqanRt7QyNvmTO+grrxi62rS9Q8b64viNAOyxtfC7F3vu/2HzzDotjlf7BQdpadbRqm9G1NKOpqeJueSn1mhq6OzsZGTEybV5iSShaFlDr5p6sbnFtR4ZLqhWmJRujUzNo29tQ3U4j89erlOTcQKspp+d+E79r62iqreBedSVtTQ3onz7BNG/+AtjDvLollwRbFt8Kk8VGX/8AWbfTiQ7z5XKUP6qUC3RUq5nUdzDc3UJjmQp1RhKq1ESqSnJ58uQRc8uf219wbMjzleDSKBQzVgdNOi0xZ0Pw93QmOtidfOV5nrfcwW7sZWGgk64aNTnJF4iPDCDxQiiVJTkMG0exCGUSbH5lQ1Zn395HMTY9hyo3G6+Th3F3+YGLwW7UZl9lorsex4Qe+0s9L7saaVCnoYwOIur0CRIvhtKqa2ZGmCS1O+/4Atx5g6JvYIhL8bEc+ulb3JwPkHLOh9bi6zzXVmDQ1aJvqeaFrobHmiKKUy8THehBhL8HJUV5jM/MC+C2DLR+Bba0dxAWFsShH7/B78RB1AnhdNxJ57dcJdlJsagSYmgS6h7VFFCSkUDMGT8iAr3JV6sYm5rFIhyed6zL85SBlbUawoL9OOn0PeHeLmiyrjLQXEpzcSZZSXGolfF0VuUz9KABTZGK9MQrpKckUH+vHtPisgj3DnOv1uQs2rcFsLisjNBAHzycfyDK9xgthWksGtqZe9rBi7Y6hjsaWB41sGM2MTvSz+CjLp72PGTIOM6imJ8EnLWvyhtjk0xRFxcR4OuJ+2EJeJza24lMP2xkfegxG0YDa0Y9m5ODvLXO8GHFwrsVKxt2G1bJWRETaf1mbCuy23JsCooL8fPxwNXpAEGeR1Anx2DQFDLb1cyr/h7sA92Yupow9ejY+HOEtzYzawK4LDbEJnbbIp7Tyw7R9rr8A0X53QqCArxxOvgdbq6/kBYXxoOyTIaby5kSSud6dQw3VdJfV8aC4SHW8SGmJidZEHOTFEltm5bsskrJaUVdwz3ORgZzzOUg7secuBZ1mvqcJHqrs3lWXyCr7RNBNpQWYtTWM9Cp5fkzvZzBr8BJYY4EXRJOK5q0LcRGh+PjcYQAr6NcDPIQ0YmgQYS7tSCZtrxkOm4p6cvPpreykDoBb2vTCoetMtAsZvfHwpIMlYF19Rp57Xw9nAk55UqM/3GuR3mjvhJCdXo0utxrPMhX0ll8k9qcVNJElCoqSkWo5+TtkIAT8xYmzFYsErBQncW5UD983Q8T6OXCeb+jKMPcyTjrTU5cELUZsdwvSqVOnUrSpXNiPCGo81SMjE/KYZaA4wIolWVdADOVl4kJPUWwtysB4jic8TxEYqg7mTF+3Irxp0hqPy+F4hsJBIu8BocEkCt2v3/YKI7DtgBuMT63yJgo6dgqbiadJy7Cl8gAN4KEwtMnfiY+1IvchEgKroVTmhxFozqF/PR4fE95EBISiFqdi17cALNjU5iyLauTgOa1Xf4HzEY3eSTF2t0AAAAASUVORK5CYII=",
    "palette": {
      "_type": "sanity.imagePalette",
      "darkMuted": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#362d23",
        "foreground": "#fff",
        "population": 16.73,
        "title": "#fff"
      },
      "darkVibrant": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#5f2126",
        "foreground": "#fff",
        "population": 0.02,
        "title": "#fff"
      },
      "dominant": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#c4ccd4",
        "foreground": "#000",
        "population": 20.44,
        "title": "#000"
      },
      "lightMuted": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#c4ccd4",
        "foreground": "#000",
        "population": 20.44,
        "title": "#000"
      },
      "lightVibrant": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#dca2b4",
        "foreground": "#000",
        "population": 0.01,
        "title": "#fff"
      },
      "muted": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#9c6c5b",
        "foreground": "#fff",
        "population": 0.03,
        "title": "#fff"
      },
      "vibrant": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#bd414b",
        "foreground": "#fff",
        "population": 0,
        "title": "#fff"
      }
    }
  },
  "mimeType": "image/png",
  "originalFilename": "dd4d7272-1441-4962-9340-7409804b7f7e.png",
  "path": "images/rwmuledy/production/df0254989803f00c26d70ecf47005a4d39fbbfbf-1024x1024.png",
  "sha1hash": "df0254989803f00c26d70ecf47005a4d39fbbfbf",
  "size": 1996984,
  "source": {
    "id": "1574856016900",
    "name": "thispersondoesnotexist.com"
  },
  "url": "https://cdn.sanity.io/images/rwmuledy/production/df0254989803f00c26d70ecf47005a4d39fbbfbf-1024x1024.png"
}
```

## Futher reading

There is no further reading. Thank you.

# Method — The Perpetual Power Strip

## Concept

A sleek modern white power strip, shot as a real studio catalogue photograph
on a seamless light-grey background. Its own plug and cable loop neatly back
and are plugged into one of its own sockets, a small green LED glowing to
show it is powered. Exactly one accessory: a single smartphone standing at
the right end of the strip, plugged in, its screen showing a charging battery
icon. The joke reads at a glance — it powers itself forever, and still has
power to spare. There is no text anywhere in the image, so nothing can be
misspelled.

## How it meets the judge's brief

1. **Catalogue photograph of an impossible gadget.** A small manufactured
   device with an absurd job, shot straight-on as a studio product photo —
   not a portrait, landscape, or loose illustration.
2. **The absurd job reads from the picture alone.** The self-plugged cable
   plus the glowing LED plus the charging phone tell the whole joke without
   a caption: a power strip that powers itself.
3. **Real catalogue photography.** Soft directional studio light, a subtle
   shadow under the strip, clean colour, believable plastic and metal
   materials, crisp manufactured detail on the sockets and plug.
4. **Product as hero, exactly one accessory.** The strip fills the frame on
   an uncluttered background; the single smartphone sharpens the joke by
   proving the strip has power to spare.
5. **Engineered, specific absurdity.** The loop is neat and deliberate, the
   plug is properly seated in its own socket, the LED confirms it "works" —
   the styling rewards a second look. Text belongs to the product only;
   here there is none at all.

## Build

The photograph was generated as a photorealistic studio product shot, then
visually inspected: plug seated in its own socket, cable loop clean with no
extra limbs, four sockets undistorted, exactly one phone, no text anywhere.
The final image was resized to exactly 1024x1024.

`main.ts` (Node 22, standard library only) copies `image.png` byte-for-byte
to the output directory (`MAKEFUN_OUTPUT_DIR`, default `out/`) as
`entry.png`.

## Determinism

No randomness, no network access, no clock reads. The output image is fixed
at build time; running the program twice produces byte-identical files
(verified: same sha256 across two runs to different output directories).

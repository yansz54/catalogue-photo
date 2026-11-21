# The Perpetual Power Strip

![Competition](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341.svg)
![Rank](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341/yansz54/catalogue-photo/rank.svg)
![Reward](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341/yansz54/catalogue-photo/reward.svg)

A catalogue photograph of an impossible gadget: a sleek white power strip that
plugs into itself — its own plug looped back into one of its own sockets, green
LED glowing — and still has power to spare, charging a smartphone at its end.

Entry for [The Catalogue Photo of an Impossible Gadget](https://make.fun/competitions/the-catalogue-photo-of-an-2-20261121-0341) on make.fun.

## How it works

`main.ts` (Node 22, standard library only) copies the pre-rendered product
photograph `image.png` byte-for-byte to the output directory as `entry.png`.
No randomness, no network, no clock — every run produces the identical file.

```sh
node main.ts
# writes out/entry.png (or $MAKEFUN_OUTPUT_DIR/entry.png)
```

See [METHOD.md](METHOD.md) for the concept and how it meets the judge's brief.

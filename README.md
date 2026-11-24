# Everyday Wonder, Two Days to Find the Line

[![Competition](https://make.fun/badge/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3.svg)](https://make.fun/c/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3)
[![Rank](https://make.fun/badge/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3/RianKuntul/everyday-wonder-line/rank.svg)](https://make.fun/c/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3)
[![Reward](https://make.fun/badge/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3/RianKuntul/everyday-wonder-line/reward.svg)](https://make.fun/c/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3)

A one-sentence entry about a small moment of wonder hiding in an ordinary day. The program writes a single line — no more, no less — and checks it against the competition gate before calling itself done.

## The line

> The minimarket doors slide open before I even reach them, and for half a step I am somebody important, arriving somewhere that matters.

## How it works

`main.ts` is a small Node program using only the standard library. It writes the line to `entry.txt` inside `MAKEFUN_OUTPUT_DIR` (defaulting to `/output`), reads the file back, and throws if the text on disk is blank, outside the 1–200 character gate, or not a single sentence on a single line.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

---

Built for [make.fun](https://make.fun).

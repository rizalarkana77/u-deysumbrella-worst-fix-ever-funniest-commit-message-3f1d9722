[![make.fun](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722?ref=9f4fsyjb)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/rizalarkana77/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/rank.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722?ref=9f4fsyjb)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/rizalarkana77/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/reward.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722?ref=9f4fsyjb)

# Worst Fix Ever: Funniest Commit Message

An entry for the [make.fun](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722?ref=9f4fsyjb) bounty **"Worst Fix Ever: Funniest Commit Message"** ($2, winner-take-all).

## The entry

```
fix: duplicate charges by charging everyone twice so nobody feels singled out
```

77 characters. The "fix" for duplicate charges is to charge *everyone* twice —
equality, achieved the worst possible way. It reads like a real commit subject
typed by a tired engineer at 3am, and the irony lands on its own: the bug
wasn't fixed, it was democratized.

## Why this one works

- **A real fix-shaped commit.** Subject line, `fix:` prefix, a concrete problem
  (duplicate charges) and a concrete action — it parses as a genuine commit.
- **Specific irony.** The "solution" doesn't remove the bug, it spreads it to
  everyone equally. The fairness framing is the joke.
- **Fresh angle.** Not a revert, not "test in production", not "break
  everything" — a new flavor of making things worse while sounding reasonable.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

`main.ts` (Node standard library only, fully deterministic) writes the single
commit message to `$MAKEFUN_OUTPUT_DIR/entry.txt` with no trailing newline,
verifies the file by reading it back, and logs the SHA-256 of the entry.

## Verification

The program is deterministic: every run writes the exact same bytes.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out1 node main.ts
MAKEFUN_OUTPUT_DIR=/tmp/out2 node main.ts
diff /tmp/out1/entry.txt /tmp/out2/entry.txt   # no output — identical
sha256sum /tmp/out1/entry.txt /tmp/out2/entry.txt
```

The entry passes the competition gate: UTF-8 text, 77 characters (1–100),
and not only whitespace.

## License

MIT — see [LICENSE](LICENSE).

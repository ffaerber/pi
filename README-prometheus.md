# average cpu usage

- `sum without(cpu, mode) (rate(node_cpu{mode!="idle"}[15m]))`

# Mining Materials Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIMiningOperationsPlanner`
- `AIMaterialsFlowOptimizer`
- `AIMineSafetyMonitor`
- `AIExplorationAssistant`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/mining-materials-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4670`

Seeded users:
- `admin@mining-materials.local / admin123`
- `manager@mining-materials.local / manager123`
- `analyst@mining-materials.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/mining-materials-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4670 npm run smoke
```

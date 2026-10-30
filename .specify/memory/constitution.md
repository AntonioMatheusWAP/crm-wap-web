# CRM WAP Web Constitution

## Core Principles

### I. Type-Safe Vue Composition

- All components MUST use `<script setup lang="ts">` with the Composition API; the Options
  API MUST NOT be introduced.
- Props, emits, refs, store state and API payloads MUST be explicitly typed. `any` is
  forbidden; use `unknown` plus narrowing when a type is truly unknown.
- Imports from `src` MUST use the `@/` alias.
- `npm run type-check` (vue-tsc) MUST pass with zero errors on every change.

Rationale: a CRM manipulates many related entities; compile-time types catch contract drift
with the API before users do.

### II. Vuetify-First UI

- UI MUST be built from Vuetify components and its grid (`v-container`/`v-row`/`v-col`);
  icons MUST come from `@mdi/font`.
- Custom CSS MUST be `scoped` and limited to what Vuetify props, utility classes or theme
  variables cannot express. Colors MUST come from the Vuetify theme, not hard-coded values.
- Every view MUST be usable from mobile (xs) to desktop (xl) breakpoints.
- Charts MUST use `vue-echarts`; input masks (CPF, CNPJ, phone, CEP) MUST use the registered
  `v-mask` directive.

Rationale: one component library keeps the interface consistent and reduces bespoke
styling to maintain.

### III. Internationalization by Default

- No user-facing string may be hard-coded in templates or scripts; all text MUST go through
  `vue-i18n` (`t(...)`).
- `pt-BR` is the default locale and `en` the fallback. Every new key MUST be added to both
  `src/locales/pt-BR.json` and `src/locales/en.json` in the same change.
- Dates, numbers and currency MUST be formatted via i18n/`Intl` with the active locale,
  never by manual string concatenation.

Rationale: the product targets Brazilian users first while remaining translatable; missing
keys are runtime defects.

### IV. Tested Behavior (NON-NEGOTIABLE)

- Every new or changed view, component, composable, store and service MUST ship with Vitest
  tests (Vue Test Utils for components) under `tests/` covering its user-visible behavior.
- Bug fixes MUST include a test that fails before the fix and passes after it.
- Tests MUST assert behavior (rendered text, emitted events, state changes), not
  implementation details. External HTTP MUST be mocked at the service boundary.
- `npm run test:run` MUST pass before merge.

Rationale: tests are the only durable guarantee that CRM workflows keep working as the
codebase grows.

### V. Layered State & API Boundary

- Views and components MUST NOT call `fetch`/HTTP clients directly. All communication with
  the backend (`crm-wap-api`) MUST go through typed service modules in `src/services/`.
- Shared or cross-view state MUST live in Pinia setup stores (`src/stores/`); component-local
  state stays in the component. Reusable logic MUST be extracted to composables
  (`src/composables/`).
- Route-level views MUST be lazy-loaded (`() => import(...)`) in `src/router/`.
- API request/response types MUST mirror the backend contract and be updated in the same
  change whenever that contract changes.

Rationale: a single boundary to the API makes contract changes local, testable and mockable.

## Technology & Security Constraints

- Stack: Vue 3, TypeScript, Vite, Vuetify, Pinia, Vue Router, vue-i18n, ECharts, Vitest.
  Adding a runtime dependency MUST be justified in the feature plan (need, size, maintenance)
  and MUST NOT duplicate a capability already provided by the stack.
- Personal data (CPF, CNPJ, phone, e-mail, address) is subject to LGPD. It MUST NOT be
  logged to the console, persisted in `localStorage`/`sessionStorage`, or placed in URLs
  or query strings.
- Authentication tokens MUST NOT be stored in `localStorage`; secrets MUST NOT be committed
  or embedded in client code. Only `VITE_`-prefixed, non-secret configuration may reach the
  bundle.
- User input MUST be validated on the client for usability, but the client MUST NOT be
  treated as the authority; `v-html` with untrusted content is forbidden.

## Development Workflow & Quality Gates

- Features follow the Spec Kit flow: `/speckit-specify` → `/speckit-clarify` (when
  ambiguous) → `/speckit-plan` → `/speckit-tasks` → `/speckit-implement`. Each plan MUST
  include a Constitution Check against the principles above.
- Work happens on feature branches; `main` receives changes only through reviewed pull
  requests.
- Merge gates (all MUST pass): `npm run type-check`, `npm run test:run`, `npm run build`,
  and reviewer confirmation of constitution compliance.
- Commits MUST follow Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, ...).

## Governance

- This constitution supersedes other development practices for `crm-wap-web`. Where a
  guideline conflicts with it, the constitution wins until amended.
- Amendments MUST be made via `/speckit-constitution` in a pull request that states the
  change, its rationale, and any migration needed for existing code.
- Versioning follows semantic versioning: MAJOR for removing or redefining a principle,
  MINOR for adding a principle/section or materially expanding guidance, PATCH for
  clarifications and wording.
- Every pull request review MUST verify compliance. Any deviation MUST be recorded in the
  plan's Complexity Tracking section with justification and a simpler alternative that was
  rejected; unjustified deviations block merge.

**Version**: 1.0.0 | **Ratified**: 2026-10-30 | **Last Amended**: 2026-10-30

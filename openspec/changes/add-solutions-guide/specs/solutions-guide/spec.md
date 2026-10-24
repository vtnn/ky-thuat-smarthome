## ADDED Requirements

### Requirement: Independent solutions navigation
The wiki SHALL expose a Vietnamese solutions section after Tổng quan and at the same level as Lộ trình học.

#### Scenario: Open the guide
- **WHEN** a reader visits the homepage or sidebar
- **THEN** they can open GP.00 and the published GP articles without changing existing A–G URLs

### Requirement: Practical solution comparisons
Each primary article SHALL explain needs, alternatives, compatibility, infrastructure, relative cost, maintenance, limitations, a housing example, survey questions and links to implementation.

#### Scenario: Advise a customer
- **WHEN** a salesperson or technician compares options
- **THEN** they can identify a suitable option and what must be confirmed before promising a feature

### Requirement: Two sensor reading levels
The sensor guide SHALL provide a quick view and a detailed simulation based on shared profiles, scenarios and evaluation logic.

#### Scenario: Continue into the simulation
- **WHEN** a reader opens the deep view from a selected quick scenario
- **THEN** the deep view restores that scenario and evaluates the same conditions

### Requirement: Explainable qualitative evaluation
The simulation SHALL distinguish illustrative assumptions from verified product capabilities and SHALL NOT display assigned percentages as measured signal or detection probability.

#### Scenario: Insufficient evidence
- **WHEN** a configuration depends on unverified hardware or environmental performance
- **THEN** the result states Cần kiểm tra thực tế and explains the next check without guaranteeing a product outcome

### Requirement: Consistent custom state and share links
The detailed view SHALL support sensor, sensitivity, activity, barrier, noise, reset and a shareable URL.

#### Scenario: Change a preset
- **WHEN** a reader changes a control
- **THEN** the result is recalculated, the view indicates customization and the fixed preset recommendation is not retained as the current verdict

#### Scenario: Invalid URL
- **WHEN** the URL contains invalid or missing option values
- **THEN** the guide uses valid defaults and renders safely

### Requirement: Accessible lightweight presentation
The guide SHALL work within Astro/Starlight without a new UI framework, support keyboard operation, small screens, both themes and reduced motion.

#### Scenario: No JavaScript
- **WHEN** JavaScript is disabled
- **THEN** the article comparisons, explanations and survey checklists remain readable

### Requirement: Durable phased plan
The repository SHALL retain the approved roadmap, a private source copy, verification notes and a single execution checklist.

#### Scenario: Resume later
- **WHEN** another contributor resumes work
- **THEN** the roadmap links to OpenSpec tasks with evidence-based completion states and identifies unverified source claims

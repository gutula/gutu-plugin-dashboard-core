import type { DashboardPluginMetadataInput } from "./plugin-metadata";

export const dashboardPluginMetadata = [
  {
    id: "accounting-core",
    displayName: "Accounting Core",
    description: "General ledger, receivable, payable, billing, payment allocation, and close-oriented accounting truth with append-only posting discipline.",
    repoName: "gutu-plugin-accounting-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "accounting_finance",
      subcategoryLabel: "Accounting & Finance"
    }
  },
  {
    id: "admin-shell-workbench",
    displayName: "Admin Shell Workbench",
    description: "Default universal admin desk plugin.",
    repoName: "gutu-plugin-admin-shell-workbench",
    domainGroup: "Platform Backbone",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Baseline",
    defaultCategory: {
      id: "platform_governance",
      label: "Platform Governance",
      subcategoryId: "admin_shell",
      subcategoryLabel: "Admin Shell"
    }
  },
  {
    id: "ai-assist-core",
    displayName: "AI Assist Core",
    description: "Guardrailed AI summaries, triage suggestions, anomaly detection, and operator-assist workflows for business teams.",
    repoName: "gutu-plugin-ai-assist-core",
    domainGroup: "AI Systems",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "ai_automation",
      label: "AI & Automation",
      subcategoryId: "operating_models",
      subcategoryLabel: "Operating Models"
    }
  },
  {
    id: "ai-core",
    displayName: "AI Core",
    description: "Durable agent runtime, prompt governance, approval queues, and replay controls.",
    repoName: "gutu-plugin-ai-core",
    domainGroup: "AI Systems",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "ai_automation",
      label: "AI & Automation",
      subcategoryId: "agent_runtime",
      subcategoryLabel: "Agent Runtime"
    }
  },
  {
    id: "ai-evals",
    displayName: "AI Evals",
    description: "Eval datasets, judges, regression baselines, and release-grade AI review.",
    repoName: "gutu-plugin-ai-evals",
    domainGroup: "AI Systems",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "ai_automation",
      label: "AI & Automation",
      subcategoryId: "evaluation_governance",
      subcategoryLabel: "Evaluation & Governance"
    }
  },
  {
    id: "ai-rag",
    displayName: "AI RAG",
    description: "Tenant-safe memory collections, retrieval diagnostics, and grounded knowledge pipelines.",
    repoName: "gutu-plugin-ai-rag",
    domainGroup: "AI Systems",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "ai_automation",
      label: "AI & Automation",
      subcategoryId: "retrieval_knowledge",
      subcategoryLabel: "Retrieval & Knowledge"
    }
  },
  {
    id: "ai-skills-core",
    displayName: "AI Skills Core",
    description: "Typed governed skills, skill assignments, and agent profile publishing for the governed AI platform.",
    repoName: "gutu-plugin-ai-skills-core",
    domainGroup: "AI Systems",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "ai_automation",
      label: "AI & Automation",
      subcategoryId: "skills_profiles",
      subcategoryLabel: "Skills & Profiles"
    }
  },
  {
    id: "analytics-bi-core",
    displayName: "Analytics & BI Core",
    description: "Business datasets, KPI models, warehouse-sync posture, and governed analytics projections across the full operating suite.",
    repoName: "gutu-plugin-analytics-bi-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "analytics_reporting",
      subcategoryLabel: "Analytics & Reporting"
    }
  },
  {
    id: "assets-core",
    displayName: "Assets Core",
    description: "Fixed asset register, capitalization posture, custody, transfer, depreciation scheduling, and asset exception tracking with explicit accounting handoff.",
    repoName: "gutu-plugin-assets-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "assets_lifecycle",
      subcategoryLabel: "Assets & Lifecycle"
    }
  },
  {
    id: "audit-core",
    displayName: "Audit Core",
    description: "Canonical audit trail and sensitive action history.",
    repoName: "gutu-plugin-audit-core",
    domainGroup: "Platform Backbone",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Baseline",
    defaultCategory: {
      id: "platform_governance",
      label: "Platform Governance",
      subcategoryId: "audit_compliance",
      subcategoryLabel: "Audit & Compliance"
    }
  },
  {
    id: "auth-core",
    displayName: "Auth Core",
    description: "Canonical identity and session backbone.",
    repoName: "gutu-plugin-auth-core",
    domainGroup: "Platform Backbone",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Baseline",
    defaultCategory: {
      id: "user_management",
      label: "User Management",
      subcategoryId: "authentication",
      subcategoryLabel: "Authentication"
    }
  },
  {
    id: "automation-core",
    displayName: "Automation Core",
    description: "Scheduled, API, and webhook-triggered routines with governed concurrency, catch-up policy, and operator follow-up loops.",
    repoName: "gutu-plugin-automation-core",
    domainGroup: "Platform Backbone",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "platform_governance",
      label: "Platform Governance",
      subcategoryId: "automation",
      subcategoryLabel: "Automation"
    }
  },
  {
    id: "booking-core",
    displayName: "Booking Core",
    description: "Reservations, booking holds, and conflict-safe resource allocation flows.",
    repoName: "gutu-plugin-booking-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "booking_reservations",
      subcategoryLabel: "Booking & Reservations"
    }
  },
  {
    id: "business-portals-core",
    displayName: "Business Portals Core",
    description: "Customer, vendor, and employee self-service portal workspaces that project governed business records without taking ownership away from source plugins.",
    repoName: "gutu-plugin-business-portals-core",
    domainGroup: "Content and Experience",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "content_experience",
      label: "Content & Experience",
      subcategoryId: "portal_experience",
      subcategoryLabel: "Portal Experience"
    }
  },
  {
    id: "collab-pages-core",
    displayName: "Collaborative Pages (BlockSuite)",
    description: "Notion-style block-based pages — paragraphs, headings, lists, tables, code, callouts, LaTeX, images, attachments, embedded databases. BlockSuite engine, realtime collab.",
    repoName: "gutu-plugin-collab-pages-core",
    domainGroup: "Content and Experience",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Scaffolded",
    defaultCategory: {
      id: "content_experience",
      label: "Content & Experience",
      subcategoryId: "office_productivity",
      subcategoryLabel: "Office Productivity"
    }
  },
  {
    id: "community-core",
    displayName: "Community Core",
    description: "Community, groups, and membership backbone.",
    repoName: "gutu-plugin-community-core",
    domainGroup: "Content and Experience",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Baseline",
    defaultCategory: {
      id: "user_management",
      label: "User Management",
      subcategoryId: "community_membership",
      subcategoryLabel: "Community & Membership"
    }
  },
  {
    id: "company-builder-core",
    displayName: "Company Builder Core",
    description: "Pack 0 operating-model layer that composes governed AI execution into departments, queues, and company builders.",
    repoName: "gutu-plugin-company-builder-core",
    domainGroup: "Governed AI Operating Models",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "ai_automation",
      label: "AI & Automation",
      subcategoryId: "operating_models",
      subcategoryLabel: "Operating Models"
    }
  },
  {
    id: "content-core",
    displayName: "Content Core",
    description: "Pages, posts, and content type backbone.",
    repoName: "gutu-plugin-content-core",
    domainGroup: "Content and Experience",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Baseline",
    defaultCategory: {
      id: "content_experience",
      label: "Content & Experience",
      subcategoryId: "content_management",
      subcategoryLabel: "Content Management"
    }
  },
  {
    id: "contracts-core",
    displayName: "Contracts Core",
    description: "Contract register, commercial or service entitlements, renewal posture, and governed billing schedule truth for long-running business agreements.",
    repoName: "gutu-plugin-contracts-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "sales_commerce",
      subcategoryLabel: "Sales & Commerce"
    }
  },
  {
    id: "crm-core",
    displayName: "CRM Core",
    description: "Lead, opportunity, campaign, and pre-sales engagement records with governed handoff readiness before sales takes commercial truth ownership.",
    repoName: "gutu-plugin-crm-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "crm_pipeline",
      subcategoryLabel: "CRM & Pipeline"
    }
  },
  {
    id: "dashboard-core",
    displayName: "Dashboard Core",
    description: "Dashboard, widget, and saved view backbone.",
    repoName: "gutu-plugin-dashboard-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Baseline",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "analytics_reporting",
      subcategoryLabel: "Analytics & Reporting"
    }
  },
  {
    id: "document-core",
    displayName: "Document Core",
    description: "Document lifecycle and generated document backbone.",
    repoName: "gutu-plugin-document-core",
    domainGroup: "Content and Experience",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Baseline",
    defaultCategory: {
      id: "content_experience",
      label: "Content & Experience",
      subcategoryId: "documents",
      subcategoryLabel: "Documents"
    }
  },
  {
    id: "document-editor-core",
    displayName: "Document Editor (Univer)",
    description: "Word-class rich-text editor — paragraphs, headings, lists, tables, images, comments, headers/footers, DOCX I/O, realtime collab.",
    repoName: "gutu-plugin-document-editor-core",
    domainGroup: "Content and Experience",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Scaffolded",
    defaultCategory: {
      id: "content_experience",
      label: "Content & Experience",
      subcategoryId: "office_productivity",
      subcategoryLabel: "Office Productivity"
    }
  },
  {
    id: "e-invoicing-core",
    displayName: "E-Invoicing Core",
    description: "Jurisdiction-aware electronic invoicing, submission posture, and clearance or compliance reconciliation for statutory finance flows.",
    repoName: "gutu-plugin-e-invoicing-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "accounting_finance",
      subcategoryLabel: "Accounting & Finance"
    }
  },
  {
    id: "execution-workspaces-core",
    displayName: "Execution Workspaces Core",
    description: "Governed run and issue workspaces with preview, browser, code, and runtime service lifecycle controls.",
    repoName: "gutu-plugin-execution-workspaces-core",
    domainGroup: "AI Systems",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "ai_automation",
      label: "AI & Automation",
      subcategoryId: "execution_workspaces",
      subcategoryLabel: "Execution Workspaces"
    }
  },
  {
    id: "field-service-core",
    displayName: "Field Service Core",
    description: "Dispatch, visit execution, technician posture, and spare-parts request orchestration for field service and on-site delivery operations.",
    repoName: "gutu-plugin-field-service-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "support_service",
      subcategoryLabel: "Support & Service"
    }
  },
  {
    id: "files-core",
    displayName: "Files Core",
    description: "File references and storage abstractions.",
    repoName: "gutu-plugin-files-core",
    domainGroup: "Content and Experience",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Baseline",
    defaultCategory: {
      id: "content_experience",
      label: "Content & Experience",
      subcategoryId: "files_assets",
      subcategoryLabel: "Files & Assets"
    }
  },
  {
    id: "forms-core",
    displayName: "Forms Core",
    description: "Dynamic forms and submissions backbone.",
    repoName: "gutu-plugin-forms-core",
    domainGroup: "Content and Experience",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Baseline",
    defaultCategory: {
      id: "content_experience",
      label: "Content & Experience",
      subcategoryId: "forms_submissions",
      subcategoryLabel: "Forms & Submissions"
    }
  },
  {
    id: "hr-payroll-core",
    displayName: "HR & Payroll Core",
    description: "Employee lifecycle, attendance posture, leave and claims, payroll processing, and payout exception truth with governed accounting handoff.",
    repoName: "gutu-plugin-hr-payroll-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "hr_payroll",
      subcategoryLabel: "HR & Payroll"
    }
  },
  {
    id: "integration-core",
    displayName: "Integration Core",
    description: "Governed connector definitions, connection authorization, webhook ingress, and MCP-aware integration health.",
    repoName: "gutu-plugin-integration-core",
    domainGroup: "AI Systems",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "integrations",
      label: "Integrations",
      subcategoryId: "connectors_webhooks",
      subcategoryLabel: "Connectors & Webhooks"
    }
  },
  {
    id: "inventory-core",
    displayName: "Inventory Core",
    description: "Warehouse truth, stock ledger state, reservation visibility, transfer execution, and physical reconciliation for inventory-controlled operations.",
    repoName: "gutu-plugin-inventory-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "inventory_warehouse",
      subcategoryLabel: "Inventory & Warehouse"
    }
  },
  {
    id: "issues-core",
    displayName: "Issues Core",
    description: "Projects, issues, comments, inbox, attachments, and resumable issue sessions for the governed work OS.",
    repoName: "gutu-plugin-issues-core",
    domainGroup: "AI Systems",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "work_management",
      subcategoryLabel: "Work Management"
    }
  },
  {
    id: "jobs-core",
    displayName: "Jobs Core",
    description: "Background jobs, schedules, and execution metadata.",
    repoName: "gutu-plugin-jobs-core",
    domainGroup: "Platform Backbone",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "platform_governance",
      label: "Platform Governance",
      subcategoryId: "job_orchestration",
      subcategoryLabel: "Job Orchestration"
    }
  },
  {
    id: "knowledge-core",
    displayName: "Knowledge Core",
    description: "Knowledge base, docs, and article tree backbone.",
    repoName: "gutu-plugin-knowledge-core",
    domainGroup: "Content and Experience",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Baseline",
    defaultCategory: {
      id: "content_experience",
      label: "Content & Experience",
      subcategoryId: "knowledge_base",
      subcategoryLabel: "Knowledge Base"
    }
  },
  {
    id: "maintenance-cmms-core",
    displayName: "Maintenance & CMMS Core",
    description: "Preventive maintenance plans, asset work orders, inspections, and downtime-aware service coordination for asset-intensive operations.",
    repoName: "gutu-plugin-maintenance-cmms-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "assets_lifecycle",
      subcategoryLabel: "Assets & Lifecycle"
    }
  },
  {
    id: "manufacturing-core",
    displayName: "Manufacturing Core",
    description: "BOM, routing, work order, production execution, WIP posture, and subcontract-friendly production truth with explicit inventory and accounting handoff.",
    repoName: "gutu-plugin-manufacturing-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "manufacturing_production",
      subcategoryLabel: "Manufacturing & Production"
    }
  },
  {
    id: "notifications-core",
    displayName: "Notifications Core",
    description: "Canonical outbound communication control plane with delivery endpoints, preferences, attempts, and local provider routes.",
    repoName: "gutu-plugin-notifications-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Production Candidate",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "communications",
      subcategoryLabel: "Communications"
    }
  },
  {
    id: "org-tenant-core",
    displayName: "Org Tenant Core",
    description: "Tenant and organization graph management.",
    repoName: "gutu-plugin-org-tenant-core",
    domainGroup: "Platform Backbone",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Baseline",
    defaultCategory: {
      id: "user_management",
      label: "User Management",
      subcategoryId: "organizations_tenants",
      subcategoryLabel: "Organizations & Tenants"
    }
  },
  {
    id: "page-builder-core",
    displayName: "Page Builder Core",
    description: "Layout, block, and builder canvas backbone.",
    repoName: "gutu-plugin-page-builder-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Baseline",
    defaultCategory: {
      id: "content_experience",
      label: "Content & Experience",
      subcategoryId: "page_building",
      subcategoryLabel: "Page Building"
    }
  },
  {
    id: "party-relationships-core",
    displayName: "Party & Relationships Core",
    description: "Canonical party, contact, address, relationship, and role-facet records for customer, supplier, prospect, and multi-role business identity flows.",
    repoName: "gutu-plugin-party-relationships-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "party_relationships",
      subcategoryLabel: "Party & Relationships"
    }
  },
  {
    id: "payments-core",
    displayName: "Payments Core",
    description: "Governed provider accounts, payment records, refund state, webhook ingress, and readiness views for the Gutu payments surface.",
    repoName: "gutu-plugin-payments-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "payments",
      subcategoryLabel: "Payments"
    }
  },
  {
    id: "portal-core",
    displayName: "Portal Core",
    description: "Portal shell and self-service entrypoint backbone.",
    repoName: "gutu-plugin-portal-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Baseline",
    defaultCategory: {
      id: "content_experience",
      label: "Content & Experience",
      subcategoryId: "portal_experience",
      subcategoryLabel: "Portal Experience"
    }
  },
  {
    id: "pos-core",
    displayName: "POS Core",
    description: "Retail session, till state, receipt journals, cashier shifts, and offline-tolerant POS execution surfaces that settle into inventory and accounting through explicit handoff.",
    repoName: "gutu-plugin-pos-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "pos_retail",
      subcategoryLabel: "POS & Retail"
    }
  },
  {
    id: "pricing-tax-core",
    displayName: "Pricing & Tax Core",
    description: "Shared price lists, discount rules, tax determination, withholding rules, and commercial policy precedence for every order and billing flow.",
    repoName: "gutu-plugin-pricing-tax-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "pricing_tax",
      subcategoryLabel: "Pricing & Tax"
    }
  },
  {
    id: "procurement-core",
    displayName: "Procurement Core",
    description: "Source-to-procure commitments including requisitions, sourcing outcomes, purchase orders, receipt expectations, and supplier exception management.",
    repoName: "gutu-plugin-procurement-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "procurement_sourcing",
      subcategoryLabel: "Procurement & Sourcing"
    }
  },
  {
    id: "product-catalog-core",
    displayName: "Product & Catalog Core",
    description: "Canonical product, variant, UOM, and policy metadata for goods, services, assets, subscriptions, and kit-style catalog composition.",
    repoName: "gutu-plugin-product-catalog-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "product_catalog",
      subcategoryLabel: "Product & Catalog"
    }
  },
  {
    id: "projects-core",
    displayName: "Projects Core",
    description: "Project plans, milestones, budget posture, execution visibility, and project-driven billing readiness for delivery-centric work.",
    repoName: "gutu-plugin-projects-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "projects_delivery",
      subcategoryLabel: "Projects & Delivery"
    }
  },
  {
    id: "quality-core",
    displayName: "Quality Core",
    description: "Inspection, hold and release state, deviation handling, CAPA tracking, and quality-oriented exception truth across inbound, in-process, and outbound flows.",
    repoName: "gutu-plugin-quality-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "quality_compliance",
      subcategoryLabel: "Quality & Compliance"
    }
  },
  {
    id: "role-policy-core",
    displayName: "Role Policy Core",
    description: "RBAC and ABAC policy management backbone.",
    repoName: "gutu-plugin-role-policy-core",
    domainGroup: "Platform Backbone",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Baseline",
    defaultCategory: {
      id: "user_management",
      label: "User Management",
      subcategoryId: "roles_permissions",
      subcategoryLabel: "Roles & Permissions"
    }
  },
  {
    id: "runtime-bridge-core",
    displayName: "Runtime Bridge Core",
    description: "Governed daemon, watched workspace, local skill, and resumable session contracts for local runtime bridging.",
    repoName: "gutu-plugin-runtime-bridge-core",
    domainGroup: "AI Systems",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "ai_automation",
      label: "AI & Automation",
      subcategoryId: "runtime_bridges",
      subcategoryLabel: "Runtime Bridges"
    }
  },
  {
    id: "sales-core",
    displayName: "Sales Core",
    description: "Quote-to-order demand truth, commercial approvals, fulfillment requests, billing intents, and return initiation for customer-facing sales flows.",
    repoName: "gutu-plugin-sales-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "sales_commerce",
      subcategoryLabel: "Sales & Commerce"
    }
  },
  {
    id: "search-core",
    displayName: "Search Core",
    description: "Typed search indexing and query abstractions.",
    repoName: "gutu-plugin-search-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Baseline",
    defaultCategory: {
      id: "content_experience",
      label: "Content & Experience",
      subcategoryId: "search_discovery",
      subcategoryLabel: "Search & Discovery"
    }
  },
  {
    id: "slides-core",
    displayName: "Slides (Univer)",
    description: "Presentation editor — slides, shapes, text, images, realtime collab. Built on Univer.",
    repoName: "gutu-plugin-slides-core",
    domainGroup: "Content and Experience",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Scaffolded",
    defaultCategory: {
      id: "content_experience",
      label: "Content & Experience",
      subcategoryId: "office_productivity",
      subcategoryLabel: "Office Productivity"
    }
  },
  {
    id: "spreadsheet-core",
    displayName: "Spreadsheet (Univer)",
    description: "Excel-class spreadsheet editor built on Univer — formulas, conditional formatting, data validation, charts, pivot tables, XLSX I/O, realtime collab via Yjs.",
    repoName: "gutu-plugin-spreadsheet-core",
    domainGroup: "Content and Experience",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Scaffolded",
    defaultCategory: {
      id: "content_experience",
      label: "Content & Experience",
      subcategoryId: "office_productivity",
      subcategoryLabel: "Office Productivity"
    }
  },
  {
    id: "storage-local",
    displayName: "Storage — Local Filesystem",
    description: "Storage adapter for the local filesystem. Per-tenant subdirectory isolation, streaming put/get, multipart, HMAC-signed URLs.",
    repoName: "gutu-plugin-storage-local",
    domainGroup: "Platform Backbone",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Scaffolded",
    defaultCategory: {
      id: "platform_infrastructure",
      label: "Platform & Infrastructure",
      subcategoryId: "storage_adapters",
      subcategoryLabel: "Storage Adapters"
    }
  },
  {
    id: "storage-s3",
    displayName: "Storage — S3-compatible",
    description: "S3-compatible adapter. Works with AWS S3, Cloudflare R2, MinIO, Wasabi, Backblaze B2, DigitalOcean Spaces, Scaleway, Linode, Vultr, Oracle, IBM Cloud, and custom endpoints.",
    repoName: "gutu-plugin-storage-s3",
    domainGroup: "Platform Backbone",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Scaffolded",
    defaultCategory: {
      id: "platform_infrastructure",
      label: "Platform & Infrastructure",
      subcategoryId: "storage_adapters",
      subcategoryLabel: "Storage Adapters"
    }
  },
  {
    id: "storage-core",
    displayName: "Storage Core",
    description: "Storage orchestration plugin — declares backends, hydrates the registry, ships presign + test-connection actions and the admin CRUD page.",
    repoName: "gutu-plugin-storage-core",
    domainGroup: "Platform Backbone",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Scaffolded",
    defaultCategory: {
      id: "platform_infrastructure",
      label: "Platform & Infrastructure",
      subcategoryId: "storage_adapters",
      subcategoryLabel: "Storage Adapters"
    }
  },
  {
    id: "subscriptions-core",
    displayName: "Subscriptions Core",
    description: "Subscription plans, billing cycles, renewals, pauses, and service-period truth for recurring commercial models.",
    repoName: "gutu-plugin-subscriptions-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "sales_commerce",
      subcategoryLabel: "Sales & Commerce"
    }
  },
  {
    id: "support-service-core",
    displayName: "Support & Service Core",
    description: "Tickets, service execution posture, SLA state, entitlement-friendly routing, and service billing requests for customer support operations.",
    repoName: "gutu-plugin-support-service-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "support_service",
      subcategoryLabel: "Support & Service"
    }
  },
  {
    id: "template-core",
    displayName: "Template Core",
    description: "Reusable templates for content, messages, and workflows.",
    repoName: "gutu-plugin-template-core",
    domainGroup: "Content and Experience",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Baseline",
    defaultCategory: {
      id: "content_experience",
      label: "Content & Experience",
      subcategoryId: "templates",
      subcategoryLabel: "Templates"
    }
  },
  {
    id: "traceability-core",
    displayName: "Traceability & Dimensions Core",
    description: "Document lineage, correlation IDs, upstream/downstream references, reconciliation surfaces, and common operating dimensions for cross-plugin traceability.",
    repoName: "gutu-plugin-traceability-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "traceability_dimensions",
      subcategoryLabel: "Traceability & Dimensions"
    }
  },
  {
    id: "treasury-core",
    displayName: "Treasury Core",
    description: "Cash-position tracking, banking operations, liquidity forecasting, and treasury-side reconciliation for finance teams.",
    repoName: "gutu-plugin-treasury-core",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "business",
      label: "Business",
      subcategoryId: "accounting_finance",
      subcategoryLabel: "Accounting & Finance"
    }
  },
  {
    id: "user-directory",
    displayName: "User Directory",
    description: "Internal person and directory backbone.",
    repoName: "gutu-plugin-user-directory",
    domainGroup: "Operational Data",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Baseline",
    defaultCategory: {
      id: "user_management",
      label: "User Management",
      subcategoryId: "directory_profiles",
      subcategoryLabel: "Directory & Profiles"
    }
  },
  {
    id: "whiteboard-core",
    displayName: "Whiteboard (BlockSuite Edgeless)",
    description: "Miro-class infinite canvas — shapes, connectors, brushes, mindmaps, frames, sticky notes. Realtime collab via Yjs.",
    repoName: "gutu-plugin-whiteboard-core",
    domainGroup: "Content and Experience",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Scaffolded",
    defaultCategory: {
      id: "content_experience",
      label: "Content & Experience",
      subcategoryId: "office_productivity",
      subcategoryLabel: "Office Productivity"
    }
  },
  {
    id: "workflow-core",
    displayName: "Workflow Core",
    description: "Explicit workflows and approval state machines.",
    repoName: "gutu-plugin-workflow-core",
    domainGroup: "Platform Backbone",
    trustTier: "first-party",
    reviewTier: "R1",
    maturity: "Hardened",
    defaultCategory: {
      id: "platform_governance",
      label: "Platform Governance",
      subcategoryId: "workflow_approvals",
      subcategoryLabel: "Workflow & Approvals"
    }
  }
] satisfies DashboardPluginMetadataInput[];
